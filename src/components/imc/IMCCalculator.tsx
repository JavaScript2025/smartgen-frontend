import { useMemo, useState } from "react";

type Faixa = {
  nome: string;
  min: number;
  max: number | null; // null = sem limite superior
  color: string;      // tailwind bg
  text: string;       // tailwind text color
};

const FAIXAS: Faixa[] = [
  { nome: "Abaixo",     min: 0,    max: 18.5, color: "bg-sky-300",     text: "text-sky-900" },
  { nome: "Normal",     min: 18.5, max: 24.9, color: "bg-emerald-400", text: "text-emerald-950" },
  { nome: "Sobrepeso",  min: 24.9, max: 29.9, color: "bg-yellow-400",  text: "text-yellow-950" },
  { nome: "Obes. I",    min: 29.9, max: 34.9, color: "bg-orange-400",  text: "text-orange-950" },
  { nome: "Obes. II",   min: 34.9, max: 39.9, color: "bg-red-400",     text: "text-red-950" },
  { nome: "Obes. III",  min: 39.9, max: null, color: "bg-rose-500",    text: "text-rose-50" },
];

// limites para normalizar a posição do marcador (range visual)
const VISUAL_MIN = 14; // IMC mínimo exibido na barra
const VISUAL_MAX = 42; // IMC máximo exibido na barra

export default function IMCCalculator() {
  const [peso, setPeso] = useState<string>("");
  const [altura, setAltura] = useState<string>("");
  const [erro, setErro] = useState<string>("");

  const imc = useMemo(() => {
    const p = Number(peso.replace(",", "."));
    const a = Number(altura.replace(",", "."));
    if (!p || !a) return null;
    if (a <= 0) return null;
    return p / (a * a);
  }, [peso, altura]);

  const faixaAtual = useMemo(() => {
    if (imc == null) return null;
    return FAIXAS.find(f => imc >= f.min && (f.max === null || imc < f.max)) || FAIXAS[FAIXAS.length - 1];
  }, [imc]);

  const posicaoMarcador = useMemo(() => {
    if (imc == null) return 0;
    const clamped = Math.min(Math.max(imc, VISUAL_MIN), VISUAL_MAX);
    const pct = (clamped - VISUAL_MIN) / (VISUAL_MAX - VISUAL_MIN);
    return pct * 100; // %
  }, [imc]);

  function validarENormalizar(): boolean {
    setErro("");
    const p = Number(peso.replace(",", "."));
    const a = Number(altura.replace(",", "."));

    // validações simples e realistas
    if (!p || !a) { setErro("Preencha peso e altura."); return false; }
    if (p < 20 || p > 400) { setErro("Peso fora do intervalo esperado (20–400 kg)."); return false; }
    if (a < 0.9 || a > 2.5) { setErro("Altura fora do intervalo esperado (0.90–2.50 m)."); return false; }
    return true;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    validarENormalizar();
  }

  return (
    <section className=" mx-auto px-4 py-10 bg-gray-200">
      <div className="container mx-auto">
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white shadow-md ring-1 ring-black/5 p-6">
        <h2 className="text-2xl font-bold text-indigo-900">Calcule seu IMC</h2>
        <p className="text-sm text-slate-600 mt-1">
          Informe seu peso em quilogramas e altura em metros (ex.: 70.5 kg, 1.75 m).
        </p>

        <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="flex flex-col gap-1">
            <span className="font-semibold text-slate-800">Peso (kg)</span>
            <input
              type="number"
              inputMode="decimal"
              step="0.1"
              placeholder="Ex.: 70.5"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="font-semibold text-slate-800">Altura (m)</span>
            <input
              type="number"
              inputMode="decimal"
              step="0.01"
              placeholder="Ex.: 1.75"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </label>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 text-white font-semibold py-2 hover:bg-indigo-700 transition"
            >
              Calcular
            </button>
          </div>
        </form>

        {erro && (
          <div className="mt-3 rounded-lg border border-amber-300 bg-amber-50 text-amber-900 px-3 py-2">
            {erro}
          </div>
        )}

        {/* Resultado */}
        {imc !== null && !erro && (
          <div className="mt-8 space-y-4">
            <div className="flex items-baseline gap-3">
              <p className="text-3xl font-extrabold text-indigo-900">
                {imc.toFixed(2)}
              </p>
              <p className={`text-sm px-2.5 py-1 rounded-full font-semibold ${faixaAtual?.color} ${faixaAtual?.text}`}>
                {faixaAtual?.nome}
              </p>
            </div>

            {/* Barra visual com faixas */}
            <div className="relative mt-3">
              <div className="flex overflow-hidden rounded-xl ring-1 ring-slate-200">
                {FAIXAS.map((f, i) => {
                  // largura proporcional (18.5-14=4.5, 24.9-18.5=6.4, etc.)
                  const next = f.max ?? VISUAL_MAX;
                  const start = Math.max(f.min, VISUAL_MIN);
                  const end = Math.min(next, VISUAL_MAX);
                  const widthPct = Math.max(0, ((end - start) / (VISUAL_MAX - VISUAL_MIN)) * 100);
                  if (widthPct <= 0) return null;

                  return (
                    <div
                      key={i}
                      className={`${f.color} h-4`}
                      style={{ width: `${widthPct}%` }}
                      title={`${f.nome} (${f.min}–${f.max ?? "∞"})`}
                    />
                  );
                })}
              </div>

              {/* Marcador */}
              <div
                className="absolute -top-2 translate-x-[-50%] transition-transform duration-300"
                style={{ left: `${posicaoMarcador}%` }}
                aria-hidden
              >
                <div className="h-3 w-3 rotate-45 bg-indigo-600"></div>
              </div>

              {/* Legends das faixas */}
              <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-2">
                {FAIXAS.map((f, i) => (
                  <div key={i} className="text-center">
                    <div className={`mx-auto h-2 w-6 rounded ${f.color}`} />
                    <p className="text-[11px] mt-1 text-slate-600">{f.nome}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-500">
              * IMC é um indicador geral e não substitui avaliação profissional. Fatores como composição corporal podem alterar a interpretação.
            </p>
          </div>
        )}
      </div>
      </div>
    </section>
  );
}
