import { useEffect, useRef, useState } from "react";

type Testimonial = {
  company: string;
  text: string;
  person: string;
};

const testimonials: Testimonial[] = [
  { company: "Nestlé", text: "A TotalPass é uma empresa renomada e reconhecida no mercado de benefícios corporativos. Sua expertise e compromisso em oferecer serviços de qualidade nos dá a confiança de que nossos colaboradores estão em boas mãos.", person: "Fabricio Pavarin" },
  { company: "Bradesco", text: "O que nos fez brilhar os olhos foi a possibilidade de oferecer cuidado integral às nossas pessoas, reforçando nossa cultura de saúde e bem-estar.", person: "Thais de Moura Reis" },
  { company: "Unimed", text: "É notório o interesse dos candidatos quando apresentamos a possibilidade de adesão.", person: "Viviane Oliveira de Araújo" },
  { company: "Coop", text: "Os colaboradores vêm manifestando uma satisfação muito grande, não só pela rede de academias, mas também pelos serviços complementares.", person: "Valdir Kanashiro" },
  { company: "Volkswagen", text: "Quando você fala que vai ter TotalPass, é uma demonstração clara de que, na cultura da empresa, a saúde é um fator fundamental.", person: "Fernando Ferreira" },
];

function FeedBack() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // auto-scroll contínuo
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const loop = () => {
      if (!isPaused) {
        const speed = 0.5; // ajuste a velocidade
        el.scrollLeft += speed;

        // Reinicia quando passar da metade (itens duplicados)
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isPaused]);

  // itens duplicados para loop infinito
  const items = [...testimonials, ...testimonials];

  // 👉 scroll controlado pelo clique da seta
  function scrollRight() {
    const el = trackRef.current;
    if (!el) return;

    // se não tiver overflow, não há o que rolar
    if (el.scrollWidth <= el.clientWidth) return;

    // pausa a animação enquanto faz o smooth scroll
    setIsPaused(true);

    // distância de um “card” (80% da largura visível)
    const step = Math.max(280, Math.floor(el.clientWidth * 0.8));
    // destino respeitando o “meio” (por causa do loop)
    const half = el.scrollWidth / 2;
    let target = el.scrollLeft + step;
    if (target >= half) target -= half;

    el.scrollTo({ left: target, behavior: "smooth" });

    // volta a animar depois do smooth
    // (timeout pequeno suficiente para o smooth concluir)
    window.setTimeout(() => setIsPaused(false), 400);
  }

  return (
    <section className="overflow-hidden px-6 py-8 md:py-10 bg-gray-200">
      <div className="container mx-auto flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4">

          {/* Bloco do título */}
          <div className="bg-blue-300 rounded-2xl px-6 py-4 md:ml-8 md:h-[250px] flex items-end">
            <h2 className="w-52 text-3xl font-semibold">O que falam sobre nós</h2>
          </div>

          {/* Wrapper RELATIVE pra posicionar a seta */}
          <div className="relative w-full">

            {/* Gradiente sutil à direita (não intercepta cliques) */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-200 to-transparent z-10" />

            {/* Trilho do carrossel */}
            <div
              ref={trackRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="
                relative flex gap-4 overflow-x-auto overflow-y-hidden
                snap-x snap-mandatory scroll-smooth
                md:py-1 hide-scrollbar
              "
            >
              {items.map((item, i) => (
                <article
                  key={`${item.company}-${i}`}
                  className="
                    snap-start min-w-[300px] md:min-w-[400px]
                    flex h-[400px] md:h-[250px] flex-col justify-between
                    rounded-2xl bg-white p-4
                    transition-transform duration-300
                    hover:scale-[1.01]
                    shadow-md hover:shadow-lg
                  "
                >
                  <div className="flex flex-col gap-4">
                    <header className="flex items-center gap-2">
                      <h3 className="font-semibold uppercase">{item.company}</h3>
                    </header>
                    <p className="text-sm">{item.text}</p>
                  </div>
                  <footer>
                    <p className="text-sm">{item.person}</p>
                  </footer>
                </article>
              ))}
            </div>

            {/* Seta à direita */}
            <button
              type="button"
              aria-label="Avançar depoimentos"
              onClick={scrollRight}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="
                absolute right-2 top-1/2 -translate-y-1/2
                z-20
                rounded-full bg-white/90 hover:bg-white
                shadow-md hover:shadow-lg
                w-10 h-10 grid place-items-center
                transition-colors cursor-pointer
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedBack;
