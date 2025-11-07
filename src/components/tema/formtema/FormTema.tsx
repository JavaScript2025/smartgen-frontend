import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormTema() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState(false);
  const [tema, setTema] = useState<Tema>({ id: 0, tipo_servico: "" });

  async function carregarCategoria() {
    if (!id) return;
    await buscar<Tema>(`/categorias/${id}`, setTema);
  }

  useEffect(() => {
    void carregarCategoria();
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });
  }

  async function salvar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (id) {
        await atualizar<Tema, Tema>("/categorias", tema, setTema);
        ToastAlerta("Categoria atualizada com sucesso!", "sucesso");
      } else {
        await cadastrar<Tema, Omit<Tema, "id">>("/categorias", { tipo_servico: tema.tipo_servico }, setTema);
        ToastAlerta("Categoria cadastrada com sucesso!", "sucesso");
      }
      navigate("/categorias");
    } catch {
      ToastAlerta("Erro ao salvar a categoria", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">{id ? "Editar Categoria" : "Cadastrar Categoria"}</h1>

      <form className="flex flex-col gap-4" onSubmit={salvar}>
        <input
          type="text"
          name="tipo_servico"
          value={tema.tipo_servico}
          onChange={atualizarEstado}
          placeholder="Tipo de serviço (ex: Personal, Pilates...)"
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? <ClipLoader size={20} /> : id ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default FormTema;
