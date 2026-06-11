const API_URL = "http://localhost:8080/moradores";

export async function listarMoradores() {
  const res = await fetch(API_URL);
  return res.json();
}