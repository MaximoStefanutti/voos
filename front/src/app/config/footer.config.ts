import {
  Email,
  Facebook,
  Instagram,
  Map,
  Phone,
  WhatsApp,
} from "@mui/icons-material";

export interface FooterLink {
  label: string;
  href: string;
}

export const footerServices = [
  { href: "/treatment", label: "Tratamientos Faciales" },
  { href: "/treatment", label: "Tratamientos Corporales" },
  { href: "/treatment", label: "Masajes" },
];

export const footerLinks = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Nosotras" },
  { href: "/treatment", label: "Tratamientos" },
];

export const footerContact = [
  {
    icon: Map,
    text: "B° Empalme, Chamical 2610, Córdoba, Argentina",
  },
  {
    icon: Phone,
    text: "(+54) 9 351-512-8427",
  },
  {
    icon: Email,
    text: "esteticavoos@gmail.com",
  },
];

export const footerSocials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: WhatsApp, href: "#", label: "WhatsApp" },
];
