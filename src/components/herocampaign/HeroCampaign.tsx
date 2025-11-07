import React, { useEffect, useRef } from "react";

type VideoSource = { src: string; type: string };

interface HeroCampaignProps {
  sources?: VideoSource[]; // Ex.: [{ src: "https://res.cloudinary.com/<cloud>/video/upload/f_auto,q_auto,vc_auto/ac_none/v123/LeH8iRG.mp4", type: "video/mp4" }]
  poster?: string; // Ex.: thumbnail/fallback
}

const HeroCampaign: React.FC<HeroCampaignProps> = ({ sources = [], poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Garantir políticas de autoplay
    v.muted = true;
    // iOS precisa disso explicitamente
    v.playsInline = true;

    const tryPlay = () => {
      v.play().catch(() => {
        // Alguns hosts exigem interação; tenta novamente no primeiro clique/toque
      });
    };

    tryPlay();

    const onInteract = () => tryPlay();
    window.addEventListener("touchstart", onInteract, { once: true });
    window.addEventListener("click", onInteract, { once: true });
    return () => {
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("click", onInteract);
    };
  }, []);

  return (
    <section className="bg-primary-800 relative flex items-end overflow-hidden lg:items-center">
      <div
        data-poster-url="https://cms.totalpass.com/uploads/banner_campanha_fbc3cf2825.png"
        data-video-urls="https://i.imgur.com/LeH8iRG.mp4, https://i.imgur.com/E3PqCrc.mp4"
        data-autoplay="true"
        data-loop="true"
        data-wf-ignore="true"
        className="absolute z-10 flex min-h-full w-full items-center justify-center"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          poster={poster ?? "https://res.cloudinary.com/dnefmloa7/video/upload/v1762537773/video-header_tzqoem.webm"}
          data-wf-ignore="true"
          className="absolute z-10 min-h-full w-auto max-w-none min-w-full object-cover"
          style={{ zoom: "40%" }}
          onError={(e) => {
            console.warn("Erro ao carregar vídeo", e);
          }}
        >
          <source src="https://res.cloudinary.com/dnefmloa7/video/upload/v1762537773/video-header_tzqoem.webm" type="video/webm" />
          <source src="https://res.cloudinary.com/dnefmloa7/video/upload/v1762537774/video-header_bo0hme.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-8 text-white">
        <div className="relative z-10 flex flex-col gap-10 pt-80 pb-12 md:items-center lg:w-[50%] lg:items-start lg:pb-28">
          <h1 className="text-2xl font-medium md:text-center lg:text-left lg:text-5xl">
            Bem-estar que acompanha o seu ritmo
            <span className="text-primary-40 text-blue-400"> SmartGen</span>
          </h1>

          <div className="flex h-full w-full flex-col gap-4 md:w-[350px] lg:flex-row">
            <a
              className="inline-flex items-center justify-center py-4 px-8 bg-blue-500 hover:text-neutral-90 transition bg-primary-40 text-neutral-90 hover:bg-blue-700 rounded-full text-base font-normal md:w-[350px]"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCampaign;
