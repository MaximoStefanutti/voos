import { footerLinks } from "@/app/config/footer.config";
import Link from "next/link";

export function FooterLinks() {
  return (
    <nav aria-lable="Enlaces del sitio">
      <h3 className="text-[#f0d4a8] font-medium text-sm mb-3 uppercase tracking-wide">
        Enlaces del sitio
      </h3>
      <ul className="space-y-2">
        {footerLinks.map((link) => (
          <li
            key={link.href}
            className="flex items-start gap-2 text-gray-400 leading-relaxed"
          >
            <Link
              href={link.href}
              className="text-gray-300 text-sm hover:text-white transition"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
