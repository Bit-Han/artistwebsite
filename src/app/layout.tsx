import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../component/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "The Void Tattoo - Professional Tattoo Artist",
	description:
		"Creating unique tattoo art that tells your story. Professional tattoo services with over a decade of experience.",
	manifest: "/manifest.json",
	themeColor: "#000000",
	viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={inter.className}>
				<Header />
				<div className="pt-16">{children}</div>
			</body>
		</html>
	);
}
