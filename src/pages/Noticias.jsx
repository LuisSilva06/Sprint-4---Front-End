import React from "react";
import futebol from "../assets/futebol.jpg";

export default function Noticias() {
  return (
    <div className="font-sans bg-gray-50 pb-20">
      {/* HEADER */}
      <header className="bg-purple-900 text-white p-4 flex justify-between items-center fixed top-0 w-full z-50 shadow-md">
        <div className="flex items-center">
          <button
            onClick={() => (window.location.href = "home.html")}
            className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5"></path>
              <path d="M12 19l-7-7 7-7"></path>
            </svg>
          </button>
        </div>

        <div className="flex items-center">
          <img
            src="/assets/logo_brancaecolorida.svg"
            alt="PASSA A BOLA"
            className="h-8 rounded-full"
          />
          <span className="ml-2 font-bold">PASSA A BOLA</span>
        </div>

        <div>
          <button className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="mt-16 mb-20 px-4">
        <section className="mt-6">
          <h2 className="text-xl font-bold text-purple-900 mb-3">
            Últimas Notícias
          </h2>
          <div className="space-y-4">
            {/* Notícia 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="../assets/futebol.jpg"
                alt="Notícia 1"
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="font-bold text-gray-800">
                  Brasil vence amistoso contra Argentina
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Seleção feminina mostra força em jogo preparatório
                </p>
              </div>
            </div>

            {/* Notícia 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="../assets/corinthians_campeao.jpg"
                alt="Notícia 2"
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="font-bold text-gray-800">
                  Corinthians é campeão brasileiro
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Equipe feminina conquista título pela quarta vez
                </p>
              </div>
            </div>

            {/* Notícia 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="../assets/entrevista_marta.jpg"
                alt="Notícia 3"
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="font-bold text-gray-800">
                  Marta renova contrato com Orlando Pride
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Craque brasileira permanece nos EUA por mais 2 anos
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* NAVBAR */}
      <nav className="bg-white flex justify-around items-center p-4 fixed bottom-0 w-full rounded-t-2xl shadow-lg z-50">
        <a href="loja.html" className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span className="text-xs text-gray-500 mt-1">Loja</span>
        </a>

        <a href="noticias.html" className="flex flex-col items-center">
          <div className="p-2 rounded-full bg-purple-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <span className="text-xs text-purple-900 font-medium mt-1">
            Notícias
          </span>
        </a>

        <a href="home.html" className="flex flex-col items-center">
          <div className="p-3 rounded-full bg-white -mt-8 shadow-lg border-4 border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-500"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <span className="text-xs text-gray-500 mt-1">Home</span>
        </a>

        <a href="peneiras.html" className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
          </svg>
          <span className="text-xs text-gray-500 mt-1">Peneiras</span>
        </a>

        <a href="#" className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500"
          >
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
            <line x1="8" y1="2" x2="8" y2="18"></line>
            <line x1="16" y1="6" x2="16" y2="22"></line>
          </svg>
          <span className="text-xs text-gray-500 mt-1">Mapa</span>
        </a>
      </nav>
    </div>
  );
}
