import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import type Postagem from "../../../models/Postagem";
import { buscar } from "../../../services/Service";
import CardPostagem from "../cardpostagem/CardPostagem";
import ModalPostagem from "../modalpostagem/ModalPostagem";

type Props = {
  showNewButton?: boolean;
  showActions?: boolean; // ← NOVO
};

export default function ListaPostagens({
  showNewButton = true,
  showActions = true,
}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  async function carregarEmpresas() {
    try {
      setIsLoading(true);
      await buscar<Postagem[]>("/empresas", setPostagens);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    void carregarEmpresas();
  }, []);

  return (
    <div className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-gray-500 text-2xl font-bold">Empresas</h2>
          {showNewButton && <ModalPostagem />} {/* <- só mostra se true */}
        </div>

        {isLoading && (
          <div className="flex justify-center items-center py-8">
            <SyncLoader />
          </div>
        )}

        {!isLoading && postagens.length === 0 && (
          <p className="text-gray-500">Nenhuma empresa cadastrada.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postagens.map((postagem) => (
            <CardPostagem
              key={postagem.id}
              postagem={postagem}
              showActions={showActions}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
