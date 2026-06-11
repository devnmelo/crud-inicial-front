const API_URL = "http://localhost:8080/moradores";

export async function listarMoradores() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function atualizarMorador(id: number, dados: { nome: string; apartamento: string; proprietario: boolean }) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  return res.json();
}

export async function deletarMorador(id: number) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}