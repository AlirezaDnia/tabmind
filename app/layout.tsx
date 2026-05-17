import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/store/auth-context";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "TabMind",
    description: "AI browser memory",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Toaster richColors />
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
}
