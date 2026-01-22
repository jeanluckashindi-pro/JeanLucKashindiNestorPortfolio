export const PERSONAL_INFO = {
  name: "Jean Luc Kashindi Nestor",
  title: "Développeur Full Stack",
  email: "contact@jeanluc-portfolio.com",
  phone: "+33 X XX XX XX XX",
  location: "France",
  bio: "Développeur Full Stack passionné par les technologies modernes et l'innovation.",
  github: "https://github.com/jeanluc",
  linkedin: "https://linkedin.com/in/jeanluc",
  twitter: "https://twitter.com/jeanluc"
};

export const NAVIGATION_ITEMS = [
  { name: "Stack technique", href: "#stack-technique" },
  { name: "Compétences clés", href: "#competences" },
  { name: "Services", href: "#services" },
  { name: "Réalisations", href: "#realisations" },
  { name: "Formations & certifications", href: "#formations" },
  { name: "Témoignages", href: "#temoignages" },
  { name: "Articles", href: "#articles" },
  { name: "Mon histoire", href: "#histoire" }
];

// Données d'exemple - à remplacer par vos vraies données
export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Plateforme e-commerce complète avec Next.js et Stripe",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    githubUrl: "https://github.com/example/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
    featured: true
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    company: "Tech Company",
    position: "Développeur Full Stack",
    startDate: "2023-01",
    description: "Développement d'applications web modernes",
    technologies: ["React", "Node.js", "PostgreSQL"]
  }
];

export const SKILLS: Skill[] = [
  {
    id: "1",
    name: "React",
    category: "frontend",
    level: "expert"
  },
  {
    id: "2",
    name: "Next.js",
    category: "frontend",
    level: "advanced"
  },
  {
    id: "3",
    name: "Node.js",
    category: "backend",
    level: "advanced"
  }
];