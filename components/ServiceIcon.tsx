import { Scale, BarChart3, Search, Landmark, Shield, Briefcase } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number; color?: string }>> = {
    "international-arbitration": Scale,
    "corporate-litigation": BarChart3,
    "asset-recovery": Search,
    "private-wealth": Landmark,
    "regulatory-defence": Shield,
    "investment-law": Briefcase,
};

interface ServiceIconProps {
    id: string;
    className?: string;
    size?: number;
    color?: string;
}

export function ServiceIcon({ id, className, size = 24, color }: ServiceIconProps) {
    const Icon = iconMap[id];
    if (!Icon) return null;
    return <Icon className={className} size={size} color={color} />;
}
