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


        </div>
    );
}
