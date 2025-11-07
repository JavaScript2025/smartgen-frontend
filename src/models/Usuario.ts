import type Categoria from "./Empresa";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string; // e-mail
  senha: string;
  foto: string;
  altura: number;
  peso: number;
  empresa?: Categoria[] | null; // empresas criadas por esse usuário (opcional)
}
