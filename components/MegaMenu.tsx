'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import {
    FaHome, FaUser, FaBriefcase, FaCode, FaNewspaper, FaCompass, FaImages, FaEnvelope,
    FaIdCard, FaHistory, FaBolt, FaFilePdf, FaBook, FaCertificate, FaGlobe, FaMobileAlt,
    FaServer, FaChartBar, FaVideo, FaComments, FaBullhorn, FaMicrochip, FaWrench, FaChartLine,
    FaChevronDown, FaBars, FaTimes, FaArrowRight, FaStar, FaFingerprint, FaLayerGroup, FaLightbulb,
    FaRocket, FaBrain, FaNetworkWired, FaPalette, FaTerminal, FaGraduationCap, FaMedal,
    FaHandshake, FaEye, FaHeart, FaLaptopCode, FaBuilding, FaUniversity, FaPenNib, FaSearch, FaCamera,
    FaInfinity
} from 'react-icons/fa';

type IconType = React.ComponentType<{ className?: string }>;

interface SubItem {
    label: string;
    icon: IconType;
    desc: string;
    href?: string;
    tag?: string;
}

interface MenuItemData {
    key: string;
    label: string;
    href?: string;
    mega?: boolean;
    columns?: {
        title: string;
        items: SubItem[];
    }[];
    featured?: {
        title: string;
        desc: string;
        icon: IconType;
        ctaText?: string;
        ctaLink?: string;
    };
}

