import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(request: NextRequest) {
    try {
        const filePath = join(process.cwd(), "public", "resume.pdf");
        const fileBuffer = await readFile(filePath);

        const headers = new Headers();
        headers.set("Content-Type", "application/pdf");
        headers.set(
            "Content-Disposition",
            'attachment; filename="Karl_Christian_Tan_Resume.pdf"'
        );
        headers.set("Content-Length", fileBuffer.length.toString());

        return new NextResponse(fileBuffer, {
            status: 200,
            headers,
        });
    } catch (error) {
        console.error("Resume download error:", error);
        return NextResponse.json(
            { error: "Resume file not found" },
            { status: 404 }
        );
    }
}