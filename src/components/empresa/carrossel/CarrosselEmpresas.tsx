import { useEffect, useState } from "react";
import type Empresa from "../../../models/Empresa";
import { buscar } from "../../../services/Service";
import CardEmpresa from "../cardEmpresa/CardEmpresa";

export default function CarrosselEmpresas() {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);

  async function carregarEmpresas() {
    await buscar<Empresa[]>("/empresas", setEmpresas);
  }

  useEffect(() => {
    void carregarEmpresas();
  }, []);

  // Duplicamos o array para criar looping infinito
  const loop = [...empresas, ...empresas];

  return (
    <div className="overflow-hidden py-10 bg-gray-200 relative">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-50 bg-gradient-to-l from-gray-200 to-transparent z-10" />
      <div className="pointer-events-none absolute right--0 top-0 h-full w-50 bg-gradient-to-l from-transparent to-gray-200 z-10" />
      <div className="animate-scroll flex gap-6 w-max">
        {loop.map((empresa, index) => (
          <div className="min-w-[320px]" key={index}>
            <CardEmpresa empresa={empresa} showActions={false} />
          </div>
        ))}
      </div>
    </div>
  );
}
