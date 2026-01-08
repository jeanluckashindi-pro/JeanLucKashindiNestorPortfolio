"use client";

import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="w-full border-t bg-background py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-8">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    {t("builtBy")}{" "}
                    <Link
                        href="/"
                        className="font-medium underline underline-offset-4"
                    >
                        Jean-Luc Kashindi Nestor
                    </Link>
                    .
                </p>
                <div className="flex gap-4">
                    <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:underline underline-offset-4">
                        {t("contact")}
                    </Link>
                    <Link href="/profil" className="text-sm font-medium text-muted-foreground hover:underline underline-offset-4">
                        {t("profile")}
                    </Link>
                </div>
            </div>
        </footer>
    );
}
