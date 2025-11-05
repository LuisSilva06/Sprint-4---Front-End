import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-purple-700 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">Passa a Bola</h1>

      <nav className="flex gap-6">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/noticias" className="hover:text-gray-200">Notícias</Link>
        <Link to="/mapa" className="hover:text-gray-200">Mapa</Link>
        <Link to="/loja" className="hover:text-gray-200">Loja</Link>
        <Link to="/login" className="hover:text-gray-200">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
