import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardCategoria/CardCategoria";
import ModalCategoria from "../modalCategoria/ModalCategoria";

export default function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function carregarCategorias() {
    try {
      setIsLoading(true);
      await buscar<Categoria[]>("/categorias", setCategorias);
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

      {!isLoading && categorias.length === 0 && <p>Nenhuma categoria cadastrada.</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categorias.map((categoria) => (
          <CardCategoria key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </div>
  );
}
