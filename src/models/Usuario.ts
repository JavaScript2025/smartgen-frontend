import type Postagem from "./Postagem";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string; // e-mail
  senha: string;
  foto: string;
  altura: number;
  peso: number;
  postagem?: Postagem[] | null; // empresas criadas por esse usuário (opcional)
}
