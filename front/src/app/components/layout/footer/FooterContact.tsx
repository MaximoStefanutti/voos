import { footerContact } from "@/app/config/footer.config";
import FooterMap from "./FooterMap";

export function FooterContact() {
  return (
    <section>
      <h3 className="text-[#f0d4a8] font-medium text-sm mb-3 uppercase tracking-wide">
        Contacto y ubicación
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-11">
        <address className="not-italic">
          <ul className="space-y-2">
            {footerContact.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed"
              >
                <Icon
                  fontSize="small"
                  className="text-[#f0d4a8] mt-0.5 shrink-0"
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </address>

        <FooterMap />
      </div>
    </section>
  );
}
