export const runtime = "edge";

import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import PortalViewer from "./PortalViewer";

interface Props {
    params: Promise<{ ref: string }>;
}

export default async function PortalDocPage({ params }: Props) {
    const { ref } = await params;
    const decodedRef = decodeURIComponent(ref);

    // Verify session cookie
    const cookieStore = await cookies();
    const session = cookieStore.get("portal_session");
    if (!session || session.value !== decodedRef) {
        notFound();
    }

    // HTML doc for iframe display
    const docUrl = `/documents/${decodedRef}.html`;
    // PDF for direct download (same ref, .pdf extension)
    const pdfUrl = `/documents/${decodedRef}.pdf`;

    return <PortalViewer docRef={decodedRef} docUrl={docUrl} pdfUrl={pdfUrl} />;
}
