import { useEffect, useState } from "react";
import type Postagem from "../../../models/Postagem";
import { buscar } from "../../../services/Service";
import CardPostagem from "../cardpostagem/CardPostagem";

export default function CarrosselPostagens() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  async function carregarEmpresas() {
    await buscar<Postagem[]>("/empresas", setPostagens);
  }

  useEffect(() => {
    void carregarEmpresas();
  }, []);

  // Duplicamos o array para criar looping infinito
  const loop = [...postagens, ...postagens];

  return (
    <div className="overflow-hidden py-10 bg-gray-200">
      <div className="animate-scroll flex gap-6 w-max">
        {loop.map((postagem, index) => (
          <div className="min-w-[320px]" key={index}>
            <CardPostagem postagem={postagem} showActions={false} />
          </div>
        ))}
      </div>
    </div>
  );
}
