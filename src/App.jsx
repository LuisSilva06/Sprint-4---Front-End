import './assets/css/signin.css'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Loja from "./pages/Loja";
import Mapa from "./pages/Mapa";
import Noticias from "./pages/Noticias";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/noticias" element={<Noticias />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
