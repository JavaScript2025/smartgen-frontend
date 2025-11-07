import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria | null>(null);

  async function carregarCategoria() {
    if (!id) return;
    await buscar<Categoria>(`/categorias/${id}`, setCategoria);
  }

  useEffect(() => {
    void carregarCategoria();
  }, [id]);

  async function apagar() {
    try {
      await deletar(`/categorias/${id}`);
      ToastAlerta("Categoria deletada com sucesso!", "sucesso");
      navigate("/categorias");
    } catch {
      ToastAlerta("Erro ao deletar a categoria", "erro");
    }
  }

  function cancelar() {
    navigate("/categorias");
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Deletar Categoria</h1>
      <p>Você tem certeza que deseja deletar a categoria abaixo?</p>

      <div className="my-4 border rounded p-4">
        <p>
          <strong>Tipo de serviço:</strong> {categoria?.tipo_servico}
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={apagar}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Deletar
        </button>
        <button
          onClick={cancelar}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default DeletarCategoria;
