import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Postagem from "../../../models/Postagem";
import type Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormPostagem() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState(false);
  const [carregandoCategoria, setCarregandoCategoria] = useState(false);

  const [categorias, setCategorias] = useState<Tema[]>([]);
  const [categoria, setCategoria] = useState<Tema>({ id: 0, tipo_servico: "" });

  const [empresa, setEmpresa] = useState<Postagem>({
    id: 0,
    nome_empresa: "",
    localizacao: "",
    telefone_contato: "",
    instagram: "",
    categoria: null,
    usuario: null,
  });

  async function carregarEmpresasPorId(idNum: number) {
    await buscar<Postagem>(`/empresas/${idNum}`, setEmpresa);
    if (empresa.categoria) setCategoria(empresa.categoria);
  }

  async function carregarCategorias() {
    setCarregandoCategoria(true);
    try {
      await buscar<Tema[]>("/categorias", setCategorias);
    } finally {
      setCarregandoCategoria(false);
    }
  }

  useEffect(() => {
    void carregarCategorias();
    if (id) {
      void carregarEmpresasPorId(Number(id));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setEmpresa({
      ...empresa,
      [e.target.name]: e.target.value,
    });
  }

  function selecionarCategoria(e: ChangeEvent<HTMLSelectElement>) {
    const idCategoria = Number(e.target.value);
    const selecionada = categorias.find((c) => c.id === idCategoria) || null;
    setCategoria(selecionada ?? { id: 0, tipo_servico: "" });
    setEmpresa({
      ...empresa,
      categoria: selecionada,
    });
  }

  async function salvar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!empresa.categoria) {
        ToastAlerta("Selecione uma categoria", "erro");
        return;
      }

      if (id) {
        await atualizar<Postagem, Postagem>("/empresas", { ...empresa }, setEmpresa);
        ToastAlerta("Empresa atualizada com sucesso!", "sucesso");
      } else {
        await cadastrar<Postagem, Postagem>("/empresas", { ...empresa }, setEmpresa);
        ToastAlerta("Empresa cadastrada com sucesso!", "sucesso");
      }

      navigate("/empresas");
    } catch {
      ToastAlerta("Erro ao salvar a empresa", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">{id ? "Editar Empresa" : "Cadastrar Empresa"}</h1>

      <form className="flex flex-col gap-4" onSubmit={salvar}>
        <input
          type="text"
          name="nome_empresa"
          value={empresa.nome_empresa}
          onChange={atualizarEstado}
          placeholder="Nome da Empresa"
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          name="localizacao"
          value={empresa.localizacao}
          onChange={atualizarEstado}
          placeholder="Localização"
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          name="telefone_contato"
          value={empresa.telefone_contato}
          onChange={atualizarEstado}
          placeholder="Telefone de Contato"
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          name="instagram"
          value={empresa.instagram}
          onChange={atualizarEstado}
          placeholder="Instagram (@empresa)"
          className="border p-2 rounded"
          required
        />

        <select
          name="categoria"
          onChange={selecionarCategoria}
          value={categoria?.id || 0}
          className="border p-2 rounded"
          required
          disabled={carregandoCategoria}
        >
          <option value={0} disabled>
            {carregandoCategoria ? "Carregando categorias..." : "Selecione uma categoria"}
          </option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.tipo_servico}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={isLoading || carregandoCategoria}
        >
          {isLoading ? <ClipLoader size={20} /> : id ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default FormPostagem;
