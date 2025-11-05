import React, { useEffect } from "react";

export default function Mapa() {
  useEffect(() => {
    // Interações do mapa
    const states = document.querySelectorAll(".state");
    const markers = document.querySelectorAll(".city-marker");

    states.forEach((state) => {
      state.addEventListener("click", function () {
        document.querySelectorAll(".state").forEach((s) => {
          if (s.id !== "SP") s.setAttribute("fill", "#e2e8f0");
        });
        if (this.id !== "SP") this.setAttribute("fill", "#9f7aea");
        window.location.href = "/peneiras";
      });
    });

    markers.forEach((marker) => {
      marker.addEventListener("click", function () {
        window.location.href = "/peneiras";
      });
    });
  }, []);

  return (
    <div className="font-sans bg-gray-50 pb-20 min-h-screen">
      {/* Header */}
      <header className="bg-purple-900 text-white p-4 flex justify-between items-center fixed top-0 w-full z-50 shadow-md">
        <div className="flex items-center">
          <button
            onClick={() => (window.location.href = "/home")}
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

      {/* Main */}
      <main className="mt-16 mb-20 px-4">
        <section className="mt-6">
          <h1 className="text-2xl font-bold text-center text-purple-900">
            Mapa de Peneiras
          </h1>
          <div className="h-96 rounded-xl shadow-md bg-white p-4 flex items-center justify-center mt-4">
            {/* SVG do Mapa */}
            <svg
              id="brazil-map"
              viewBox="0 0 800 800"
              className="w-full h-full max-h-80"
            >
              {/* Estados */}
              <path id="AC" d="M100,350 L150,350 L150,380 L100,380 Z" className="state" fill="#e2e8f0" stroke="#4a5568" strokeWidth="1"></path>
              <path id="AM" d="M150,300 L250,300 L250,380 L150,380 Z" className="state" fill="#e2e8f0" stroke="#4a5568" strokeWidth="1"></path>
              <path id="RR" d="M180,250 L230,250 L230,300 L180,300 Z" className="state" fill="#e2e8f0" stroke="#4a5568" strokeWidth="1"></path>
              <path id="PA" d="M250,280 L350,280 L350,380 L250,380 Z" className="state" fill="#e2e8f0" stroke="#4a5568" strokeWidth="1"></path>
              <path id="AP" d="M280,230 L330,230 L330,280 L280,280 Z" className="state" fill="#e2e8f0" stroke="#4a5568" strokeWidth="1"></path>
              <path id="MA" d="M350,300 L400,300 L400,350 L350,350 Z" className="state" fill="#e2e8f0" stroke="#4a5568" strokeWidth="1"></path>
              <path id="PI" d="M400,320 L440,320 L440,380 L400,380 Z" className="state" fill="#e2e8f0" stroke="#4a5568" strokeWidth="1"></path>
              <path id="CE" d="M440,300 L480,300 L480,350 L440,350 Z" className="state" fill="#e2e8f0" stroke="#4a5568" strokeWidth="1"></path>
              <path id="RN" d="M480,310 L510,310 L510,340 L480,340 Z" className="state" fill="#e2e8f0" stroke="#4a5568" strokeWidth="1"></path>
              <path id="PB" d="M490,340 L520,340 L520,360 L490,360 Z" className="state" fill="#e2e8f0" stroke="#4a5568" strokeWidth="1"></path>
              <path id="PE" d="M460,360 L520,360 L520,390 L460,390 Z" className="state" fill="#e2e8f0" stroke="#4a5568" strokeWidth="1"></path>
              <path id="AL" d="M520,370 L540,370 L540,390 L520,390 Z" className="state" fill="#e2e8f0" stroke="#4a5568" strokeWidth="1"></path>
              <path id="SE" d="M520,390 L540,390 L540,410 L520,410 Z" className="state" fill="#e2e8f0" stroke="#4a5568" strokeWidth="1"></path>
              <path id="BA" d="M420,380 L500,380 L500,450 L420,450 Z" className="state" fill="#e2e8f0" stroke="#4a5568" strokeWidth="1"></path>
              <path id="TO" d="M350,380 L400,380 L400,450 L350,450 Z" className="state" fill="#e2e8f0" stroke="#4a5568" strokeWidth="1"></path>
              <path id="MT" d="M280,380 L350,380 L350,480 L280,480 Z" className="state" fill="#e2e8f0" stroke="#4a5568" strokeWidth="1"></path>
              <path id="SP" d="M350,520 L450,520 L450,570 L350,570 Z" className="state" fill="#7e22ce" stroke="#4a5568" strokeWidth="1"></path>

              {/* Cidades */}
              <circle cx="400" cy="540" r="8" fill="#7e22ce" stroke="white" strokeWidth="2" className="city-marker" data-city="São Paulo"></circle>
              <circle cx="470" cy="530" r="6" fill="#7e22ce" stroke="white" strokeWidth="2" className="city-marker" data-city="Rio de Janeiro"></circle>
            </svg>
          </div>
        </section>
      </main>

      {/* Footer */}
      <nav className="bg-white flex justify-around items-center p-4 fixed bottom-0 w-full rounded-t-2xl shadow-lg z-50">
        <a href="/loja" className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span className="text-xs text-gray-500 mt-1">Loja</span>
        </a>

        <a href="/home" className="flex flex-col items-center">
          <div className="p-3 rounded-full bg-white -mt-8 shadow-lg border-4 border-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <span className="text-xs text-gray-500 mt-1">Home</span>
        </a>

        <a href="/mapa" className="flex flex-col items-center">
          <div className="p-2 rounded-full bg-purple-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
            </svg>
          </div>
          <span className="text-xs text-purple-900 font-medium mt-1">Mapa</span>
        </a>
      </nav>

      {/* Estilos */}
      <style>{`
        .state {
          cursor: pointer;
          transition: fill 0.3s ease;
        }
        .state:hover {
          fill: #9f7aea;
        }
        .city-marker {
          cursor: pointer;
          transition: r 0.3s ease;
        }
        .city-marker:hover {
          r: 10;
        }
      `}</style>
    </div>
  );
}
