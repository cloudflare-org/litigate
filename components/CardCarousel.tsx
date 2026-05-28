"use client";
import { useRef, useState, useCallback, useEffect } from "react";

interface CarouselProps {
    children: React.ReactNode[];
    /** How many cards visible at once on desktop */
    perView?: number;
}

export default function CardCarousel({ children, perView = 3 }: CarouselProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [current, setCurrent] = useState(0);
    const total = children.length;
    const maxIndex = Math.max(0, total - perView);

    // Drag state
    const dragStart = useRef<number | null>(null);
    const dragDelta = useRef(0);

    const goTo = useCallback((idx: number) => {
        const clamped = Math.max(0, Math.min(idx, maxIndex));
        setCurrent(clamped);
    }, [maxIndex]);

    const next = () => goTo(current + 1);
    const prev = () => goTo(current - 1);

    // Pointer drag
    const onPointerDown = (e: React.PointerEvent) => {
        dragStart.current = e.clientX;
        dragDelta.current = 0;
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: React.PointerEvent) => {
        if (dragStart.current === null) return;
        dragDelta.current = e.clientX - dragStart.current;
    };
    const onPointerUp = () => {
        if (dragStart.current === null) return;
        if (dragDelta.current < -50) next();
        else if (dragDelta.current > 50) prev();
        dragStart.current = null;
        dragDelta.current = 0;
    };

    // Responsive perView
    const [visibleCount, setVisibleCount] = useState(perView);
    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 640) setVisibleCount(1);
            else if (window.innerWidth < 1024) setVisibleCount(2);
            else setVisibleCount(perView);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, [perView]);

    const effectiveMax = Math.max(0, total - visibleCount);
    const safeCurrent = Math.min(current, effectiveMax);
    const pct = total > 0 ? (100 / total) * safeCurrent : 0;

    return (
        <>
            <style>{`
                .cc-wrap { position: relative; }
                .cc-viewport {
                    overflow: hidden;
                    cursor: grab;
                    user-select: none;
                    -webkit-user-select: none;
                }
                .cc-viewport:active { cursor: grabbing; }
                .cc-track {
                    display: flex;
                    gap: 1.5rem;
                    transition: transform .45s cubic-bezier(.4,0,.2,1);
                    will-change: transform;
                }
                .cc-track > * {
                    flex: 0 0 calc((100% - (var(--cc-per, 3) - 1) * 1.5rem) / var(--cc-per, 3));
                    min-width: 0;
                }
                .cc-controls {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: .5rem;
                    margin-bottom: 1.5rem;
                }
                .cc-btn {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: 1px solid var(--color-border);
                    background: var(--color-surface-2);
                    color: var(--color-text-secondary);
                    font-size: 1.2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: border-color .2s, color .2s, background .2s;
                    line-height: 1;
                    padding: 0;
                    flex-shrink: 0;
                }
                .cc-btn:hover:not(:disabled) {
                    border-color: var(--color-accent-primary);
                    color: var(--color-accent-primary);
                    background: rgba(182,157,116,.08);
                }
                .cc-btn:disabled { opacity: .3; cursor: default; }
                .cc-pips {
                    display: flex;
                    gap: .35rem;
                    align-items: center;
                    margin-right: auto;
                }
                .cc-pip {
                    height: 3px;
                    width: 20px;
                    border-radius: 2px;
                    background: var(--color-border);
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    transition: background .25s, width .3s;
                }
                .cc-pip.active {
                    background: var(--color-accent-primary);
                    width: 36px;
                }
            `}</style>

            <div className="cc-wrap">
                {/* Controls row */}
                <div className="cc-controls">
                    <div className="cc-pips">
                        {Array.from({ length: effectiveMax + 1 }).map((_, i) => (
                            <button
                                key={i}
                                className={`cc-pip${i === safeCurrent ? " active" : ""}`}
                                onClick={() => goTo(i)}
                                aria-label={`Go to position ${i + 1}`}
                            />
                        ))}
                    </div>
                    <button className="cc-btn" onClick={prev} disabled={safeCurrent === 0} aria-label="Previous">‹</button>
                    <button className="cc-btn" onClick={next} disabled={safeCurrent >= effectiveMax} aria-label="Next">›</button>
                </div>

                {/* Track */}
                <div
                    className="cc-viewport"
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onPointerLeave={onPointerUp}
                >
                    <div
                        ref={trackRef}
                        className="cc-track"
                        style={{
                            transform: `translateX(calc(-${pct}% - ${safeCurrent * 1.5}rem))`,
                            // @ts-expect-error css var
                            "--cc-per": visibleCount,
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
