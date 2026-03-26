import type {Metadata} from "next";
import {Inter, Playfair_Display} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {CartProvider} from "@/lib/cart-context";
import React from "react";

const playfair = Playfair_Display({
	subsets: ["latin", "cyrillic"],
	variable: "--font-playfair",
	display: "swap",
});

const inter = Inter({
	subsets: ["latin", "cyrillic"],
	variable: "--font-inter",
});


export const metadata: Metadata = {
	title: "Blooming Heart - Цветочный магазин",
	description: "Премиальные букеты и цветочные композиции с доставкой",
	icons: {
		icon: [
			{url: '/images/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png'},
			{url: '/images/favicons/favicon.svg', type: 'image/svg+xml'},
		],
		shortcut: '/images/favicons/favicon.ico',
		apple: [
			{url: '/images/favicons/apple-touch-icon.png', sizes: '180x180'},
		],
	},
	manifest: '/images/favicons/site.webmanifest',
	appleWebApp: {
		title: 'Blooming Heart',
	},
};

export default function RootLayout({
	                                   children,
                                   }: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
		<body className="antialiased bg-stone-50 text-stone-900 ">
		<CartProvider>
			<div className="wrapper">
				<Header/>
				<main className="grow">{children}</main>
				<Footer/>
			</div>
		</CartProvider>
		</body>
		</html>
	);
}
