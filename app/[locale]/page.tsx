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

            {/* 1. HERO: THE "QUANTUM INTERFACE" */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#000]">
                {/* Dynamic Background Grid (Perspective) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 transform perspective-1000 rotate-x-12 scale-150"></div>

                {/* Floating "Orb" Glows */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] animate-pulse-slow delay-1000"></div>

                <div className="max-w-[1920px] mx-auto px-6 lg:px-12 w-full relative z-10 flex flex-col lg:flex-row items-center justify-between">

                    {/* LEFT: DECONSTRUCTED TYPOGRAPHY */}
                    <div className="lg:w-3/5 space-y-6">
                        {/* Status Line */}
                        <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left duration-1000">
                            <div className="h-px w-12 bg-blue-500"></div>
                            <span className="text-xs font-mono text-blue-400 tracking-[0.2em]">{t('Hero.Badge')} // SYS.ONLINE.V4</span>
                        </div>

                        {/* MASSIVE TITLES */}
                        <div className="relative">
                            <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-600 leading-[0.85] tracking-tighter">
                                {t('Hero.Title1').toUpperCase()}
                            </h1>
                            <div className="h-4"></div> {/* Visual spacer */}
                            <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter flex items-center gap-4">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">{t('Hero.Title2').toUpperCase()}</span>
                                <span className="hidden md:block h-6 w-32 bg-white/10 skew-x-12 animate-pulse"></span>
                            </h1>
                        </div>

                        {/* Description HUD */}
                        <div className="max-w-xl pl-2 border-l-2 border-white/10 mt-8 pt-2">
                            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                                {t('Hero.Desc')}
                            </p>
                        </div>

                        {/* CTA: MAGNETIC COMPONENT */}
                        <div className="flex items-center gap-8 pt-10">
                            <a href="/projects" className="group relative flex items-center justify-center w-48 h-14 bg-white text-black font-bold uppercase tracking-widest overflow-hidden transition-all hover:w-56 hover:bg-blue-500 hover:text-white">
                                <span className="absolute w-full h-full bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                                <span className="relative z-10 flex items-center gap-2">
                                    {t('Hero.CTA_Primary')}
                                </span>
                            </a>
                            <span className="h-px w-24 bg-white/20 hidden md:block"></span>
                            <div className="text-xs font-mono text-neutral-500 flex flex-col">
                                <span>COORDINATES</span>
                                <span>34.0522° N, 118.2437° W</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: ABSTRACT INTERACTIVE SCULPTURE */}
                    <div className="lg:w-2/5 mt-16 lg:mt-0 relative h-[500px] w-full flex items-center justify-center">
                        {/* This would ideally be a Three.js canvas, but we sim with layered CSS Divs */}
                        <div className="relative w-64 h-80 md:w-80 md:h-96 border border-white/20 rounded-full flex items-center justify-center animate-spin-slow-reverse opacity-50">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_#3b82f6]"></div>
                        </div>
                        <div className="absolute w-56 h-72 md:w-72 md:h-80 border border-white/30 rounded-full flex items-center justify-center animate-spin-slow">
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white]"></div>
                        </div>
                        {/* Glass Card Floating */}
                        <div className="absolute backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl shadow-2xl skew-y-3 skew-x-2 hover:skew-y-0 hover:skew-x-0 transition-transform duration-500 cursor-none">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-bold text-neutral-400">STATUS</span>
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            </div>
                            <div className="text-4xl font-mono font-bold text-white mb-2">100%</div>
                            <div className="h-1 w-32 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full w-2/3 bg-blue-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FEATURED WORK: "THE ARCHIVE" (Replaces Bento & Slider) */}
            <section className="py-0 bg-[#020202] border-t border-white/5 relative z-20">
                {/* Section Title - Huge & Vertical on Desktop */}
                <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-screen">

                    {/* LEFT COL: Vertical Title */}
                    <div className="lg:col-span-3 lg:border-r border-white/5 p-8 lg:p-12 flex lg:flex-col justify-between group">
                        <div className="sticky top-24">
                            <h2 className="text-4xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-800 lg:writing-vertical-rl lg:rotate-180 uppercase tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                                {t('Featured.Title')}
                            </h2>
                        </div>
                        <div className="hidden lg:block space-y-4">
                            <p className="text-sm text-neutral-500 max-w-[200px]">{t('Featured.Desc')}</p>
                            <div className="w-12 h-1 bg-blue-600"></div>
                        </div>
                    </div>

                    {/* RIGHT COL: Interactive List */}
                    <div className="lg:col-span-9 flex flex-col">
                        {[
                            { id: '01', name: 'Fintech Dashboard', cat: 'SaaS Platform', img: 'bg-blue-900', year: '2024' },
                            { id: '02', name: 'AI Neural Network', cat: 'R&D Visualization', img: 'bg-indigo-900', year: '2023' },
                            { id: '03', name: 'E-Commerce Luxe', cat: 'Mobile App', img: 'bg-purple-900', year: '2024' },
                            { id: '04', name: 'Crypto Exchange', cat: 'Web3 Interface', img: 'bg-emerald-900', year: '2025' }
                        ].map((project, idx) => (
                            <a href="/projects" key={idx} className="group relative border-b border-white/5 py-16 px-6 lg:px-12 flex flex-col md:flex-row items-baseline md:items-center justify-between transition-all duration-500 hover:bg-white/[0.02]">

                                {/* Background Image Reveal on Hover (Desktop) */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none ${project.img} hidden lg:block`}></div>

                                <div className="flex items-baseline gap-8 relative z-10 basis-1/2">
                                    <span className="text-sm font-mono text-blue-500/50 group-hover:text-blue-500 transition-colors">/{project.id}</span>
                                    <h3 className="text-4xl md:text-6xl font-bold text-white group-hover:pl-4 transition-all duration-500">{project.name}</h3>
                                </div>

                                <div className="flex items-center gap-12 relative z-10 mt-4 md:mt-0">
                                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">{project.cat}</span>
                                    <span className="text-xs font-mono text-neutral-600 border border-neutral-800 rounded px-2 py-1">{project.year}</span>
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                                        <FaArrowRight className="-rotate-45 text-white group-hover:text-black group-hover:rotate-0 transition-transform duration-500" />
                                    </div>
                                </div>
                            </a>
                        ))}

                        {/* "View All" Link at Bottom */}
                        <div className="p-12 flex justify-center">
                            <a href="/projects" className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-500 hover:text-white hover:tracking-[0.5em] transition-all duration-500">
                                {t('Featured.ViewAll')}
                            </a>
                        </div>
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
