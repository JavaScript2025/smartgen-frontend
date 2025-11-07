import type Categoria from "./Categoria";
import type Usuario from "./Usuario";

export default interface Empresa {
  id: number;
  nome_empresa: string;
  localizacao: string;
  telefone_contato: string;
  instagram: string;
  categoria: Categoria | null;
  usuario: Usuario | null; // Opcional (backend aceita nulo)
}
