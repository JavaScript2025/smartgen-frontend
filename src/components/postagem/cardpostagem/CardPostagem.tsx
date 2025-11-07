import { Link } from "react-router-dom";
import type Postagem from "../../../models/Postagem";

type CardPostagemProps = {
  postagem: Postagem;
  showActions?: boolean; // ← NOVO (default: true)
};

export default function CardPostagem({ postagem, showActions = true }: CardPostagemProps) {
  return (
    <div className=" bg-gray-100 border-slate-900 border flex flex-col rounded overflow-hidden justify-between">
      <div>
        <div className="flex w-full bg-blue-200 py-2 px-4 items-center gap-4">
          {/* <img
            src={postagem.usuario?.foto || "https://i.imgur.com/ZZFAmzo.jpg"}
            className="h-12 w-12 rounded-full object-cover"
            alt={postagem.usuario?.nome || "Empresa"}
          /> */}
          <h3 className="text-lg font-bold text-center uppercase">
            {postagem.nome_empresa}
          </h3>
        </div>

        <div className="p-4">
          <p className="text-sm"><span className="font-semibold">Localização: </span>{postagem.localizacao}</p>
          <p className="text-sm"><span className="font-semibold">Telefone: </span>{postagem.telefone_contato}</p>
          <p className="text-sm break-words"><span className="font-semibold">Instagram: </span>{postagem.instagram}</p>
          <p className="text-sm"><span className="font-semibold">Categoria: </span>{postagem.categoria?.tipo_servico || "—"}</p>
        </div>
      </div>

      {showActions && ( // ← MOSTRA SOMENTE SE PERMITIDO
        <div className="flex">
          <Link
            to={`/editarEmpresa/${postagem.id}`}
            className="text-white bg-indigo-400 hover:bg-indigo-700 w-full flex items-center justify-center"
          >
            <button>Editar</button>
          </Link>
          <Link
            to={`/deletarEmpresa/${postagem.id}`}
            className="text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
          >
            <button>Deletar</button>
          </Link>
        </div>
      )}
    </div>
  );
}
