"use client";

import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-8 bg-background">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-josefin">
            {t("title")}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            {t("subtitle")}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link
              href="/projets/solo"
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md shadow-lg hover:bg-primary/90 transition-all text-lg"
            >
              {t("ctaPortfolio")}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-input bg-background font-semibold rounded-md hover:bg-accent hover:text-accent-foreground transition-all text-lg"
            >
              {t("ctaContact")}
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Summary (Placeholder) */}
      <section className="py-20 px-8 bg-muted/30">
        <div className="container max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold font-josefin">{t("expertiseTitle")}</h2>
            <p className="text-muted-foreground">{t("expertiseSubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cards would go here */}
            <div className="p-6 bg-card rounded-lg shadow-sm border space-y-4">
              <h3 className="text-xl font-bold">Développement Web</h3>
              <p className="text-muted-foreground">Next.js, React, Node.js, Tailwind CSS.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-sm border space-y-4">
              <h3 className="text-xl font-bold">Architecture</h3>
              <p className="text-muted-foreground">Scalabilité, Microservices, Clean Architecture.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-sm border space-y-4">
              <h3 className="text-xl font-bold">Design UI/UX</h3>
              <p className="text-muted-foreground">Interfaces modernes, responsives et accessibles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Teaser (Placeholder) */}
      <section className="py-20 px-8">
        <div className="container max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold font-josefin">{t("recentWorkTitle")}</h2>
          <p className="text-muted-foreground">{t("recentWorkSubtitle")}</p>
          {/* Project Grid placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border">
              <span className="text-muted-foreground">Projet 1</span>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border">
              <span className="text-muted-foreground">Projet 2</span>
            </div>
          </div>
          <div className="pt-4">
            <Link href="/projets/solo" className="text-primary font-medium hover:underline">{t("viewAllProjects")} &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
