"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/app/components/ui";
import { Button } from "@/app/components/ui";
import { PERSONAL_INFO } from "@/app/lib/constants";
import { useScroll } from "@/app/hooks";
import "primeicons/primeicons.css";

// Navigation avec mega menus professionnels - Version simplifiée
const NAVIGATION_MENUS = [
  {
    name: "Stack & Compétences",
    href: "/stack",
    icon: "pi pi-code",
    megaContent: {
      sections: [
        {
          title: "Développement",
          items: [
            { name: "Développement Web", icon: "pi pi-desktop", desc: "Applications modernes (React, Next.js)" },
            { name: "Développement Mobile", icon: "pi pi-mobile", desc: "Apps multiplateformes & PWA" },
          ]
        },
        {
          title: "Infrastructure",
          items: [
            { name: "Backend & API", icon: "pi pi-server", desc: "Logique serveur robuste (Node, Python)" },
            { name: "Cloud & DevOps", icon: "pi pi-cloud", desc: "Déploiement et scalabilité (AWS, Docker)" },
          ]
        },
        {
          title: "Données & Outils",
          items: [
            { name: "Bases de Données", icon: "pi pi-database", desc: "Architecture et optimisation SQL/NoSQL" },
            { name: "Outils & Qualité", icon: "pi pi-cog", desc: "Tests, CI/CD et bonnes pratiques" }
          ]
        }
      ]
    }
  },
  {
    name: "Services & Réalisations",
    href: "/services",
    icon: "pi pi-briefcase",
    megaContent: {
      sections: [
        {
          title: "Services",
          items: [
            { name: "Solutions Sur Mesure", icon: "pi pi-cog", desc: "Apps Web & Mobiles personnalisées" },
            { name: "E-commerce & SaaS", icon: "pi pi-shopping-cart", desc: "Plateformes de vente & Logiciels" },
            { name: "Audit & Conseil Tech", icon: "pi pi-search", desc: "Optimisation, Sécurité & Architecture" }
          ]
        },
        {
          title: "Réalisations",
          items: [
            { name: "Projets Entreprise", icon: "pi pi-building", desc: "Digitalisation de processus métier" },
            { name: "Startups & Innovation", icon: "pi pi-rocket", desc: "MVP & Produits technologiques avancés" }
          ]
        },
        {
          title: "Stratégie",
          items: [
            { name: "Audit & Conseil", icon: "pi pi-search", desc: "Optimisation & Architecture technique" },
            { name: "Accompagnement", icon: "pi pi-chart-line", desc: "Transformation digitale & CTO partagé" }
          ]
        }
      ]
    }
  },
  {
    name: "Parcours & Expertise",
    href: "/formations",
    icon: "pi pi-graduation-cap",
    megaContent: {
      sections: [
        {
          title: "Expertise",
          items: [
            { name: "Lead Tech Fullstack", icon: "pi pi-briefcase", desc: "5+ ans d'expérience & Management" },
            { name: "Architecture Cloud", icon: "pi pi-cloud", desc: "Conception de systèmes distribués" }
          ]
        },
        {
          title: "Formation",
          items: [
            { name: "Master Génie Logiciel", icon: "pi pi-graduation-cap", desc: "Bac+5 Informatique & Systèmes" },
            { name: "Parcours Académique", icon: "pi pi-book", desc: "Licence & Formation continue" }
          ]
        },
        {
          title: "Reconnaissance",
          items: [
            { name: "Certifications", icon: "pi pi-verified", desc: "AWS, Docker, React & Sécurité" },
            { name: "International", icon: "pi pi-globe", desc: "Expérience multiculturelle (FR, EN)" }
          ]
        }
      ]
    }
  },
  {
    name: "Témoignages & Articles",
    href: "/temoignages",
    icon: "pi pi-comments",
    megaContent: {
      sections: [
        {
          title: "Confiance",
          items: [
            { name: "Clients Heureux", icon: "pi pi-heart", desc: "Retours d'expérience positifs" },
            { name: "Partenaires", icon: "pi pi-users", desc: "Agences & Startups collaboratrices" }
          ]
        },
        {
          title: "Partage",
          items: [
            { name: "Articles Techniques", icon: "pi pi-pencil", desc: "Tutoriels & Bonnes pratiques" },
            { name: "Veille Techno", icon: "pi pi-compass", desc: "Exploration des nouveautés" }
          ]
        },
        {
          title: "Impact",
          items: [
            { name: "Chiffres Clés", icon: "pi pi-chart-pie", desc: "50+ Projets, 98% Satisfaction" },
            { name: "Engagement", icon: "pi pi-check-circle", desc: "Rigueur & Respect des délais" }
          ]
        }
      ]
    }
  },
  {
    name: "À propos",
    href: "/histoire",
    icon: "pi pi-user",
    megaContent: {
      sections: [
        {
          title: "Profil",
          items: [
            { name: "Qui je suis", icon: "pi pi-id-card", desc: "Développeur passionné & Curieux" },
            { name: "Mon Histoire", icon: "pi pi-history", desc: "Parcours & Évolution personnelle" }
          ]
        },
        {
          title: "ADN",
          items: [
            { name: "Mes Valeurs", icon: "pi pi-star", desc: "Excellence, Transparence, Impact" },
            { name: "Philosophie", icon: "pi pi-lightbulb", desc: "Pragmatisme & Innovation utile" }
          ]
        },
        {
          title: "Connexion",
          items: [
            { name: "Me Contacter", icon: "pi pi-send", desc: "Discutons de votre projet" },
            { name: "Réseaux Pro", icon: "pi pi-linkedin", desc: "LinkedIn, GitHub & Communauté" }
          ]
        }
      ]
    }
  }
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleNavClick = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
        : 'bg-background/80 backdrop-blur-sm'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-normal text-foreground hover:text-primary transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {PERSONAL_INFO.name.split(' ').map(word => word[0]).join('')}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAVIGATION_MENUS.map((menu) => (
              <div
                key={menu.name}
                className="relative"
                onMouseEnter={() => setActiveMenu(menu.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={menu.href}
                  onClick={handleNavClick}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-normal text-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/50"
                >
                  <i className={menu.icon}></i>
                  <span>{menu.name}</span>
                </Link>

                {/* Mega Menu Dropdown */}
                {activeMenu === menu.name && menu.megaContent && (
                  <div className="fixed left-1/2 -translate-x-1/2 top-16 w-[900px] max-w-[95vw] bg-secondary/95 backdrop-blur-md border border-border/50 rounded-b-xl shadow-2xl overflow-hidden z-50 animate-fade-in-up">
                    {/* Header du mega menu avec titre et description dynamique */}
                    <div className="bg-secondary/50 px-8 py-4 border-b border-border/10">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                          <i className={`${menu.icon} text-primary text-lg`}></i>
                        </div>
                        <div>
                          <h2 className="text-base font-medium text-foreground font-heading">{menu.name}</h2>
                          <p className="text-xs text-muted-foreground mt-0.5 font-body">
                            {menu.name === 'Stack & Compétences' && 'Exploration détaillée de mes technologies et savoir-faire technique'}
                            {menu.name === 'Services & Réalisations' && 'Solutions sur mesure et catalogue de projets livrés'}
                            {menu.name === 'Parcours & Expertise' && 'Historique académique, certifications et expérience pro'}
                            {menu.name === 'Témoignages & Articles' && 'Retours d\'expérience clients et veille technologique'}
                            {menu.name === 'À propos' && 'Ma vision, mes valeurs et comment me contacter'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Modern Pillars Layout (The Glass Triptych) */}
                    <div className="p-8 grid grid-cols-3 gap-6">
                      {menu.megaContent.sections.map((section, index) => (
                        <div
                          key={section.title}
                          className="group/pillar relative flex flex-col gap-4 p-6 rounded-2xl border border-border/40 bg-secondary/20 hover:bg-secondary/40 transition-all duration-500 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1"
                        >
                          {/* Header du Pilier */}
                          <div className="flex items-center gap-3 pb-4 border-b border-border/20">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover/pillar:scale-110 transition-transform duration-500">
                              {index === 0 && <i className="pi pi-th-large text-lg"></i>}
                              {index === 1 && <i className="pi pi-bolt text-lg"></i>}
                              {index === 2 && <i className="pi pi-star text-lg"></i>}
                            </div>
                            <h3 className="text-base font-bold text-foreground font-heading tracking-wide uppercase">
                              {section.title}
                            </h3>
                          </div>

                          {/* Liste des items (Clean List) */}
                          <div className="flex flex-col gap-2 mt-2">
                            {section.items.map((item) => (
                              <Link
                                key={item.name}
                                href={menu.href}
                                onClick={handleNavClick}
                                className="group/item flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/10"
                              >
                                <div className="text-muted-foreground group-hover/item:text-primary transition-colors duration-300">
                                  <i className={`${item.icon} text-base`}></i>
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors font-heading group-hover/item:translate-x-1 duration-300">
                                    {item.name}
                                  </div>
                                  <div className="text-[11px] text-muted-foreground/70 font-body line-clamp-1 mt-0.5">
                                    {item.desc}
                                  </div>
                                </div>
                                <i className="pi pi-chevron-right text-[10px] text-primary/0 group-hover/item:text-primary/100 -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300"></i>
                              </Link>
                            ))}
                          </div>

                          {/* Decorative Light Leak */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover/pillar:bg-primary/10 transition-colors duration-500"></div>
                        </div>
                      ))}
                    </div>

                    {/* Footer discret */}
                    <div className="px-8 py-3 bg-muted/30 border-t border-border/10 flex items-center justify-between">
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold font-heading">
                        {menu.megaContent.sections.reduce((acc, s) => acc + s.items.length, 0)} élements dans {menu.name}
                      </div>
                      <Link
                        href={menu.href}
                        onClick={handleNavClick}
                        className="text-xs font-medium text-primary hover:text-primary/80 flex items-center gap-2 px-4 py-2 rounded-full hover:bg-primary/10 transition-colors font-heading"
                      >
                        Tout explorer <i className="pi pi-arrow-right text-[10px]"></i>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Contact Button */}
            <Link
              href="/contact"
              className="ml-4 px-4 py-2 bg-primary text-primary-foreground text-sm font-normal rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right side: Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={toggleTheme}
              className="w-10 h-10 p-0"
            >
              {theme === "dark" ? '☀️' : '🌙'}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden btn-primary w-10 h-10 flex items-center justify-center rounded-lg"
            >
              <i className={`pi ${mobileMenuOpen ? 'pi-times' : 'pi-bars'} text-lg`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 max-h-[80vh] overflow-y-auto">
            {NAVIGATION_MENUS.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                onClick={handleNavClick}
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-muted font-normal"
              >
                <i className={menu.icon}></i>
                <span>{menu.name}</span>
              </Link>
            ))}

            {/* Mobile Contact Button */}
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="flex items-center gap-3 mt-4 py-3 px-2 bg-primary text-primary-foreground rounded-lg font-normal"
            >
              <i className="pi pi-envelope"></i>
              <span>Contact</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}