export default function MegaMenu() {
    const t = useTranslations('MegaMenu');
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // FULLY LOCALIZED CONTENT
    const menuItems: MenuItemData[] = [
        { key: 'Home', label: t('Home'), href: '/', mega: false },
        {
            key: 'Profile', label: t('Profile.Label'), mega: true,
            featured: {
                title: t('Profile.Featured.Title'),
                desc: t('Profile.Featured.Desc'),
                icon: FaUser,
                ctaText: t('Profile.Featured.CTA'),
                ctaLink: '/profile#about'
            },
            columns: [
                {
                    title: t('Profile.Columns.Essentials.Title'),
                    items: [
                        { label: t('Profile.Columns.Essentials.About.Label'), icon: FaIdCard, desc: t('Profile.Columns.Essentials.About.Desc'), href: '/profile#about' },
                        { label: t('Profile.Columns.Essentials.History.Label'), icon: FaHistory, desc: t('Profile.Columns.Essentials.History.Desc'), href: '/profile#history' },
                        { label: t('Profile.Columns.Essentials.Values.Label'), icon: FaHeart, desc: t('Profile.Columns.Essentials.Values.Desc'), href: '/profile#values' }
                    ]
                },
                {
                    title: t('Profile.Columns.Skills.Title'),
                    items: [
                        { label: t('Profile.Columns.Skills.Hard.Label'), icon: FaBolt, desc: t('Profile.Columns.Skills.Hard.Desc'), href: '/profile#skills', tag: 'Top 1%' },
                        { label: t('Profile.Columns.Skills.Soft.Label'), icon: FaBrain, desc: t('Profile.Columns.Skills.Soft.Desc'), href: '/profile#soft' },
                        { label: t('Profile.Columns.Skills.CV.Label'), icon: FaFilePdf, desc: t('Profile.Columns.Skills.CV.Desc'), href: '/cv.pdf', tag: 'Download' }
                    ]
                }
            ]
        },
        {
            key: 'Experience', label: t('Experience.Label'), mega: true,
            featured: {
                title: t('Experience.Featured.Title'),
                desc: t('Experience.Featured.Desc'),
                icon: FaBriefcase,
                ctaText: t('Experience.Featured.CTA'),
                ctaLink: '/experience#timeline'
            },
            columns: [
                {
                    title: t('Experience.Columns.Career.Title'),
                    items: [
                        { label: t('Experience.Columns.Career.Positions.Label'), icon: FaBriefcase, desc: t('Experience.Columns.Career.Positions.Desc'), href: '/experience#pro' },
                        { label: t('Experience.Columns.Career.Clients.Label'), icon: FaNetworkWired, desc: t('Experience.Columns.Career.Clients.Desc'), href: '/experience#clients' }
                    ]
                },
                {
                    title: t('Experience.Columns.Knowledge.Title'),
                    items: [
                        { label: t('Experience.Columns.Knowledge.Diplomas.Label'), icon: FaGraduationCap, desc: t('Experience.Columns.Knowledge.Diplomas.Desc'), href: '/experience#academic' },
                        { label: t('Experience.Columns.Knowledge.Certs.Label'), icon: FaCertificate, desc: t('Experience.Columns.Knowledge.Certs.Desc'), href: '/experience#certs', tag: 'Pro' }
                    ]
                },
                {
                    title: t('Experience.Columns.Highlights.Title'),
                    items: [
                        { label: t('Experience.Columns.Highlights.Missions.Label'), icon: FaStar, desc: t('Experience.Columns.Highlights.Missions.Desc'), href: '/experience#key-missions' },
                        { label: t('Experience.Columns.Highlights.Hackathons.Label'), icon: FaRocket, desc: t('Experience.Columns.Highlights.Hackathons.Desc'), href: '/experience#hackathons' }
                    ]
                }
            ]
        },
        {
            key: 'Projects', label: t('Projects.Label'), mega: true,
            featured: {
                title: t('Projects.Featured.Title'),
                desc: t('Projects.Featured.Desc'),
                icon: FaCode,
                ctaText: t('Projects.Featured.CTA'),
                ctaLink: '/projects'
            },
            columns: [
                {
                    title: t('Projects.Columns.Type.Title'),
                    items: [
                        { label: t('Projects.Columns.Type.Pro.Label'), icon: FaBuilding, desc: t('Projects.Columns.Type.Pro.Desc'), href: '/projects#pro' },
                        { label: t('Projects.Columns.Type.Personal.Label'), icon: FaUser, desc: t('Projects.Columns.Type.Personal.Desc'), href: '/projects#personal' },
                        { label: t('Projects.Columns.Type.OSS.Label'), icon: FaGlobe, desc: t('Projects.Columns.Type.OSS.Desc'), href: '/projects#oss' }
                    ]
                },
                {
                    title: t('Projects.Columns.Stack.Title'),
                    items: [
                        { label: t('Projects.Columns.Stack.Web.Label'), icon: FaLaptopCode, desc: t('Projects.Columns.Stack.Web.Desc'), href: '/projects#web' },
                        { label: t('Projects.Columns.Stack.Mobile.Label'), icon: FaMobileAlt, desc: t('Projects.Columns.Stack.Mobile.Desc'), href: '/projects#mobile' },
                        { label: t('Projects.Columns.Stack.Backend.Label'), icon: FaServer, desc: t('Projects.Columns.Stack.Backend.Desc'), href: '/projects#backend' }
                    ]
                },
                {
                    title: t('Projects.Columns.DeepDive.Title'),
                    items: [
                        { label: t('Projects.Columns.DeepDive.Cases.Label'), icon: FaSearch, desc: t('Projects.Columns.DeepDive.Cases.Desc'), href: '/projects#cases' },
                        { label: t('Projects.Columns.DeepDive.DevOps.Label'), icon: FaTerminal, desc: t('Projects.Columns.DeepDive.DevOps.Desc'), href: '/projects#devops', tag: 'CI/CD' }
                    ]
                }
            ]
        },
        {
            key: 'Articles', label: t('Articles.Label'), mega: true,
            featured: {
                title: t('Articles.Featured.Title'),
                desc: t('Articles.Featured.Desc'),
                icon: FaPenNib,
                ctaText: t('Articles.Featured.CTA'),
                ctaLink: '/articles'
            },
            columns: [
                {
                    title: t('Articles.Columns.Read.Title'),
                    items: [
                        { label: t('Articles.Columns.Read.Tech.Label'), icon: FaMicrochip, desc: t('Articles.Columns.Read.Tech.Desc'), href: '/articles/tech' },
                        { label: t('Articles.Columns.Read.Tutorials.Label'), icon: FaVideo, desc: t('Articles.Columns.Read.Tutorials.Desc'), href: '/articles/tutorials' },
                        { label: t('Articles.Columns.Read.News.Label'), icon: FaBullhorn, desc: t('Articles.Columns.Read.News.Desc'), href: '/articles/news' }
                    ]
                },
                {
                    title: t('Articles.Columns.Watch.Title'),
                    items: [
                        { label: t('Articles.Columns.Watch.Trends.Label'), icon: FaChartLine, desc: t('Articles.Columns.Watch.Trends.Desc'), href: '/discoveries/trends' },
                        { label: t('Articles.Columns.Watch.Tools.Label'), icon: FaWrench, desc: t('Articles.Columns.Watch.Tools.Desc'), href: '/discoveries/tools' },
                        { label: t('Articles.Columns.Watch.Reading.Label'), icon: FaBook, desc: t('Articles.Columns.Watch.Reading.Desc'), href: '/discoveries/reading' }
                    ]
                }
            ]
        },
        {
            key: 'Gallery', label: t('Gallery.Label'), mega: true,
            featured: {
                title: t('Gallery.Featured.Title'),
                desc: t('Gallery.Featured.Desc'),
                icon: FaCamera,
                ctaText: t('Gallery.Featured.CTA'),
                ctaLink: '/gallery'
            },
            columns: [
                {
                    title: t('Gallery.Columns.Visuals.Title'),
                    items: [
                        { label: t('Gallery.Columns.Visuals.Screenshots.Label'), icon: FaImages, desc: t('Gallery.Columns.Visuals.Screenshots.Desc'), href: '/gallery/screenshots' },
                        { label: t('Gallery.Columns.Visuals.UI.Label'), icon: FaPalette, desc: t('Gallery.Columns.Visuals.UI.Desc'), href: '/gallery/ui-design' },
                        { label: t('Gallery.Columns.Visuals.Events.Label'), icon: FaInfinity, desc: t('Gallery.Columns.Visuals.Events.Desc'), href: '/gallery/events' }
                    ]
                },
                {
                    title: t('Gallery.Columns.Motion.Title'),
                    items: [
                        { label: t('Gallery.Columns.Motion.Demos.Label'), icon: FaVideo, desc: t('Gallery.Columns.Motion.Demos.Desc'), href: '/gallery/demos' },
                        { label: t('Gallery.Columns.Motion.Talks.Label'), icon: FaBullhorn, desc: t('Gallery.Columns.Motion.Talks.Desc'), href: '/gallery/talks' }
                    ]
                }
            ]
        },
        { key: 'Contact', label: t('Contact'), href: '/contact', mega: false }
    ];

    const handleMouseEnter = (key: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveMenu(key);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 200);
    };

    return (
        <>
            {/* 
                THEME: RESTORED RICH PROFESSIONAL (Iteration 13) - Fully Localized
            */}
            <header className="fixed top-0 left-0 w-full z-[100] bg-[#020202]/90 backdrop-blur-xl border-b border-white/5 transition-all duration-500 font-sans">
                <div className="max-w-[1920px] mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-22">

                        {/* 1. LOGO */}
                        <div className="flex-shrink-0 cursor-pointer group relative" onClick={() => window.location.href = '/'}>
                            <div className="flex items-center gap-3 relative z-10">
                                <span className="w-9 h-9 flex items-center justify-center bg-white text-black font-extrabold text-lg rounded-lg shadow-white/20 shadow-lg group-hover:scale-105 transition-transform duration-300">
                                    JK
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-lg tracking-wide group-hover:tracking-wider transition-all duration-300">KASHINDI</span>
                                    <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-[0.25em]">Creative</span>
                                </div>
                            </div>
                        </div>

                        {/* 2. DESKTOP MENU */}
                        <nav className="hidden lg:flex items-center space-x-2">
                            {menuItems.map((item) => (
                                <div
                                    key={item.key}
                                    onMouseEnter={() => handleMouseEnter(item.key)}
                                    onMouseLeave={handleMouseLeave}
                                    className="relative"
                                >
                                    <button
                                        onClick={() => !item.mega && (window.location.href = item.href || '#')}
                                        className={`
                                            group relative px-5 py-6 text-xs font-bold uppercase tracking-widest transition-all duration-300
                                            ${activeMenu === item.key ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-neutral-500 hover:text-white'}
                                        `}
                                    >
                                        <span className="relative z-10">{item.label}</span>
                                        {/* Minimal Dot on Active */}
                                        {activeMenu === item.key && (
                                            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_5px_#3b82f6]"></span>
                                        )}
                                    </button>

                                    {/* MEGA MENU DROPDOWN */}
                                    {item.mega && activeMenu === item.key && (
                                        <div className="fixed left-1/2 -translate-x-1/2 top-[5.5rem] w-[90vw] max-w-[1400px] z-[200] animate-in fade-in slide-in-from-top-4 duration-300">

                                            {/* Container */}
                                            <div className="bg-[#050505] border border-white/10 rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.95)] overflow-hidden">
                                                <div className="flex min-h-[380px]">

                                                    {/* Left Panel */}
                                                    <div className="w-[30%] relative overflow-hidden group/panel bg-[#080808]">
                                                        {/* Moving Background */}
                                                        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#000] z-0"></div>
                                                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] group-hover/panel:bg-blue-600/20 transition-all duration-1000 animate-pulse"></div>

                                                        <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                                                            <div>
                                                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl text-white mb-6 border border-white/10 shadow-inner group-hover/panel:scale-110 transition-transform duration-500">
                                                                    {item.featured?.icon && <item.featured.icon />}
                                                                </div>
                                                                <h3 className="text-2xl font-bold text-white mb-4 italic font-serif">
                                                                    {item.featured?.title}
                                                                </h3>
                                                                <p className="text-neutral-400 leading-relaxed text-sm">
                                                                    {item.featured?.desc}
                                                                </p>
                                                            </div>

                                                            {item.featured?.ctaText && (
                                                                <a href={item.featured.ctaLink || '#'} className="group/btn inline-flex items-center gap-3 text-xs font-bold text-white uppercase tracking-widest mt-8">
                                                                    <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all duration-300">
                                                                        <FaArrowRight className="-rotate-45 group-hover/btn:rotate-0 transition-transform duration-300" />
                                                                    </span>
                                                                    <span>{item.featured.ctaText}</span>
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Right Panel */}
                                                    <div className="w-[70%] p-10 bg-[#020202]">
                                                        {/* Grid */}
                                                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 group/grid">
                                                            {item.columns?.map((col, idx) => (
                                                                <div key={idx} className="space-y-5">
                                                                    <h4 className="flex items-center gap-3 text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] border-b border-white/10 pb-2 mb-4">
                                                                        {col.title}
                                                                    </h4>
                                                                    <ul className="space-y-2">
                                                                        {col.items.map((sub, sIdx) => (
                                                                            <li key={sIdx} className="relative">
                                                                                <a href={sub.href || '#'} className="group/item flex items-center gap-3 p-2 -mx-2 rounded-lg transition-all duration-300 hover:bg-white/[0.03] opacity-100 group-hover/grid:opacity-40 group-hover/grid:hover:opacity-100">
                                                                                    {/* Icon Box */}
                                                                                    <div className="flex-shrink-0 w-8 h-8 rounded bg-[#111] border border-white/5 flex items-center justify-center text-neutral-500 group-hover/item:text-white group-hover/item:border-blue-500/50 transition-all duration-300">
                                                                                        <sub.icon className="text-xs" />
                                                                                    </div>

                                                                                    {/* Text */}
                                                                                    <div className="flex-grow">
                                                                                        <div className="flex items-center gap-2">
                                                                                            <span className="text-xs font-bold text-neutral-300 group-hover/item:text-white transition-colors">
                                                                                                {sub.label}
                                                                                            </span>
                                                                                            {sub.tag && (
                                                                                                <span className="px-1.5 py-0.5 text-[7px] font-bold bg-blue-600/20 text-blue-300 border border-blue-500/30 rounded uppercase tracking-wide">
                                                                                                    {sub.tag}
                                                                                                </span>
                                                                                            )}
                                                                                        </div>
                                                                                        <p className="text-[9px] text-neutral-600 group-hover/item:text-neutral-400 mt-0.5 truncate max-w-[120px]">
                                                                                            {sub.desc}
                                                                                        </p>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* 3. UTILS */}
                        <div className="hidden lg:flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                                <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">{t('Available')}</span>
                            </div>
                            <a href="/contact" className="px-6 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                {t('ContactMe')}
                            </a>
                        </div>

                        {/* 4. MOBILE HAMBURGER */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-white p-2"
                            >
                                {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* MOBILE MENU */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden fixed inset-0 top-20 z-50 bg-[#050505] overflow-y-auto border-t border-white/10">
                        <div className="p-6 space-y-6">
                            {menuItems.map((item) => (
                                <div key={item.key} className="border-b border-white/5 pb-4">
                                    <button className="text-lg font-bold text-white mb-2">{item.label}</button>
                                    {item.mega && (
                                        <div className="ml-4 flex flex-col gap-3">
                                            {item.columns?.flatMap(col => col.items).map((sub, idx) => (
                                                <a key={idx} href={sub.href || '#'} className="flex items-center gap-3 text-neutral-400 text-sm py-1 hover:text-white">
                                                    <sub.icon />
                                                    <span>{sub.label}</span>
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            {/* Visual Spacer */}
            <div className="h-28 bg-black"></div>
        </>
    );
}
