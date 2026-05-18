import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "droppe",
    name: "Droppe",
    description:
      "B2B wholesale marketplace for workwear, safety equipment, and PPE across Europe. Serving 4K+ daily users with complex supplier-buyer workflows, smart filtering, and a high-performance product catalog.",
    stack: ["React", "Next.js", "TypeScript", "SWR", "Tailwind CSS"],
    liveUrl: "https://droppe.com",
    images: [
      "/projects/droppe/1.jpg",
      "/projects/droppe/2.jpg",
      "/projects/droppe/3.jpg",
    ],
  },
  {
    id: "etqan",
    name: "Etqan — PDMS",
    description:
      "Enterprise Purchase & Document Management System for Panda Retail. Handles invoice processing, supplier management, back-margin allocation workflows, and multi-level financial approval pipelines.",
    stack: ["React", "Redux Toolkit", "RTK Query", "TypeScript", "Bootstrap 5"],
    images: [
      "/projects/etqan/1.jpg",
      "/projects/etqan/2.jpg",
      "/projects/etqan/3.jpg",
    ],
    nda: true,
  },
  {
    id: "homage",
    name: "Homage",
    description:
      "Caregiving platform connecting families with professional caregivers across Singapore and Malaysia. Features a full patient management system, timezone-aware scheduling, Stripe billing, and care-plan workflows.",
    stack: ["React", "TypeScript", "Redux", "REST APIs", "Stripe"],
    liveUrl: "https://homage.com.sg",
    images: [
      "/projects/homage/1.jpg",
      "/projects/homage/2.jpg",
      "/projects/homage/3.jpg",
    ],
    nda: true,
  },
  {
    id: "benzinga",
    name: "Benzinga Pro",
    description:
      "Financial data platform delivering real-time stock quotes, earnings, analyst ratings, and market intelligence to retail and institutional investors. Built complex data visualization and live WebSocket feeds.",
    stack: ["React", "Next.js", "TypeScript", "React Query", "WebSockets", "Recharts"],
    liveUrl: "https://www.benzinga.com/quote/AAPL",
    images: [
      "/projects/benzinga/1.jpg",
      "/projects/benzinga/2.jpg",
      "/projects/benzinga/3.jpg",
    ],
  },
  {
    id: "bigbyte",
    name: "Big Byte Insights",
    description:
      "Alternative data analytics platform for institutional investment managers. Features rich data visualization dashboards, Kubernetes job monitoring, editorial blog, and proprietary market-trend insights.",
    stack: ["React", "Canvas.js", "Nivo", "Recharts", "REST APIs"],
    liveUrl: "https://bigbyte.com",
    images: [
      "/projects/bigbyte/1.jpg",
      "/projects/bigbyte/2.jpg",
      "/projects/bigbyte/3.jpg",
    ],
  },
  {
    id: "digipops",
    name: "DigiPops",
    description:
      "Digital marketing and web solutions platform offering landing page creation, campaign management, and performance analytics. Built a fast, conversion-optimized web presence from the ground up.",
    stack: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    liveUrl: "https://dp-landing-page.web.app/",
    images: [
      "/projects/digipops/1.jpg",
      "/projects/digipops/2.jpg",
      "/projects/digipops/3.jpg",
    ],
  },
];
