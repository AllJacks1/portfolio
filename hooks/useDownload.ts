import { useState, useCallback } from "react";

interface UseDownloadReturn {
    isDownloading: boolean;
    isDownloaded: boolean;
    download: (apiUrl: string, filename?: string) => Promise<void>;
    error: string | null;
}

export function useDownload(delay: number = 800): UseDownloadReturn {
    const [isDownloading, setIsDownloading] = useState(false);
    const [isDownloaded, setIsDownloaded] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const download = useCallback(
        async (apiUrl: string, filename: string = "resume.pdf") => {
            setIsDownloading(true);
            setError(null);

            try {
                // UX delay for feedback
                await new Promise((resolve) => setTimeout(resolve, delay));

                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error("Download failed");
                }

                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);

                const link = document.createElement("a");
                link.href = url;
                link.download = filename;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                window.URL.revokeObjectURL(url);

                setIsDownloaded(true);
                setTimeout(() => setIsDownloaded(false), 3000);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Download failed");
                console.error("Download error:", err);
            } finally {
                setIsDownloading(false);
            }
        },
        [delay]
    );

    return { isDownloading, isDownloaded, download, error };
}