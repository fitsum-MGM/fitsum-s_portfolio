export interface Project {
  id: number
  title: string
  description: string[]
  image: string
  images?: string[]
  imageAlt: string
  liveUrl?: string
  githubUrl?: string
  tags: string[]
  gradient: string
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Agent Guard",
    description: ["Solana-based spending-control system for AI agents", "Enforces transaction and daily limits, recipient allowlists, expiry and revocation on-chain", "Owner-approved budget escalation when an agent needs more", "Built for the Colosseum hackathon"],
    image: "/images/agent-guard.svg",
    imageAlt: "Agent Guard project card",
    githubUrl: "https://github.com/fitsum-MGM/agent-guard",
    tags: ["Rust", "Anchor", "Solana", "TypeScript"],
    gradient: "from-emerald-500 to-cyan-500"
  },
  {
    id: 2,
    title: "TenderPilot Ethiopia",
    description: ["Multi-tenant B2B procurement SaaS for Ethiopian suppliers", "Aggregates public tenders from eGP Portal, EEU, ERA and Ethio Telecom", "Opportunity matching, Ethiopian calendar deadlines and a compliance document vault", "Collaborative bid workspaces and localized CBE and Telebirr billing"],
    image: "/images/tender-1.jpg",
    images: ["/images/tender-1.jpg", "/images/tender-4.jpg", "/images/tender-2.jpg", "/images/tender-3.jpg"],
    imageAlt: "TenderPilot supplier dashboard",
    tags: ["Next.js 14", "PostgreSQL", "Prisma", "SaaS"],
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    id: 3,
    title: "Collab Workspace",
    description: ["Real-time collaborative document and workspace platform", "Authentication, document editing and workspace membership", "Live synchronization with WebSockets (Socket.IO)", "React 19, Zustand, Node.js, Express, MongoDB and JWT"],
    image: "/images/collab-3.jpg",
    images: ["/images/collab-3.jpg", "/images/collab-4.jpg", "/images/collab-1.jpg", "/images/collab-2.jpg"],
    imageAlt: "CollabSpace dashboard",
    liveUrl: "https://collab-workspace-coral.vercel.app",
    tags: ["React 19", "Socket.IO", "MongoDB", "Tailwind"],
    gradient: "from-pink-500 to-rose-500"
  },
  {
    id: 4,
    title: "MERNStore E-commerce",
    description: ["Full-stack digital commerce platform", "Customer auth, product browsing, cart, checkout and order tracking", "Admin product and order management with image uploads", "Email notifications and Chapa payment integration"],
    image: "/images/mern-1.jpg",
    images: ["/images/mern-1.jpg", "/images/mern-2.jpg", "/images/mern-3.jpg", "/images/mern-4.jpg"],
    imageAlt: "MERNStore home page",
    liveUrl: "https://e-commerce-platform-ecru.vercel.app",
    tags: ["React 19", "Express 5", "MongoDB", "Chapa"],
    gradient: "from-orange-500 to-amber-500"
  },
  {
    id: 5,
    title: "Define on Highlight",
    description: ["Firefox extension that adds a Define button when you highlight text on ChatGPT", "Concise, context-aware definitions without interrupting your reading", "Personal glossary for saving terms", "Local FastAPI backend with an OpenAI-compatible LLM API"],
    image: "/images/define.svg",
    imageAlt: "Define on Highlight project card",
    tags: ["Firefox", "FastAPI", "Python", "LLM API"],
    gradient: "from-indigo-500 to-purple-500"
  }
]
