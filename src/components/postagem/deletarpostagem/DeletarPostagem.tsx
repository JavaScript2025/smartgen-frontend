import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Postagem from "../../../models/Postagem";
import { buscar, deletar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarPostagem() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [empresa, setEmpresa] = useState<Postagem | null>(null);

  async function carregarEmpresa() {
    if (!id) return;
    await buscar<Postagem>(`/empresas/${id}`, setEmpresa);
  }

  useEffect(() => {
    void carregarEmpresa();
  }, [id]);

  async function apagar() {
    try {
      await deletar(`/empresas/${id}`);
      ToastAlerta("Empresa deletada com sucesso!", "sucesso");
      navigate("/empresas");
    } catch {
      ToastAlerta("Erro ao deletar a empresa", "erro");
    }
  }

  function cancelar() {
    navigate("/empresas");
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Deletar Empresa</h1>
      <p>Você tem certeza que deseja deletar a empresa abaixo?</p>

      <div className="my-4 border rounded p-4">
        <p><strong>Nome:</strong> {empresa?.nome_empresa}</p>
        <p><strong>Localização:</strong> {empresa?.localizacao}</p>
        <p><strong>Telefone:</strong> {empresa?.telefone_contato}</p>
      </div>

      <div className="flex gap-4">
        <button onClick={apagar} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Deletar
        </button>
        <button onClick={cancelar} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default DeletarPostagem;
