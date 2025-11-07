import React from "react";

const HeroCampaign: React.FC = () => {
  return (
    <section className="bg-primary-800 relative flex items-end overflow-hidden lg:items-center">
      <div
        data-poster-url="https://cms.totalpass.com/uploads/banner_campanha_fbc3cf2825.png"
        data-video-urls="https://cms.totalpass.com/uploads/banner_campanha_2025_dd35e18484.webm, https://cms.totalpass.com/uploads/banner_campanha_2025_65809b4ad3.mp4"
        data-autoplay="true"
        data-loop="true"
        data-wf-ignore="true"
        className="absolute z-10 flex min-h-full w-full items-center justify-center"
      >
        <video
          autoPlay
          loop
          playsInline
          data-wf-ignore="true"
          className="absolute z-10 min-h-full w-auto max-w-none min-w-full object-cover"
          style={{ zoom: "40%" }}
        >
          <source
            src="https://cms.totalpass.com/uploads/banner_campanha_2025_dd35e18484.webm"
            type="video/webm"
          />
          <source
            src="https://cms.totalpass.com/uploads/banner_campanha_2025_65809b4ad3.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="container mx-auto px-8 text-white">
        <div className="relative z-10 flex flex-col gap-10 pt-80 pb-12 md:items-center lg:w-[50%] lg:items-start lg:pb-28">
          <h1 className="text-2xl font-medium md:text-center lg:text-left lg:text-5xl">
            Faz total sentido pedir TotalPass para o seu RH e
            <span className="text-primary-40"> ganhar 1 ano do nosso melhor plano</span>
          </h1>

          <div className="flex h-full w-full flex-col gap-4 md:w-[350px] lg:flex-row">
            <a
              className="inline-flex items-center justify-center py-4 px-8 hover:text-neutral-90 transition bg-primary-40 text-neutral-90 hover:bg-[#3FF49B] rounded-full text-base font-normal md:w-[350px]"
              href="https://totalpass.com/faztotalsentido?utm_source=site&utm_medium=referral&utm_campaign=br_cont_site_referral_totalpass_oportunidade_aberto_participacao_faz-total-sentido-2025_saz_recursos-humanos_20250315__&utm_term=___&utm_content=home-do-site_saiba-mais_texto_"
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
