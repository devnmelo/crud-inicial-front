import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f7f4] flex flex-col font-sans">

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(124,58,237,0.15); }
          70% { box-shadow: 0 0 0 12px rgba(124,58,237,0); }
          100% { box-shadow: 0 0 0 0 rgba(124,58,237,0); }
        }
        .fade-up { animation: fadeUp 0.6s ease both; }
        .fade-up-1 { animation: fadeUp 0.6s 0.1s ease both; }
        .fade-up-2 { animation: fadeUp 0.6s 0.2s ease both; }
        .fade-up-3 { animation: fadeUp 0.6s 0.3s ease both; }
        .float { animation: float 4s ease-in-out infinite; }
        .float-slow { animation: float 6s ease-in-out infinite; }
        .float-slower { animation: float 8s ease-in-out infinite; }

        .img-card {
          overflow: hidden;
          border-radius: 20px;
          cursor: pointer;
        }
        .img-card img {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.4s ease;
          filter: brightness(0.95);
        }
        .img-card:hover img {
          transform: scale(1.07);
          filter: brightness(1.05);
        }
        .img-card .overlay {
          transition: opacity 0.4s ease;
          opacity: 0;
        }
        .img-card:hover .overlay {
          opacity: 1;
        }

        .action-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .action-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.07);
        }
        .action-card .arrow {
          transition: transform 0.2s ease, opacity 0.2s ease;
          opacity: 0;
          transform: translateX(-4px);
        }
        .action-card:hover .arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .nav-link {
          position: relative;
          padding: 6px 14px;
          border-radius: 10px;
          transition: background 0.18s ease, color 0.18s ease;
          cursor: pointer;
        }
        .nav-link:hover {
          background: #f3f0ff;
          color: #7c3aed;
        }
        .nav-link.active {
          background: #f3f0ff;
          color: #7c3aed;
          font-weight: 500;
        }

        .stat-card {
          transition: transform 0.2s ease;
        }
        .stat-card:hover {
          transform: translateY(-2px);
        }

        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.12;
          pointer-events: none;
        }
      `}</style>

      {/* Navbar */}
      <nav className="sticky top-0 z-30 bg-white/75 backdrop-blur-xl border-b border-gray-100/80">
        <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer shrink-0">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center shadow-md shadow-violet-200">
              <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-gray-900 tracking-tight">Lumière</p>
              <p className="text-[10px] text-gray-400 font-medium">Residencial Premium</p>
            </div>
          </Link>

          {/* Links centrais — pill container */}
          <div className="hidden md:flex items-center bg-gray-50 border border-gray-100 rounded-2xl px-1.5 py-1.5 gap-0.5">
            <Link href="/" className="nav-link active text-xs font-medium text-gray-600">Início</Link>
            <Link href="/moradores" className="nav-link text-xs font-medium text-gray-500">Moradores</Link>
            <Link href="/apartamentos" className="nav-link text-xs font-medium text-gray-500">Apartamentos</Link>
            <Link href="/lazer" className="nav-link text-xs font-medium text-gray-500">Área de lazer</Link>
            <Link href="/comunicados" className="nav-link text-xs font-medium text-gray-500">Comunicados</Link>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden md:flex items-center gap-1.5 text-xs text-gray-400">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Sistema online</span>
            </div>
            <Link
              href="/moradores"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-violet-600 text-white hover:bg-violet-700 active:scale-95 transition-all cursor-pointer shadow-md shadow-violet-200"
            >
              Acessar
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="hero-blob w-96 h-96 bg-violet-400 top-[-80px] right-[-40px]" />
        <div className="hero-blob w-64 h-64 bg-sky-400 bottom-[-40px] left-[10%]" />

        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16 relative">
          <div className="flex-1 fade-up">
            <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-100 rounded-full px-3 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-500" style={{animation: 'pulse-ring 2s ease infinite'}} />
              <span className="text-xs font-medium text-violet-700">Alto padrão • São Paulo, SP</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Viva com<br />
              <span className="text-violet-600">elegância</span> e<br />
              <span className="relative">
                sofisticação
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                  <path d="M0 5 Q100 0 200 5" stroke="#ddd6fe" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm mb-10">
              O endereço que define quem você é. Gerencie seu condomínio com inteligência e estilo.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/moradores"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 active:scale-95 transition-all cursor-pointer shadow-lg shadow-violet-200"
              >
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Gerenciar moradores
              </Link>
              <Link
                href="/apartamentos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
              >
                Ver apartamentos
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* mini stats */}
            <div className="flex gap-6 mt-10 pt-10 border-t border-gray-100">
              {[["120", "Aptos"], ["347", "Moradores"], ["12", "Anos"]].map(([n, l]) => (
                <div key={l}>
                  <p className="text-2xl font-bold text-gray-900">{n}</p>
                  <p className="text-xs text-gray-400">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* imagem hero com cards flutuantes */}
          <div className="flex-1 w-full max-w-lg relative fade-up-1">
            <div className="img-card w-full aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&auto=format&fit=crop"
                alt="Residencial Lumière"
                className="w-full h-full object-cover"
              />
              <div className="overlay absolute inset-0 bg-violet-900/10 rounded-[20px]" />
            </div>

            {/* card flutuante 1 */}
            <div className="float absolute -bottom-5 -left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
                <svg width="16" height="16" fill="none" stroke="#059669" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900">Segurança 24h</p>
                <p className="text-xs text-gray-400">Portaria blindada</p>
              </div>
            </div>

            {/* card flutuante 2 */}
            <div className="float-slow absolute -top-4 -right-5 bg-white rounded-2xl shadow-xl px-4 py-3 border border-gray-100">
              <p className="text-xs text-gray-400 mb-0.5">Satisfação</p>
              <p className="text-lg font-bold text-violet-600">98%</p>
              <div className="flex gap-0.5 mt-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="10" height="10" fill="#7c3aed" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acesso rápido */}
      <section className="max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-1">Gestão</p>
            <h2 className="text-2xl font-bold text-gray-900">Acesso rápido</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              title: "Moradores",
              desc: "Cadastre, edite e gerencie todos os moradores e proprietários.",
              href: "/moradores",
              iconBg: "bg-violet-50",
              iconColor: "#7c3aed",
              icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
            },
            {
              title: "Apartamentos",
              desc: "Visualize todos os apartamentos, status e informações dos imóveis.",
              href: "/apartamentos",
              iconBg: "bg-sky-50",
              iconColor: "#0284c7",
              icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10",
            },
            {
              title: "Área de lazer",
              desc: "Reserve piscina, salão de festas, academia e espaços comuns.",
              href: "/lazer",
              iconBg: "bg-emerald-50",
              iconColor: "#059669",
              icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
            },
            {
              title: "Ocorrências",
              desc: "Registre e acompanhe solicitações e ocorrências do condomínio.",
              href: "/ocorrencias",
              iconBg: "bg-amber-50",
              iconColor: "#d97706",
              icon: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01",
            },
            {
              title: "Financeiro",
              desc: "Cobranças, taxas condominiais e controle de inadimplências.",
              href: "/financeiro",
              iconBg: "bg-rose-50",
              iconColor: "#e11d48",
              icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
            },
            {
              title: "Comunicados",
              desc: "Envie avisos e comunicados para todos os condôminos.",
              href: "/comunicados",
              iconBg: "bg-indigo-50",
              iconColor: "#4f46e5",
              icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="action-card group bg-white border border-gray-100 rounded-2xl p-5 cursor-pointer flex flex-col active:scale-[0.98] transition-transform"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center`}>
                  <svg width="18" height="18" fill="none" stroke={item.iconColor} strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d={item.icon} />
                  </svg>
                </div>
                <svg className="arrow w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-gray-900 mb-1">{item.title}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Galeria de áreas */}
      <section className="bg-white border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-1">Espaços</p>
            <h2 className="text-2xl font-bold text-gray-900">Conheça o Lumière</h2>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* grande */}
            <div className="col-span-12 md:col-span-7 img-card relative aspect-[16/9]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&auto=format&fit=crop" alt="Piscina" className="w-full h-full object-cover" />
              <div className="overlay absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-semibold text-lg">Piscina aquecida</p>
                  <p className="text-white/70 text-sm">Disponível todos os dias</p>
                </div>
              </div>
            </div>

            {/* coluna direita */}
            <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
              <div className="img-card relative flex-1" style={{minHeight: '160px'}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop" alt="Academia" className="w-full h-full object-cover" />
                <div className="overlay absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <p className="text-white font-semibold">Academia completa</p>
                </div>
              </div>
              <div className="img-card relative flex-1" style={{minHeight: '160px'}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop" alt="Salão" className="w-full h-full object-cover" />
                <div className="overlay absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <p className="text-white font-semibold">Salão de festas</p>
                </div>
              </div>
            </div>

            {/* linha de baixo */}
            <div className="col-span-6 md:col-span-4 img-card relative" style={{minHeight: '180px'}}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop" alt="Fachada" className="w-full h-full object-cover" />
              <div className="overlay absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Fachada</p>
              </div>
            </div>
            <div className="col-span-6 md:col-span-4 img-card relative" style={{minHeight: '180px'}}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop" alt="Lobby" className="w-full h-full object-cover" />
              <div className="overlay absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Lobby</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 img-card relative" style={{minHeight: '180px'}}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&auto=format&fit=crop" alt="Espaço gourmet" className="w-full h-full object-cover" />
              <div className="overlay absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Espaço gourmet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-3">Por que Lumière?</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Qualidade de vida</h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">Cada detalhe foi pensado para proporcionar a melhor experiência de moradia da cidade.</p>
            <div className="flex flex-col gap-5">
              {[
                { title: "Segurança 24h", desc: "Portaria física, câmeras em todos os acessos e sistema de monitoramento em tempo real.", color: "bg-violet-100 text-violet-600" },
                { title: "Sustentabilidade", desc: "Energia solar, coleta seletiva e reaproveitamento de água da chuva reduzem o condomínio.", color: "bg-emerald-100 text-emerald-600" },
                { title: "Conectividade total", desc: "Fibra óptica em todos os apartamentos e wi-fi de alta velocidade nas áreas comuns.", color: "bg-sky-100 text-sky-600" },
                { title: "Gestão inteligente", desc: "Sistema digitalizado para comunicados, reservas e ocorrências sem burocracia.", color: "bg-amber-100 text-amber-600" },
              ].map((item) => (
                <div key={item.title} className="stat-card flex gap-4 p-4 rounded-2xl bg-white border border-gray-100">
                  <div className={`w-8 h-8 rounded-xl ${item.color} flex items-center justify-center shrink-0 mt-0.5`}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                    <p className="text-xs text-gray-400 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="img-card w-full aspect-[3/4]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&auto=format&fit=crop"
                alt="Fachada Lumière"
                className="w-full h-full object-cover"
              />
              <div className="overlay absolute inset-0 bg-violet-900/10 rounded-[20px]" />
            </div>

            <div className="float-slower absolute bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 max-w-[180px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <p className="text-xs font-semibold text-gray-700">Disponível agora</p>
              </div>
              <p className="text-xs text-gray-400">Piscina · Academia · Salão</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-violet-600 flex items-center justify-center">
              <svg width="13" height="13" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span className="text-sm font-bold text-gray-900">Residencial Lumière</span>
          </div>
          <p className="text-xs text-gray-400">© 2026 Residencial Lumière · São Paulo, SP</p>
          <div className="flex gap-5 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-600 transition cursor-pointer">Privacidade</a>
            <a href="#" className="hover:text-gray-600 transition cursor-pointer">Termos</a>
            <a href="#" className="hover:text-gray-600 transition cursor-pointer">Contato</a>
          </div>
        </div>
      </footer>

    </div>
  );
}