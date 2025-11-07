import type Postagem from "./Postagem";

export default interface Tema {
  // Categoria
  id: number;
  tipo_servico: string;
  postagem?: Postagem[] | null; // mantém compatibilidade de array para cards/listas
}
