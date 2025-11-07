import { Link } from "react-router-dom";
import type Tema from "../../../models/Tema";

interface CardTemaProps {
  tema: Tema; // Categoria
}

function CardTema({ tema }: CardTemaProps) {
  return (
    <div className="border-slate-900 border flex flex-col rounded overflow-hidden justify-between">
      <div className="p-4">
        <h3 className="text-lg font-bold">Categoria</h3>
        <p>{tema.tipo_servico}</p>
      </div>

      <div className="flex">
        <Link
          to={`/editarCategoria/${tema.id}`}
          className="text-white bg-blue-500 hover:bg-blue-700 w-full flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarCategoria/${tema.id}`}
          className="text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardTema;
