import { Project, Skill } from './types';

export const APP_NAME = "David's Portfolio";

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Neon Dashboard",
    description: "A futuristic data visualization dashboard using D3.js and React. Real-time websocket data integration.",
    tags: ["React", "D3.js", "TypeScript", "WebSocket"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    link: "#"
  },
  {
    id: 2,
    title: "AI Image Gen",
    description: "SaaS platform for generating marketing assets using Gemini Pro Vision. Integrated with Stripe.",
    tags: ["Next.js", "Gemini API", "Tailwind", "Stripe"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    link: "#"
  },
  {
    id: 3,
    title: "Crypto Sentinel",
    description: "Blockchain explorer with wallet tracking capabilities and smart contract analysis.",
    tags: ["Solidity", "Web3.js", "React", "Node.js"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    link: "#"
  },
  {
    id: 4,
    title: "Nebula UI System",
    description: "A complete design system and component library built for internal micro-frontends.",
    tags: ["Storybook", "Rollup", "React", "Sass"],
    imageUrl: "https://picsum.photos/600/400?random=4",
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Design" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Gemini API", level: 80, category: "Tools" },
  { name: "PostgreSQL", level: 75, category: "Backend" },
];