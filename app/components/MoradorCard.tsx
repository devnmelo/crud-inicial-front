"use client";

import { useEffect, useRef, useState } from "react";
import { Morador } from "../types/Morador";
import Avatar from "./Avatar";
import { atualizarMorador, deletarMorador } from "../services/moradoresService";

type Props = {
  morador: Morador;
  onAtualizado: (morador: Morador) => void;
  onDeletado: (id: number) => void;
};

export default function MoradorCard({ morador, onAtualizado, onDeletado }: Props) {
  const [menuAberto, setMenuAberto] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const [confirmandoDelete, setConfirmandoDelete] = useState(false);
  const [salvando, setSalvando] = useState(false);

  const [form, setForm] = useState({
    nome: morador.nome,
    apartamento: morador.apartamento,
    proprietario: morador.proprietario,
  });

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickFora(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuAberto(false);
        setConfirmandoDelete(false);
      }
    }
    document.addEventListener("mousedown", handleClickFora);
    return () => document.removeEventListener("mousedown", handleClickFora);
  }, []);

  function abrirModal() {
    setForm({
      nome: morador.nome,
      apartamento: morador.apartamento,
      proprietario: morador.proprietario,
    });
    setMenuAberto(false);
    setModalAberto(true);
  }

  async function salvar() {
    setSalvando(true);
    try {
      const atualizado = await atualizarMorador(morador.id, form);
      onAtualizado(atualizado);
      setModalAberto(false);
    } finally {
      setSalvando(false);
    }
  }

  async function confirmarDelete() {
    await deletarMorador(morador.id);
    onDeletado(morador.id);
  }

  return (
    <>
      <div className="flex items-center gap-4 px-5 py-4 bg-white border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-sm transition-all duration-150">

        <Avatar src={morador.foto} alt={morador.nome} />

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 truncate">{morador.nome}</p>
          <p className="text-xs text-gray-400 mt-0.5">Apartamento {morador.apartamento}</p>
        </div>

        <span className={`shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
          morador.proprietario ? "bg-violet-50 text-violet-700" : "bg-sky-50 text-sky-700"
        }`}>
          {morador.proprietario ? "Proprietário" : "Inquilino"}
        </span>

        {/* Três pontinhos */}
        <div className="relative shrink-0" ref={menuRef}>
          <button
            onClick={() => { setMenuAberto((v) => !v); setConfirmandoDelete(false); }}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition cursor-pointer"
            aria-label="Opções"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <circle cx="8" cy="2.5" r="1.5" />
              <circle cx="8" cy="8" r="1.5" />
              <circle cx="8" cy="13.5" r="1.5" />
            </svg>
          </button>

          {menuAberto && (
            <div className="absolute right-0 top-10 z-20 w-44 bg-white border border-gray-100 rounded-xl shadow-lg py-1 overflow-hidden">
              {!confirmandoDelete ? (
                <>
                  <button
                    onClick={abrirModal}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition cursor-pointer"
                  >
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                    Editar morador
                  </button>
                  <div className="h-px bg-gray-100 mx-3" />
                  <button
                    onClick={() => setConfirmandoDelete(true)}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition cursor-pointer"
                  >
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                      <path d="M10 11v6M14 11v6" />
                      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                    </svg>
                    Excluir morador
                  </button>
                </>
              ) : (
                <div className="px-4 py-3">
                  <p className="text-xs font-medium text-gray-700 mb-3">Excluir {morador.nome.split(" ")[0]}?</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setConfirmandoDelete(false)}
                      className="flex-1 py-1.5 text-xs rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition cursor-pointer"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={confirmarDelete}
                      className="flex-1 py-1.5 text-xs rounded-lg bg-red-500 text-white hover:bg-red-600 transition cursor-pointer"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modal de edição */}
      {modalAberto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4"
          onClick={(e) => { if (e.target === e.currentTarget) setModalAberto(false); }}
        >
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6">

            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-semibold text-gray-900">Editar morador</h2>
              <button
                onClick={() => setModalAberto(false)}
                className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition cursor-pointer"
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">Nome completo</label>
                <input
                  type="text"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400 transition text-gray-900 cursor-text"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">Apartamento</label>
                <input
                  type="text"
                  value={form.apartamento}
                  onChange={(e) => setForm({ ...form, apartamento: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400 transition text-gray-900 cursor-text"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-2">Tipo</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setForm({ ...form, proprietario: true })}
                    className={`flex-1 py-2 text-xs font-medium rounded-xl border transition cursor-pointer ${
                      form.proprietario
                        ? "border-violet-400 bg-violet-50 text-violet-700"
                        : "border-gray-200 text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    Proprietário
                  </button>
                  <button
                    onClick={() => setForm({ ...form, proprietario: false })}
                    className={`flex-1 py-2 text-xs font-medium rounded-xl border transition cursor-pointer ${
                      !form.proprietario
                        ? "border-sky-400 bg-sky-50 text-sky-700"
                        : "border-gray-200 text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    Inquilino
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setModalAberto(false)}
                className="flex-1 py-2.5 text-sm rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={salvar}
                disabled={salvando || !form.nome || !form.apartamento}
                className="flex-1 py-2.5 text-sm rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition cursor-pointer"
              >
                {salvando ? "Salvando..." : "Salvar"}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}