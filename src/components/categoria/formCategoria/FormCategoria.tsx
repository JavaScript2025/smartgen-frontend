import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState(false);
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    tipo_servico: "",
  });

  async function carregarCategoria() {
    if (!id) return;
    await buscar<Categoria>(`/categorias/${id}`, setCategoria);
  }

  useEffect(() => {
    void carregarCategoria();
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function salvar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (id) {
        await atualizar<Categoria, Categoria>(
          "/categorias",
          categoria,
          setCategoria
        );
        ToastAlerta("Categoria atualizada com sucesso!", "sucesso");
      } else {
        await cadastrar<Categoria, Omit<Categoria, "id">>(
          "/categorias",
          { tipo_servico: categoria.tipo_servico },
          setCategoria
        );
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
      <h1 className="text-2xl font-bold mb-4">
        {id ? "Editar Categoria" : "Cadastrar Categoria"}
      </h1>

      <form className="flex flex-col gap-4" onSubmit={salvar}>
        <input
          type="text"
          name="tipo_servico"
          value={categoria.tipo_servico}
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
          {isLoading ? (
            <ClipLoader size={20} />
          ) : id ? (
            "Atualizar"
          ) : (
            "Cadastrar"
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
