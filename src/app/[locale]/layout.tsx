import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "600", "700"],
});

export const metadata: Metadata = {
	title: "Edson Brandon Dev",
	description: "Desenvolvedor Front-end",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};
export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	const messages = await getMessages();
	return (
		<html lang={params.locale} className={poppins.className}>
			<body className="px-20 py-10 xsm:py-10 xsm:px-5 xl:px-40 bg-gray-50 dark:bg-bg-dark">
				<ThemeProvider attribute="class" defaultTheme="system">
					<NextIntlClientProvider messages={messages}>
						<Navbar />
						{children}
						<Footer />
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
