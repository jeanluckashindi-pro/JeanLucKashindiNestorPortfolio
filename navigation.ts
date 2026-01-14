import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'fr', 'zh', 'ru', 'pt', 'es', 'sw', 'rn'],
    defaultLocale: 'fr'
});

export const locales = routing.locales;

export const { Link, redirect, usePathname, useRouter } =
    createNavigation(routing);
