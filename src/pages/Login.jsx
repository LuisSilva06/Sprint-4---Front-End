import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo_brancaecolorida.svg";
import futebol1 from "../assets/futebol.jpg";
import futebol2 from "../assets/futebol.png";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    console.log("Login bem-sucedido!");
    navigate("/home"); // redireciona para a Home
  };

  return (
    <div className="font-sans h-screen">
      {/* Background com gradiente e overlay */}
      <div className="h-full w-full bg-gradient-to-b from-purple-900 to-purple-700 relative overflow-hidden">
        {/* Imagens de fundo */}
        <div className="absolute inset-0 opacity-30 bg-blend-overlay">
          <img src={futebol1} alt="" className="absolute w-1/2 h-1/2 object-cover top-0 left-0" />
          <img src={futebol2} alt="" className="absolute w-1/2 h-1/2 object-cover top-0 right-0 rotate-180" />
          <img src={futebol1} alt="" className="absolute w-1/2 h-1/2 object-cover bottom-0 left-0 rotate-90" />
          <img src={futebol1} alt="" className="absolute w-1/2 h-1/2 object-cover bottom-0 right-0 -rotate-90" />
          <img src={futebol2} alt="" className="absolute w-1/2 h-1/2 object-cover bottom-0 left-0" />
          <img src={futebol1} alt="" className="absolute w-1/2 h-1/2 object-cover bottom-0 right-0 rotate-180" />
        </div>

        {/* Botão Voltar */}
        <div className="absolute top-6 left-6 z-10">
          <button onClick={() => navigate(-1)} className="text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            <span className="ml-1">Voltar</span>
          </button>
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
          {/* Logo */}
          <div className="mb-6">
            <img src={logo} alt="PASSA A BOLA" className="h-20 rounded-full" />
          </div>

          {/* Título */}
          <h1 className="text-2xl font-bold text-center text-white mb-8">
            Bem-Vindo de volta ao PASSA A BOLA
          </h1>

          {/* Formulário de Login */}
          <div className="w-full max-w-md md:w-3/4 lg:w-2/5">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white rounded-xl shadow-lg p-4 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  id="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white rounded-xl shadow-lg p-4 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="text-right">
                <a href="#" className="text-sm text-purple-200 hover:text-white">
                  Esqueceu sua Senha?
                </a>
              </div>

              <button
                type="submit"
                className="bg-purple-900 text-white rounded-full p-4 w-full text-center font-bold shadow-lg hover:bg-purple-800 transition"
              >
                LOGIN
              </button>

              <button
                type="button"
                className="bg-white text-gray-700 rounded-full p-4 w-full text-center font-medium flex items-center justify-center shadow-lg hover:bg-gray-100 transition"
              >
                {/* Ícone do Google */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" className="mr-2">
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8
                    c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                    C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20
                    c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12
                    c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4
                    C16.318,4,9.656,8.337,6.306,14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238
                    C29.211,35.091,26.715,36,24,36
                    c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025
                    C9.505,39.556,16.227,44,24,44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303
                    c-0.792,2.237-2.231,4.166-4.087,5.571
                    l6.19,5.238C36.971,39.205,44,34,44,24
                    C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                </svg>
                Login com Google
              </button>
            </form>

            <div className="text-center mt-8">
              <p className="text-white">
                Novo por aqui?{" "}
                <a href="/cadastro" className="text-purple-300 underline font-medium hover:text-white">
                  Cadastre-se!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
