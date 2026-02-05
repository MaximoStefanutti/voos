export interface NavLink {
  label: string;
  href: string;
}

export const NavLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Nosotras" },
  { href: "/treatment", label: "Tratamientos" },
];
