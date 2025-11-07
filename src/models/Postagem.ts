import type Tema from "./Tema";
import type Usuario from "./Usuario";

export default interface Postagem {
  // Empresa
  id: number;
  nome_empresa: string;
  localizacao: string;
  telefone_contato: string;
  instagram: string;
  categoria: Tema | null;     // Categoria
  usuario: Usuario | null;    // Opcional (backend aceita nulo)
}
