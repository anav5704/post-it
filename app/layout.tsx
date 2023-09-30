import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import QueryWrapper from "./auth/QueryWrapper";
import Nav from "./auth/Nav";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "700"], variable: "--Rubik"});

export const metadata: Metadata = {
    title: "Post It!",
    description: "App where you can post your thoughts?",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
            <body className={`${rubik.className} mx-4 md:mx-48 bg-neutral-950 text-white`}>
                <QueryWrapper>
                    <Nav />
                    {children}
                </QueryWrapper>
            </body>
        </html>
    );
}
