"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import {
    Menu,
    X,
    Briefcase,
    Layers,
    FileText,
    Lightbulb,
    GraduationCap,
    Award,
    BookOpen,
    History,
    User,
    Send,
    ChevronDown
} from "lucide-react";

export function Navbar() {
    const t = useTranslations("Navbar");
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const projectsMenu = [
        {
            title: t("items.projects_solo"),
            desc: t("items.projects_solo_desc"),
            href: "/projets/solo",
            icon: Briefcase,
            color: "text-blue-500",
        },
        {
            title: t("items.projects_corp"),
            desc: t("items.projects_corp_desc"),
            href: "/projets/entreprise",
            icon: Layers,
            color: "text-indigo-500",
        },
        {
            title: t("items.articles"),
            desc: t("items.articles_desc"),
            href: "/articles",
            icon: FileText,
            color: "text-green-500",
        },
        {
            title: t("items.discovery"),
            desc: t("items.discovery_desc"),
            href: "/decouvertes",
            icon: Lightbulb,
            color: "text-yellow-500",
        },
    ];

    const aboutMenu = [
        {
            title: t("items.experience"),
            desc: t("items.experience_desc"),
            href: "/experience",
            icon: Award,
            color: "text-purple-500",
        },
        {
            title: t("items.skills"),
            desc: t("items.skills_desc"),
            href: "/competences",
            icon: BookOpen,
            color: "text-pink-500",
        },
        {
            title: t("items.history"),
            desc: t("items.history_desc"),
            href: "/histoire",
            icon: History,
            color: "text-orange-500",
        },
        {
            title: t("items.education"),
            desc: t("items.education_desc"),
            href: "/education",
            icon: GraduationCap,
            color: "text-teal-500",
        },
    ];

    return (
        <nav
            className={cn(
                "sticky top-0 z-50 w-full border-b transition-all duration-300",
                scrolled
                    ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
                    : "bg-background/50 backdrop-blur-sm border-transparent"
            )}
        >
            <div className="container flex h-20 items-center justify-between px-4 md:px-8">
                {/* Logo */}
                <Link
                    className="mr-6 flex items-center space-x-2 font-bold text-2xl font-josefin tracking-tight"
                    href="/"
                >
                    <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        JLKN.
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex lg:items-center lg:gap-1">
                    <Link
                        href="/"
                        className={cn(
                            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                            pathname === "/" ? "text-foreground font-semibold" : "text-muted-foreground"
                        )}
                    >
                        {t("home")}
                    </Link>

                    {/* Mega Menu: Projects */}
                    <div className="group relative">
                        <button
                            className={cn(
                                "inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                                pathname.startsWith("/projets") || pathname.startsWith("/articles") ? "text-foreground font-semibold" : "text-muted-foreground"
                            )}
                        >
                            {t("projects")}
                            <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                        </button>
                        <div className="absolute left-1/2 top-full -translate-x-1/2 w-[600px] p-4 bg-popover rounded-xl border shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
                            <div className="grid grid-cols-2 gap-4">
                                {projectsMenu.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-start p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group/item"
                                    >
                                        <div className={cn("p-2 rounded-md bg-muted group-hover/item:bg-background transition-colors mr-4", item.color)}>
                                            <item.icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium leading-none mb-1 group-hover/item:text-primary transition-colors">
                                                {item.title}
                                            </div>
                                            <p className="line-clamp-2 text-xs text-muted-foreground">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mega Menu: About */}
                    <div className="group relative">
                        <button
                            className={cn(
                                "inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                                pathname.startsWith("/experience") || pathname.startsWith("/competences") ? "text-foreground font-semibold" : "text-muted-foreground"
                            )}
                        >
                            {t("about")}
                            <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                        </button>
                        <div className="absolute left-1/2 top-full -translate-x-1/2 w-[600px] p-4 bg-popover rounded-xl border shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
                            <div className="grid grid-cols-2 gap-4">
                                {aboutMenu.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-start p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group/item"
                                    >
                                        <div className={cn("p-2 rounded-md bg-muted group-hover/item:bg-background transition-colors mr-4", item.color)}>
                                            <item.icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium leading-none mb-1 group-hover/item:text-primary transition-colors">
                                                {item.title}
                                            </div>
                                            <p className="line-clamp-2 text-xs text-muted-foreground">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        className={cn(
                            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                            pathname === "/contact" ? "text-foreground font-semibold" : "text-muted-foreground"
                        )}
                    >
                        {t("contact")}
                    </Link>

                    <div className="ml-6 flex items-center gap-2 pl-6 border-l">
                        <LanguageSwitcher />
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <LanguageSwitcher />
                    <button
                        className="p-2 text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Menu</span>
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown (Accordion Style - Simplified) */}
            {isOpen && (
                <div className="lg:hidden border-b bg-background h-[calc(100vh-5rem)] overflow-y-auto">
                    <div className="container px-4 py-6 space-y-6">

                        {/* Home */}
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-2 text-lg font-medium"
                        >
                            <div className="p-2 bg-muted rounded-md"><User className="h-5 w-5" /></div>
                            <span>{t("home")}</span>
                        </Link>

                        {/* Projects Group */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t("projects")}</h4>
                            <div className="grid grid-cols-1 gap-2 pl-2 border-l-2">
                                {projectsMenu.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center space-x-3 p-2 rounded-md hover:bg-accent"
                                    >
                                        <item.icon className={cn("h-5 w-5", item.color)} />
                                        <span className="text-sm font-medium">{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* About Group */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t("about")}</h4>
                            <div className="grid grid-cols-1 gap-2 pl-2 border-l-2">
                                {aboutMenu.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center space-x-3 p-2 rounded-md hover:bg-accent"
                                    >
                                        <item.icon className={cn("h-5 w-5", item.color)} />
                                        <span className="text-sm font-medium">{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Contact */}
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-2 text-lg font-medium"
                        >
                            <div className="p-2 bg-muted rounded-md"><Send className="h-5 w-5" /></div>
                            <span>{t("contact")}</span>
                        </Link>

                    </div>
                </div>
            )}
        </nav>
    );
}
