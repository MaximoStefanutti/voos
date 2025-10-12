"use client";

import { WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";

interface WhatsAppBotProps {
  phone: string; // número con código de pías sin + ni espacios, ej: "5493513513351"
  message?: string;
}

export function WhatsAppBot({
  phone,
  message = "¡Hola! Me gustaría obtener más información.",
}: WhatsAppBotProps) {
  const WhatsappLink = `http://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <IconButton
      component="a"
      href={WhatsappLink}
      target="_blank"
      rel="nooperner noreferrer"
      aria-label="Contactar por WhatsApp"
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        width: 56,
        height: 56,
        backgroundColor: "#25D366",
        color: "white",
        boxShadow: "0px 4px 12px rgba(37, 211, 102, 0.5)",
        zIndex: 9999,
        "&:hover": {
          backgroundColor: "#1DA851",
          transform: "scale(1.1)",
          transition: "all 0.2s ease",
        },
      }}
    >
      <WhatsApp fontSize="large" />
    </IconButton>
  );
}
