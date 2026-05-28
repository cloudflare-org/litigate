import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import fs from "fs";
import path from "path";
import PortalViewer from "./PortalViewer";

interface Props {
    params: Promise<{ ref: string }>;
}

export default async function PortalDocPage({ params }: Props) {
    const { ref } = await params;
    const decodedRef = decodeURIComponent(ref);

    // Check session cookie set by the auth API
    const cookieStore = await cookies();
    const session = cookieStore.get("portal_session");
    if (!session || session.value !== decodedRef) {
        notFound();
    }

    // Find the document file — ref maps to a filename in /public/documents/
    // e.g. ref "LGF-2024-001" → /public/documents/LGF-2024-001.html
    const docsDir = path.join(process.cwd(), "public", "documents");
    const filePath = path.join(docsDir, `${decodedRef}.html`);

    let htmlContent = "";
    let fileExists = false;

    try {
        if (fs.existsSync(filePath)) {
            htmlContent = fs.readFileSync(filePath, "utf-8");
            fileExists = true;
        }
    } catch {
        fileExists = false;
    }

    return <PortalViewer docRef={decodedRef} htmlContent={htmlContent} fileExists={fileExists} />;
}
