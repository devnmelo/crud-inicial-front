"use client";

import { useEffect, useState } from "react";
import { listarMoradores } from "../services/moradoresService";
import MoradorCard from "../components/MoradorCard";
import { Morador } from "../types/Morador";

export default function MoradoresPage() {
  const [moradores, setMoradores] = useState<Morador[]>([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listarMoradores().then((data) => {
      setMoradores(data);
      setLoading(false);
    });
  }, []);

  const filtrados = moradores.filter((m) =>
    m.nome.toLowerCase().includes(busca.toLowerCase()) ||
    m.apartamento.toLowerCase().includes(busca.toLowerCase())
  );

  function handleAtualizado(atualizado: Morador) {
    setMoradores((prev) =>
      prev.map((m) => (m.id === atualizado.id ? atualizado : m))
    );
  }

  function handleDeletado(id: number) {
    setMoradores((prev) => prev.filter((m) => m.id !== id));
  }

  const proprietarios = moradores.filter((m) => m.proprietario).length;
  const inquilinos = moradores.length - proprietarios;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-1">
            Condomínio Residencial
          </p>
          <h1 className="text-2xl font-bold text-gray-900">Moradores</h1>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-2xl px-4 py-3">
            <p className="text-xs text-gray-400 mb-0.5">Total</p>
            <p className="text-xl font-bold text-gray-900">{moradores.length}</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl px-4 py-3">
            <p className="text-xs text-gray-400 mb-0.5">Proprietários</p>
            <p className="text-xl font-bold text-violet-600">{proprietarios}</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl px-4 py-3">
            <p className="text-xs text-gray-400 mb-0.5">Inquilinos</p>
            <p className="text-xl font-bold text-sky-600">{inquilinos}</p>
          </div>
        </div>

        <div className="relative mb-4">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none" stroke="currentColor" strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Buscar por nome ou apartamento..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400 transition placeholder:text-gray-400 text-gray-900"
          />
        </div>

        {loading ? (
          <div className="flex flex-col gap-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-16 bg-white border border-gray-100 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : filtrados.length > 0 ? (
          <div className="flex flex-col gap-2">
            {filtrados.map((m) => (
              <MoradorCard
                key={m.id}
                morador={m}
                onAtualizado={handleAtualizado}
                onDeletado={handleDeletado}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-14">
            <p className="text-sm font-medium text-gray-500">Nenhum morador encontrado</p>
            <p className="text-xs text-gray-400 mt-1">Tente buscar por outro nome ou apartamento</p>
          </div>
        )}

        {!loading && filtrados.length > 0 && (
          <p className="text-xs text-gray-400 text-center mt-6">
            {filtrados.length} {filtrados.length === 1 ? "morador" : "moradores"} encontrados
          </p>
        )}

      </div>
    </div>
  );
}