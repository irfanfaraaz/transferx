import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-csv-importer/dist/index.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "TransferX",
    description: "Transfer many payments in one transaction",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="gradient-bg-welcome min-h-screen">{children}</body>
        </html>
    );
}
