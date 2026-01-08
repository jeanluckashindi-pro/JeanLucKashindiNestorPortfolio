import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['fr', 'en', 'sw', 'zh', 'rn', 'de', 'pt'],
    defaultLocale: 'fr'
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
