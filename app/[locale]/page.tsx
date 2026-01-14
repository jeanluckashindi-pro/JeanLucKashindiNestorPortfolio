'use client';

import { useTranslations } from 'next-intl';
import MegaMenu from '@/components/MegaMenu';
import Footer from '@/components/Footer';
import {
    FaArrowRight, FaCode, FaPaintBrush, FaRocket, FaDatabase, FaPlay, FaGithub, FaExternalLinkAlt, FaBolt
} from 'react-icons/fa';

export default function Home() {
    const t = useTranslations('HomePage');

    return (
        <div className="min-h-screen bg-[#000] text-white selection:bg-blue-500/30 font-sans overflow-x-hidden">
            <MegaMenu />

            {/* 1. CINEMATIC HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-900/20 rounded-[100%] blur-[120px] -z-10 opacity-50 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] -z-10"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 -z-10 mask-image:linear-gradient(to_bottom,transparent,black)"></div>

                <div className="max-w-[1920px] mx-auto px-6 lg:px-12 w-full relative z-10">
                    <div className="flex flex-col items-center text-center">

                        {/* Status Badge */}
                        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                <span className="text-xs font-bold text-blue-200 tracking-wider uppercase">{t('Hero.Badge')}</span>
                            </span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter leading-tight mb-8 animate-in fade-in zoom-in-95 duration-1000 delay-200">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50 pb-2">
                                {t('Hero.Title1')}
                            </span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient-x bg-[length:200%_auto]">
                                {t('Hero.Title2')}
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="max-w-2xl text-lg md:text-xl text-neutral-400 leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                            {t('Hero.Desc')}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col md:flex-row items-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                            <a href="/projects" className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                                <span className="relative z-10 flex items-center gap-2">
                                    {t('Hero.CTA_Primary')} <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                </span>
                            </a>
                            <a href="/contact" className="px-8 py-4 border border-white/10 rounded-full font-bold uppercase tracking-widest hover:bg-white/5 hover:border-white/30 transition-all text-neutral-300 hover:text-white">
                                {t('Hero.CTA_Secondary')}
                            </a>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-24 pt-12 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-24 animate-in fade-in duration-1000 delay-700">
                        {[
                            { val: '5+', label: t('Stats.Exp') },
                            { val: '50+', label: t('Stats.Projects') },
                            { val: '2.5k', label: t('Stats.Commit') },
                            { val: '100%', label: 'Client Satisfaction' } // Hardcoded for now or add to JSON
                        ].map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center md:items-start group">
                                <span className="text-3xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors duration-500 font-mono">{stat.val}</span>
                                <span className="text-xs text-neutral-500 uppercase tracking-widest font-bold">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* 3. FEATURED WORK (Slider Style) */}
            <section className="py-32 bg-[#050505] border-y border-white/5">
                <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('Featured.Title')}</h2>
                            <p className="text-neutral-400">{t('Featured.Desc')}</p>
                        </div>
                        <a href="/projects" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-blue-500 transition-colors">
                            {t('Featured.ViewAll')} <FaArrowRight />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="group relative overflow-hidden rounded-2xl bg-[#000] border border-white/10 aspect-[4/3]">
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 bg-neutral-900 group-hover:scale-105 transition-transform duration-700"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>

                                <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 block">Fintech</span>
                                    <h3 className="text-2xl font-bold text-white mb-4">Project Name {i}</h3>
                                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-blue-500">
                                            View Case <FaArrowRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. VIDEO TUTORIALS (YouTube Style) */}
            <section className="py-24 bg-[#050505]">
                <div className="max-w-[1920px] mx-auto px-6 lg:px-8">
                    <div className="flex items-end justify-between mb-12">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                                <FaPlay className="text-red-500 text-2xl" /> {t('Tutorials.Title')}
                            </h2>
                            <p className="text-neutral-400 text-sm max-w-2xl">{t('Tutorials.Desc')}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                        {/* MOCK VIDEO DATA */}
                        {[
                            { title: 'Mastering Next.js 15 Server Actions', views: '12k', time: '2 days', duration: '14:20', thumb: 'bg-blue-900', cat: 'Next.js' },
                            { title: 'Building a 3D Portfolio with Three.js', views: '45k', time: '2 weeks', duration: '28:45', thumb: 'bg-orange-900', cat: '3D' },
                            { title: 'System Design Interview: URL Shortener', views: '200k', time: '3 months', duration: '45:10', thumb: 'bg-red-900', cat: 'System' },
                            { title: 'React 19: Everything You Need to Know', views: '32k', time: '4 days', duration: '12:05', thumb: 'bg-cyan-900', cat: 'React' },
                        ].map((item, i) => (
                            <article key={i} className="group cursor-pointer flex flex-col gap-3">
                                <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-white/5 group-hover:border-white/10 transition-all duration-300 shadow-lg">
                                    <div className={`absolute inset-0 ${item.thumb} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <FaPlay className="text-4xl text-white/20 group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
                                    </div>
                                    <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 text-white text-[10px] font-bold rounded">
                                        {item.duration}
                                    </div>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-lg">JK</div>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-sm font-bold text-white leading-tight line-clamp-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                        <div className="text-[12px] text-neutral-400 flex flex-col">
                                            <span className="hover:text-white transition-colors">Jean-Luc Kashindi</span>
                                            <span className="flex items-center gap-1">{item.views} {t('Tutorials.Views')} • {item.time} {t('Tutorials.Ago')}</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. ARTICLES & DISCOVERIES (Magazine Layout) */}
            <section className="py-24 bg-neutral-950 border-t border-white/5">
                <div className="max-w-[1920px] mx-auto px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-2">{t('News.Title')}</h2>
                        <p className="text-neutral-400">{t('News.Desc')}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* FEATURED MAIN ARTICLE */}
                        <div className="lg:col-span-2 group cursor-pointer relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 min-h-[500px]">
                            {/* Background Image / Gradient */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                                    {t('News.FeaturedBadge')}
                                </span>
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-blue-200 transition-colors">
                                    The Evolution of AI Agents: From Chatbots to Autonomous Workers
                                </h3>
                                <div className="flex items-center gap-6 text-sm text-neutral-300 font-medium">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                                        Jean-Luc Kashindi
                                    </div>
                                    <span>Dec 18, 2025</span>
                                    <span>12 {t('News.ReadTime')}</span>
                                </div>
                            </div>
                        </div>

                        {/* SIDE LIST - RECENT DISCOVERIES */}
                        <div className="flex flex-col gap-8">
                            {[
                                { title: "Why I Moved From Redux to Zustand", cat: "State", time: "5 min", color: "text-purple-400" },
                                { title: "The Hidden Power of CSS @property", cat: "CSS", time: "4 min", color: "text-pink-400" },
                                { title: "Bun vs Node: 2025 Benchmark Results", cat: "Backend", time: "8 min", color: "text-orange-400" },
                                { title: "Understanding React Server Components Deeply", cat: "React", time: "15 min", color: "text-cyan-400" },
                            ].map((news, idx) => (
                                <article key={idx} className="group cursor-pointer flex gap-6 items-center p-4 rounded-2xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
                                    <div className="w-24 h-24 flex-shrink-0 bg-neutral-900 rounded-xl border border-white/5 flex items-center justify-center">
                                        <span className={`text-2xl font-bold ${news.color}`}>#{(idx + 1).toString().padStart(2, '0')}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${news.color}`}>{news.cat}</span>
                                        <h4 className="text-xl font-bold text-white leading-snug mb-2 group-hover:text-blue-400 transition-colors">{news.title}</h4>
                                        <span className="text-xs text-neutral-500">{news.time} {t('News.ReadTime')}</span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
