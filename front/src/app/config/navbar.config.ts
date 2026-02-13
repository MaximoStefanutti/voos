export interface NavLink {
  label: string;
  ariaLabel?: string;
  href: string;
}

export const NavLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  {
    href: "/sobre-nosotras",
    label: "Sobre nosotras",
    ariaLabel: "Centro de estética en Córdoba Capital",
  },
  { href: "/tratamientos", label: "Tratamientos estéticos" },
];
