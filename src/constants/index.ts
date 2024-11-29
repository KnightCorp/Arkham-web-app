import {
  Book,
  BookMarked,
  BookOpen,
  Clock,
  Code,
  CreditCard,
  Gamepad2,
  GraduationCap,
  Heart,
  Home,
  Library,
  MessageSquare,
  MonitorPlay,
  Network,
  Share2,
  Users,
} from "lucide-react";

export const menuItems = [
  { id: "home", icon: Home, label: "Home", href: "/" },
  { id: "lms", icon: BookMarked, label: "LMS", href: "/lms" },
  {
    id: "library",
    label: "Library",
    icon: Library,
    children: [
      { id: "content", icon: Book, label: "Content", href: "/content" },
      {
        id: "visual-novel",
        icon: MonitorPlay,
        label: "Visual Novel",
        href: "/visual-novel",
      },
      {
        id: "simulations",
        icon: Gamepad2,
        label: "Simulations",
        href: "/simulations",
      },
    ],
  },
  { id: "prep-time", icon: Clock, label: "Prep Time", href: "/prep-time" },
  {
    id: "journal",
    label: "Journal",
    icon: Book,
    children: [
      { id: "journal-main", icon: Book, label: "Journal", href: "/journal" },
      { id: "contacts", icon: Users, label: "Contacts", href: "/contacts" },
      {
        id: "relationships",
        icon: Heart,
        label: "Relations",
        href: "/relationships",
      },
      { id: "network", icon: Network, label: "Network", href: "/network" },
    ],
  },
  { id: "tech-club", icon: Code, label: "Tech Club", href: "/tech-club" },
  { id: "verse", icon: BookOpen, label: "Verse", href: "/verse" },
  {
    id: "exam-prep",
    icon: GraduationCap,
    label: "Exam Prep",
    href: "/exam-prep",
  },
  {
    id: "subscription",
    icon: CreditCard,
    label: "Subscription",
    href: "/subscription",
  },
  { id: "contact", icon: MessageSquare, label: "Contact Us", href: "/contact" },
  { id: "referral", icon: Share2, label: "Referral", href: "/referral" },
];
