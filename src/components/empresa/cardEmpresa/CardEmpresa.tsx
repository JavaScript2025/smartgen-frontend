import { Link } from "react-router-dom";
import type Empresa from "../../../models/Empresa";

type CardEmpresaProps = {
  empresa: Empresa;
  showActions?: boolean; // ← NOVO (default: true)
};

export default function CardEmpresa({
  empresa,
  showActions = true,
}: CardEmpresaProps) {
  return (
    <div className=" bg-gray-100 border-slate-900 border flex flex-col rounded overflow-hidden justify-between">
      <div>
        <div className="flex w-full bg-blue-200 py-2 px-4 items-center gap-4">
          {/* <img
            src={empresa.usuario?.foto || "https://i.imgur.com/ZZFAmzo.jpg"}
            className="h-12 w-12 rounded-full object-cover"
            alt={empresa.usuario?.nome || "Empresa"}
          /> */}
          <h3 className="text-lg font-bold text-center uppercase">
            {empresa.nome_empresa}
          </h3>
        </div>

        <div className="p-4">
          <p className="text-sm">
            <span className="font-semibold">Localização: </span>
            {empresa.localizacao}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Telefone: </span>
            {empresa.telefone_contato}
          </p>
          <p className="text-sm break-words">
            <span className="font-semibold">Instagram: </span>
            {empresa.instagram}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Categoria: </span>
            {empresa.categoria?.tipo_servico || "—"}
          </p>
        </div>
      </div>

      {showActions && ( // ← MOSTRA SOMENTE SE PERMITIDO
        <div className="flex">
          <Link
            to={`/editarEmpresa/${empresa.id}`}
            className="text-white bg-indigo-400 hover:bg-indigo-700 w-full flex items-center justify-center"
          >
            <button>Editar</button>
          </Link>
          <Link
            to={`/deletarEmpresa/${empresa.id}`}
            className="text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
          >
            <button>Deletar</button>
          </Link>
        </div>
      )}
    </div>
  );
}
