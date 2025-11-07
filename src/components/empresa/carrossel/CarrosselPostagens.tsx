import { useEffect, useState } from "react";
import type Empresa from "../../../models/Empresa";
import { buscar } from "../../../services/Service";
import CardEmpresa from "../cardEmpresa/CardEmpresa";

export default function CarrosselPostagens() {
  const [postagens, setPostagens] = useState<Empresa[]>([]);

  async function carregarEmpresas() {
    await buscar<Empresa[]>("/empresas", setPostagens);
  }

  useEffect(() => {
    void carregarEmpresas();
  }, []);

  // Duplicamos o array para criar looping infinito
  const loop = [...postagens, ...postagens];

  return (
    <div className="overflow-hidden py-10 bg-gray-200">
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
