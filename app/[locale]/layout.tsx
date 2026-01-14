import type { Metadata } from "next";
import { PrimeReactProvider } from 'primereact/api';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import 'mapbox-gl/dist/mapbox-gl.css';
import "../globals.css";
import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { locales } from "@/navigation";

export const metadata: Metadata = {
    title: "Jean Luc Kashindi Nestor - Portfolio",
    description: "Portfolio professionnel",
};

export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    if (!locales.includes(locale as any)) {
        notFound();
    }
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`font-roboto antialiased bg-black text-white`}>
                <NextIntlClientProvider messages={messages}>
                    <PrimeReactProvider>
                        <MegaMenu />
                        {children}
                        <Footer />
                    </PrimeReactProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
