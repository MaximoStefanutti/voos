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
  { href: "/tratamientos?category=facial", label: "Tratamientos Faciales" },
  { href: "/tratamientos?category=corporal", label: "Tratamientos Corporales" },
  { href: "/tratamientos?category=depilación", label: "Depilación definitiva" },
  { href: "/tratamientos?category=masajes", label: "Masajes" },
];

export const footerLinks = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotras", label: "Nosotras" },
  { href: "/tratamientos", label: "Tratamientos" },
];

export const footerContact = [
  {
    icon: Map,
    text: "Barrio Empalme, Chamical 2610, Córdoba, Argentina",
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
  {
    icon: Instagram,
    href: "https://www.instagram.com/estetica_voos?igsh=ZGdiZHM2aTVxc25q",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61578855713080",
    label: "Facebook",
  },
  {
    icon: WhatsApp,
    href: "whatsapp",
    label: "WhatsApp",
  },
];
