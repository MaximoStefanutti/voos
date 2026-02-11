import { footerServices } from "@/app/config/footer.config";
import Link from "next/link";

export function FooterService() {
  return (
    <div>
      <h3 className="text-[#f0d4a8] font-medium text-sm mb-3 uppercase tracking-wide">
        Tratamientos estéticos
      </h3>

      <ul className="space-y-2">
        {footerServices.map((service) => (
          <li key={service.href} className="text-sm text-gray-400">
            <Link
              href={service.href}
              className="text-gray-300 hover:text-[#f0d4a8] transition-colors"
            >
              {service.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
