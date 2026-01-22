import Link from "next/link";
import { PERSONAL_INFO } from "@/app/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>{PERSONAL_INFO.email}</p>
              <p>{PERSONAL_INFO.location}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Liens rapides</h3>
            <div className="space-y-2">
              <Link href="/projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projets
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                À propos
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Réseaux</h3>
            <div className="space-y-2">
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} {PERSONAL_INFO.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}