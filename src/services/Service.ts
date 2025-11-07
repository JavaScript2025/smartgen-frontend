import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// GET genérico
export async function buscar<T>(url: string, setDados: (data: T) => void) {
  const resp = await api.get<T>(url);
  setDados(resp.data);
}

// POST genérico
export async function cadastrar<T, B>(url: string, body: B, setDados: (data: T) => void) {
  const resp = await api.post<T>(url, body);
  setDados(resp.data);
}

// PUT genérico
export async function atualizar<T, B>(url: string, body: B, setDados: (data: T) => void) {
  const resp = await api.put<T>(url, body);
  setDados(resp.data);
}

// DELETE genérico
export async function deletar(url: string) {
  await api.delete(url);
}
