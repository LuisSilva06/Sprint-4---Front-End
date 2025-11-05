import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo_brancaecolorida.svg";
import futebol from "../assets/futebol.jpg";
import corinthiansCampeao from "../assets/corinthians_campeao.jpg";
import imagemBrasil from "../assets/imagemBrasilFutebolFeminino.svg";
import melhoresMomentos from "../assets/melhores_momentos.jpg";
import entrevistaMarta from "../assets/entrevista_marta.jpg";
import top10Gols from "../assets/top10_gols.jpg";
import corinthiansSub17 from "../assets/corinthians_timesub17.jfif";
import workshop from "../assets/workshop.avif";
import finalCamp from "../assets/final_camp_bra.avif";

export default function Home() {
  const [noticias, setNoticias] = useState([]);
  const carousels = useRef([]);

  useEffect(() => {
    // 🔹 Carrega as notícias do JSON local
    fetch("/src/data/noticias.json")
      .then((res) => res.json())
      .then((data) => setNoticias(data))
      .catch((err) => console.error("Erro ao carregar notícias:", err));

    // 🔹 Código original do carrossel
    carousels.current.forEach((carousel) => {
      if (!carousel) return;
      let isDown = false;
      let startX;
      let scrollLeft;

      const mouseDown = (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
      };
      const mouseLeave = () => (isDown = false);
      const mouseUp = () => (isDown = false);
      const mouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
      };

      carousel.addEventListener("mousedown", mouseDown);
      carousel.addEventListener("mouseleave", mouseLeave);
      carousel.addEventListener("mouseup", mouseUp);
      carousel.addEventListener("mousemove", mouseMove);

      return () => {
        carousel.removeEventListener("mousedown", mouseDown);
        carousel.removeEventListener("mouseleave", mouseLeave);
        carousel.removeEventListener("mouseup", mouseUp);
        carousel.removeEventListener("mousemove", mouseMove);
      };
    });
  }, []);

  return (
    <div className="font-sans bg-[#faf8fc] min-h-screen text-gray-900">
      {/* Header */}
      <header className="bg-[#5B0D7D] text-white px-4 py-2 flex items-center justify-between fixed top-0 w-full z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <img src={logo} alt="PASSA A BOLA" className="h-7" />
          <h1 className="text-sm font-semibold tracking-wide">PASSA A BOLA</h1>
        </div>
        <button className="bg-[#D90429] px-2 py-0.5 rounded-full text-xs font-medium hover:bg-[#f4374e] transition">
          AO VIVO
        </button>
      </header>

      {/* Conteúdo principal */}
      <main className="pt-14 px-4 max-w-4xl mx-auto">
        {/* 🔹 Últimas Notícias (agora com JSON local) */}
        <section className="mt-3">
          <h2 className="text-sm font-bold text-[#5B0D7D] mb-2 border-l-4 border-[#D90429] pl-2">
            Últimas Notícias
          </h2>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
            {noticias.map((n) => (
              <div
                key={n.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all"
              >
                <img
                  src={n.imagem}
                  alt={n.titulo}
                  className="w-full h-20 sm:h-24 md:h-24 object-cover"
                />
                <div className="p-2">
                  <h3 className="font-semibold text-[#5B0D7D] text-xs leading-tight">
                    {n.titulo}
                  </h3>
                  <p className="text-[11px] text-gray-600 mt-1 leading-snug">
                    {n.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Melhores Momentos */}
        <section className="bg-white mt-8 py-5 px-3 rounded-xl shadow-sm">
          <h2 className="text-sm font-bold text-center text-[#5B0D7D] mb-3">
            Melhores Momentos
          </h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
            {[melhoresMomentos, entrevistaMarta, top10Gols].map((img, i) => (
              <div
                key={i}
                className="rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all"
              >
                <img
                  src={img}
                  alt="Vídeo"
                  className="w-full h-20 sm:h-24 md:h-24 object-cover"
                />
                <div className="p-2">
                  <h3 className="font-semibold text-[#5B0D7D] text-xs leading-tight">
                    {i === 0
                      ? "Final do Campeonato Brasileiro"
                      : i === 1
                      ? "Entrevista com Marta"
                      : "Top 10 Gols da Rodada"}
                  </h3>
                  <p className="text-[11px] text-gray-600 mt-0.5 leading-snug">
                    {i === 0
                      ? "Corinthians conquista o título com virada histórica!"
                      : i === 1
                      ? "A Rainha fala sobre o futuro da Seleção e novos talentos."
                      : "Os gols mais incríveis da rodada — veja quem brilhou!"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Próximos Eventos */}
        <section className="mt-8 mb-10">
          <h2 className="text-sm font-bold text-[#5B0D7D] mb-2 border-l-4 border-[#D90429] pl-2">
            Próximos Eventos
          </h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
            {[corinthiansSub17, workshop, finalCamp].map((img, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all"
              >
                <img
                  src={img}
                  alt="Evento"
                  className="w-full h-20 sm:h-24 md:h-24 object-cover"
                />
                <div className="p-2">
                  <h3 className="font-semibold text-[#5B0D7D] text-xs leading-tight">
                    {i === 0
                      ? "Peneira Corinthians Sub-17"
                      : i === 1
                      ? "Workshop de Futebol Feminino"
                      : "Final do Campeonato Brasileiro"}
                  </h3>
                  <p className="text-[11px] text-gray-600 mt-0.5 leading-snug">
                    {i === 0
                      ? "15 de Outubro, 2025 — São Paulo"
                      : i === 1
                      ? "22 de Outubro, 2025 — Rio de Janeiro"
                      : "30 de Outubro, 2025 — Neo Química Arena"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer compacto */}
      <footer className="bg-[#4a086b] text-white text-center py-3 text-[11px]">
        <p>© 2025 Passa a Bola — Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
