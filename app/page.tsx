"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const openWhatsapp = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=5585986130556&text=Ol%C3%A1%2C%20Tia%20Josy",
      "_blank"
    );
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-zinc-50">
      <header className="w-full bg-white shadow-sm py-4 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Image
            src={"/img.jpg"}
            alt="Title"
            width={100}
            height={40}
            className="rounded-full"
          />
          
          <nav className="hidden md:flex items-center gap-6 text-zinc-600">
            {/* <button
              onClick={() => scrollToSection("sobre")}
              className="hover:text-zinc-900 transition"
            >
              Sobre
            </button> */}

            <button
              onClick={() => scrollToSection("contato")}
              className="hover:text-zinc-900 transition"
            >
              Contato
            </button>

            <Link
              href="/document"
              className="hover:text-zinc-900 transition"
            >
              Direitos de Imagem
            </Link>

            <button
              onClick={openWhatsapp}
              className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition font-medium"
            >
              WhatsApp
            </button>

          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-zinc-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>          
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t mt-4 border-zinc-200">
            <div className="flex flex-col gap-4 px-6 py-4 text-zinc-700">

              {/* <button
                onClick={() => {
                  scrollToSection("sobre");
                  setMenuOpen(false);
                }}
                className="text-left hover:text-zinc-900"
              >
                Sobre
              </button> */}

              <button
                onClick={() => {
                  scrollToSection("contato");
                  setMenuOpen(false);
                }}
                className="text-left hover:text-zinc-900"
              >
                Contato
              </button>

              <Link
                href="/document"
                className="hover:text-zinc-900"
                onClick={() => setMenuOpen(false)}
              >
                Direitos de Imagem
              </Link>

              <button
                onClick={() => {
                  openWhatsapp();
                  setMenuOpen(false);
                }}
                className="bg-emerald-500 text-white py-2 rounded-lg"
              >
                WhatsApp
              </button>

            </div>
          </div>
        )}
      </header>

      <main className="grow max-w-6xl w-full mx-auto px-6 py-12 md:py-16">
        
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-800 mb-4">
            Aprenda com Tia Josi
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Junte-se a mim para aprender de forma divertida e eficaz
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
          
          {/* Instagram Card */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-zinc-100 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-pink-100 p-2 rounded-lg">
                <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-zinc-800">Instagram</h3>
            </div>
            <p className="text-zinc-600 mb-4">Acompanhe dicas, novidades e o dia a dia.</p>
            <a 
              href="https://www.instagram.com/aprendacom.tiajosi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium"
            >
              @aprendacom.tiajosi
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Localização Card - Adicione o endereço quando tiver a informação */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-zinc-100 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-zinc-800">Onde Estamos</h3>
            </div>
            <p className="text-zinc-600 mb-4">
              {/* Substitua pelo endereço completo quando tiver a informação */}
              Clique no mapa para ver a localização exata.
            </p>
            <a 
              href="https://maps.app.goo.gl/EQx3N4TR9nTFkavz5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Ver no Google Maps
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>

        <section id="contato" className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-zinc-800 mb-4">
            Entre em Contato
          </h2>

          <p className="text-zinc-600 mb-6">
            Clique abaixo para falar diretamente no WhatsApp.
          </p>

          <button
            onClick={openWhatsapp}
            className="bg-emerald-500 text-white px-6 py-3 rounded-xl hover:bg-emerald-600 transition font-medium"
          >
            Falar no WhatsApp
          </button>
        </section>
      </main>

      <footer className="bg-white border-t border-zinc-200 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Tia Josi. Todos os direitos reservados.</p>
          <a href="https://joadison.github.io/portfolio_JMS/" className="text-xs">Feito por JMS</a>
        </div>
      </footer>

    </div>
  );
}