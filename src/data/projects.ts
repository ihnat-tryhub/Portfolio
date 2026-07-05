export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: "gotours",
    name: "GoTours",
    subtitle: "Full-stack tour booking platform",
    description:
      "GoTours is a full-stack tour booking application with a React + TypeScript frontend and an Express + MongoDB backend. It includes authentication, protected routes, tour catalog, tour details, reviews, profile management, avatar uploads, Stripe checkout, Mapbox maps, and production deployment.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Stripe",
      "Mapbox",
      "Render",
      "Vercel",
    ],
    links: [
      { label: "Live Demo", url: "https://go-tours-liard.vercel.app" },
      { label: "Backend API", url: "https://documenter.getpostman.com/view/39911722/2sAYQiATE5" },
      { label: "GitHub", url: "https://github.com/ihnat-tryhub/GoTours" },
    ],
  },
  {
    id: "shop",
    name: "Shop",
    subtitle: "Full-stack e-commerce platform",
    description:
      "Shop is a full-featured e-commerce application with customer and admin functionality. It includes registration, login, product filtering, shopping cart, order management, reviews, Stripe payments, Cloudinary image uploads, admin dashboard, user management, store statistics, and charts.",
    stack: [
      "React",
      "Redux Toolkit",
      "Vite",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Stripe",
      "Cloudinary",
      "Chart.js",
      "Vercel",
    ],
    links: [
      { label: "Live Demo", url: "https://shop-lovat-seven.vercel.app" },
      { label: "GitHub", url: "https://github.com/ihnat-tryhub/Shop" },
    ],
  },
];

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vite",
      "React Router",
      "Redux Toolkit",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "REST API",
      "JWT Authentication",
    ],
  },
  {
    category: "Tools / Services",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Render",
      "Stripe",
      "Cloudinary",
      "Mapbox",
      "Postman",
    ],
  },
];

export const demonstrations: { icon: string; text: string }[] = [
  { icon: "🏗️", text: "Building real frontend/backend architecture" },
  { icon: "🔌", text: "Working with REST APIs" },
  { icon: "🔐", text: "Authentication and protected routes" },
  { icon: "💳", text: "Payment integration" },
  { icon: "📁", text: "File and image uploads" },
  { icon: "📊", text: "Admin dashboards" },
  { icon: "🚀", text: "Production deployment" },
  { icon: "📝", text: "Writing documentation and preparing projects for portfolio review" },
];
