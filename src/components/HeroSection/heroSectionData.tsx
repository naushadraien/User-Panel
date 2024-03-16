import {
  LayoutGrid,
  Home,
  Printer,
  Plus,
  Briefcase,
  MessagesSquare,
  FileText,
  CreditCard,
  Settings,
} from "lucide-react";

const profileLink = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutGrid />,
  },
  {
    label: "Building",
    href: "/building",
    icon: <Home />,
  },
  {
    label: "Printer",
    href: "/printer",
    icon: <Printer />,
  },
  {
    label: "Create Jobs",
    href: "/create-jobs",
    icon: <Plus />,
  },
  {
    label: "My Jobs",
    href: "/my-jobs",
    icon: <Briefcase />,
  },
  {
    label: "Message",
    href: "/message",
    icon: <MessagesSquare />,
  },
  {
    label: "Proposals",
    href: "/proposals",
    icon: <FileText />,
  },
  {
    label: "Payment",
    href: "/payment",
    icon: <CreditCard />,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <Settings />,
  },
];

export { profileLink };
