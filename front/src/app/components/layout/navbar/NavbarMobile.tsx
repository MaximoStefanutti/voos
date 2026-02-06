"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinkClass } from "@/app/helpers/navigation/navLinkClass";
import { NavLinks } from "@/app/config/navbar.config";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function NavbarMobile({ open, onClose }: Props) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div className="md:hidden left-0 w-full bg-[#0a3635] border-t border-white/10">
      <ul className="flex flex-col gap-2 p-4 pt-2">
        {NavLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className={navLinkClass(isActive, "text-base w-full block")}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
