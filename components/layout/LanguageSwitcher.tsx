"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <select
            defaultValue={locale}
            disabled={isPending}
            onChange={onSelectChange}
            className="bg-background border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="sw">SW</option>
            <option value="zh">ZH</option>
            <option value="rn">RN</option>
            <option value="de">DE</option>
            <option value="pt">PT</option>
        </select>
    );
}
