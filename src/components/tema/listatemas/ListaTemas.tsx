import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import type Tema from "../../../models/Tema";
import { buscar } from "../../../services/Service";
import CardTema from "../cardtema/CardTema";
import ModalCategoria from "../modalcategoria/ModalCategoria";

export default function ListaTemas() {
  const [temas, setTemas] = useState<Tema[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function carregarCategorias() {
    try {
      setIsLoading(true);
      await buscar<Tema[]>("/categorias", setTemas);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    void carregarCategorias();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Categorias</h1>
        {/* Botão que abre o modal */}
        <ModalCategoria />
      </div>

      {isLoading && (
        <div className="flex justify-center items-center py-8">
          <SyncLoader />
        </div>
      )}

      {!isLoading && temas.length === 0 && <p>Nenhuma categoria cadastrada.</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {temas.map((tema) => (
          <CardTema key={tema.id} tema={tema} />
        ))}
      </div>
    </div>
  );
}
