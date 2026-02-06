"use client";

type MapEmbedProps = {
  className?: string;
};

export default function MapEmbed({ className = "" }: MapEmbedProps) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 h-[180px] lg:h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.0837519498045!2d-64.12845662350631!3d-31.43936117425124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432bd157905a4af%3A0xcf863f5cc76c614d!2sEst%C3%A9tica%20Voos!5e0!3m2!1ses!2sar!4v1770118965653!5m2!1ses!2sar"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        // className={"w-full h-full border-0"}
        className={`w-full h-full border-0 grayscale brigthness-90 contrast-110 ${className}`}
      />
    </div>
  );
}

{
  /*</div>; */
}
