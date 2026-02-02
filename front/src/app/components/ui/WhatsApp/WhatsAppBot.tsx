"use client";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { env } from "@/app/config/env";
import { useAppUI } from "@/app/context/AppUIContext";
import { getWhatsAppLink } from "@/app/helpers/whatsapp/whatsapp";
import { useEffect, useState } from "react";

export function WhatsAppBot() {
  const { splashFinished } = useAppUI();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (splashFinished) {
      const timer = setTimeout(() => setVisible(true), 300);
      return () => clearTimeout(timer);
    }
  }, [splashFinished]);

  if (!splashFinished || !env.whatsappPhone) return null;

  const link = getWhatsAppLink(
    env.whatsappPhone,
    "¡Hola! Me gustaría obtener más información.",
  );

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`
        fixed bottom-6 right-6 z-[9999]
        w-14 h-14 rounded-full
        flex items-center justify-center
        bg-[#25D366] text-white
        shadow-lg
        transition-all duration-500 ease-out
        ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-90"
        }
        hover:scale-110 hover:bg-[#1DA851]
      `}
    >
      <WhatsAppIcon sx={{ fontSize: 30 }} />
    </a>
  );
}

// "use client";

// import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// import { useAppUI } from "@/app/context/AppUIContext";
// import { getWhatsAppLink } from "@/app/helpers/whatsapp/whatsapp";
// import { env } from "@/app/config/env";

// export function WhatsAppBot() {
//   const { splashFinished } = useAppUI();

//   console.log("WHATSAPP ENV:", env.whatsappPhone);

//   if (!splashFinished || !env.whatsappPhone) return null;
//   console.log("num", env.whatsappPhone);

//   const link = getWhatsAppLink(
//     env.whatsappPhone,
//     "¡Hola! Me gustaría obtener más información.",
//   );

//   return (
//     <a
//       href={link}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="Contactar por WhatsApp"
//       className="
//         fixed bottom-6 right-6 z-[9999]
//         w-14 h-14 rounded-full
//         flex items-center justify-center
//         bg-[#25D366] text-white
//         shadow-lg
//         hover:scale-110 hover:bg-[#1DA851]
//         transition-transform
//       "
//     >
//       <WhatsAppIcon sx={{ fontSize: 32 }} />
//     </a>
//   );
// }
