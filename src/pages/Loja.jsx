import React, { useState } from "react";

const produtosIniciais = [
  {
    id: 1,
    nome: "Camisa Nike Corinthians I",
    preco: "R$ 299,90",
    imagem: "../assets/exemplo_camiseta.svg",
    categoria: "Camisetas",
  },
  {
    id: 2,
    nome: "Camisa Nike Corinthians II",
    preco: "R$ 349,90",
    imagem: "../assets/exemplo_camiseta.svg",
    categoria: "Camisetas",
  },
  {
    id: 3,
    nome: "Camisa Nike Brasil I",
    preco: "R$ 349,90",
    imagem: "../assets/exemplo_camiseta.svg",
    categoria: "Camisetas",
  },
  {
    id: 4,
    nome: "Chuteira Nike Phantom",
    preco: "R$ 599,90",
    imagem: "../assets/exemplo_chuteira.svg",
    categoria: "Chuteiras",
  },
  {
    id: 5,
    nome: "Chuteira Adidas Predator",
    preco: "R$ 549,90",
    imagem: "../assets/exemplo_chuteira.svg",
    categoria: "Chuteiras",
  },
];

export default function Loja() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [produtos] = useState(produtosIniciais);
  const [busca, setBusca] = useState("");

  const categorias = [
    "Todos",
    "Camisetas",
    "Chuteiras",
    "Bolas",
    "Acessórios",
    "Uniformes",
  ];

  const filtrarProdutos = () => {
    return produtos.filter((produto) => {
      const matchCategoria =
        categoriaAtiva === "Todos" || produto.categoria === categoriaAtiva;
      const matchBusca = produto.nome
        .toLowerCase()
        .includes(busca.toLowerCase());
      return matchCategoria && matchBusca;
    });
  };

  const handleAdicionarCarrinho = (produto) => {
    alert(`Produto "${produto.nome}" adicionado ao carrinho!`);
  };

  const handleDetalhes = (produto) => {
    alert(`Detalhes do produto: ${produto.nome}`);
  };

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
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="mt-16 mb-20 px-4">
        <section className="mt-6">
          <h1 className="text-2xl font-bold text-center text-purple-900">
            LOJA PASSA A BOLA
          </h1>

          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full bg-gray-200 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="absolute left-3 top-2.5 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
        </section>

        {/* Categorias */}
        <section className="mt-6">
          <div className="flex overflow-x-auto space-x-3 pb-2 hide-scrollbar lg:justify-center">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaAtiva(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition ${
                  categoriaAtiva === cat
                    ? "bg-purple-900 text-white"
                    : "bg-white text-purple-900 shadow"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Produtos */}
        <section className="mt-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filtrarProdutos().map((produto) => (
              <div
                key={produto.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                onClick={() => handleDetalhes(produto)}
              >
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="h-32 w-full p-2 object-contain"
                />
                <div className="p-3">
                  <h3 className="font-semibold text-gray-800">
                    {produto.nome}
                  </h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">
                      {produto.preco}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAdicionarCarrinho(produto);
                      }}
                      className="bg-purple-900 text-white p-1 rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Navegação inferior */}
      <nav className="bg-white flex justify-around items-center p-4 fixed bottom-0 w-full rounded-t-2xl shadow-lg z-50">
        <a href="/loja" className="flex flex-col items-center">
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
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </div>
          <span className="text-xs text-purple-900 font-medium mt-1">Loja</span>
        </a>

        <a href="/noticias" className="flex flex-col items-center text-gray-500">
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
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <span className="text-xs mt-1">Notícias</span>
        </a>

        <a href="/home" className="flex flex-col items-center text-gray-500">
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
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <span className="text-xs mt-1">Home</span>
        </a>

        <a href="/peneiras" className="flex flex-col items-center text-gray-500">
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
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
          </svg>
          <span className="text-xs mt-1">Peneiras</span>
        </a>

        <a href="/mapa" className="flex flex-col items-center text-gray-500">
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
          >
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
          </svg>
          <span className="text-xs mt-1">Mapa</span>
        </a>
      </nav>
    </div>
  );
}
