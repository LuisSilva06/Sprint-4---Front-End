import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home", icon: "/src/assets/vetor_menubar_home.svg" },
    { path: "/noticias", label: "Notícias", icon: "/src/assets/vetor_menubar_noticias.svg" },
    { path: "/mapa", label: "Mapa", icon: "/src/assets/vetor_menubar_mapaPeneiras.svg" },
    { path: "/loja", label: "Loja", icon: "/src/assets/vetor_menubar_loja.svg" },
    { path: "/login", label: "Perfil", icon: "/src/assets/user_image.svg" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-lg z-50">
      <nav className="flex justify-around items-center py-2">
        {menuItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center text-xs ${
                active ? "text-purple-700 font-semibold" : "text-gray-500"
              }`}
            >
              <img
                src={item.icon}
                alt={item.label}
                className={`w-6 h-6 mb-1 ${active ? "opacity-100" : "opacity-70"}`}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;
