'use client';

import { usePathname, useRouter } from '@/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useState, useRef, useEffect } from 'react';
import {
    FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaGlobe,
    FaArrowRight, FaEnvelope, FaMapMarkerAlt, FaChevronDown
} from 'react-icons/fa';

export default function Footer() {
    const pathname = usePathname();
    const router = useRouter();
    const currentLocale = useLocale();

    const languages = [
        { code: 'fr', label: 'Français' },
        { code: 'en', label: 'English' },
        { code: 'zh', label: '中文' },
        { code: 'ru', label: 'Русский' },
        { code: 'pt', label: 'Português' },
        { code: 'es', label: 'Español' },
        { code: 'sw', label: 'Kiswahili' },
        { code: 'rn', label: 'Kirundi' },
    ];

    const handleLanguageChange = (newLocale: string) => {
        // With next-intl/navigation, we just push the pathname with the new locale
        // The router automatically handles the prefix
        router.push(pathname, { locale: newLocale });
    };

    const t = useTranslations('Footer');

    return (
        <footer className="bg-[#020202] text-white pt-24 pb-12 border-t border-white/5 font-sans relative">
            {/* Ambient Background Glow - Wrapped to prevent overflow issues while allowing dropdown to pop out */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-blue-900/5 to-transparent"></div>
            </div>

            <div className="max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

                    {/* COLUMN 1: BRAND */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <span className="w-10 h-10 flex items-center justify-center bg-white text-black font-extrabold text-xl rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                                JK
                            </span>
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-xl tracking-wide">KASHINDI</span>
                                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-[0.3em]">{t('Portfolio')}</span>
                            </div>
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                            {t('BrandQuote')}
                        </p>
                        <div className="flex items-center gap-4">
                            {[FaGithub, FaLinkedin, FaTwitter, FaInstagram].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* COLUMN 2: EXPLORE */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8 flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-blue-500"></span> {t('Explore')}
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { l: t('Links.Projects'), h: '/projects' },
                                { l: t('Links.Experience'), h: '/experience' },
                                { l: t('Links.Gallery'), h: '/gallery' },
                                { l: t('Links.Articles'), h: '/articles' },
                                { l: t('Links.About'), h: '/profile#about' },
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.h} className="text-neutral-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 3: LEGAL & INFO */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8 flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-blue-500"></span> {t('Info')}
                        </h4>
                        <ul className="space-y-4 text-sm text-neutral-400">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1 text-blue-500" />
                                <span dangerouslySetInnerHTML={{ __html: t.raw('Remote') }}></span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-blue-500" />
                                <a href="mailto:contact@kashindi.com" className="hover:text-white transition-colors">contact@kashindi.com</a>
                            </li>
                            <li className="pt-4 border-t border-white/5 mt-4">
                                <a href="#" className="hover:text-white transition-colors">{t('Legal')}</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">{t('Privacy')}</a>
                            </li>
                        </ul>
                    </div>

                    {/* COLUMN 4: LANGUAGES */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8 flex items-center gap-2">
                            <FaGlobe className="text-blue-500" /> {t('Languages')}
                        </h4>
                        <div className="relative">
                            <LanguageDropdown currentLocale={currentLocale} languages={languages} onSelect={handleLanguageChange} />
                        </div>
                        <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm relative group hover:bg-white/10 transition-colors">
                            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 rounded-l-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            <p className="text-[10px] text-neutral-400 leading-relaxed font-medium pl-2">
                                {t('LangNote')}
                            </p>
                        </div>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-neutral-500 text-xs">
                        © 2024 Jean-Luc Kashindi. {t('Rights')}
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] uppercase font-bold text-neutral-600 tracking-widest">{t('MadeWith')}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Internal Dropdown Component for better organization
function LanguageDropdown({
    currentLocale,
    languages,
    onSelect
}: {
    currentLocale: string;
    languages: { code: string; label: string }[];
    onSelect: (code: string) => void;
}) {
    // We need state for open/close
    // Since Footer is a client component, we can use hooks directly here or in the main component. 
    // But wait, I need to define useState inside the main component or make this its own component.
    // Let's keep it simple: I will use a simple logical component defined OUTSIDE the Footer export, 
    // but I need to make sure I import useState at the top of the file.

    // Actually, I'll inline the logic in the main Footer component to avoid prop drilling complexity for now, or just define it above.
    // Let's define it inside Footer to access state easily, OR better, define it as a separate function at the bottom and use it.

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const currentLangLabel = languages.find(l => l.code === currentLocale)?.label || 'Language';

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full h-12 bg-[#0a0a0a] border border-white/10 rounded-xl flex items-center justify-between px-4 hover:border-white/20 transition-all duration-300 group shadow-lg"
            >
                <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
                    <span className="text-sm font-bold text-white uppercase tracking-wider">{currentLangLabel}</span>
                </div>
                <FaChevronDown className={`text-neutral-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <div className={`
                absolute bottom-full left-0 w-full mb-2 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-50 transition-all duration-300 origin-bottom
                ${isOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}
            `}>
                <div className="p-2 max-h-[240px] overflow-y-auto scrollbar-hide">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                onSelect(lang.code);
                                setIsOpen(false);
                            }}
                            className={`
                                w-full flex items-center gap-3 px-3 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all
                                ${currentLocale === lang.code
                                    ? 'bg-blue-600 text-white'
                                    : 'text-neutral-400 hover:bg-white/5 hover:text-white'}
                            `}
                        >
                            <span className={`w-1.5 h-1.5 rounded-full ${currentLocale === lang.code ? 'bg-white' : 'bg-transparent border border-neutral-600'}`}></span>
                            {lang.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Dummy export to keep file valid structure if I cut off the end
const _ignore = null;
