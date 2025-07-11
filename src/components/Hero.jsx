// src/components/Hero.jsx
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-indigo-50 py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">
          Receba pedidos no Zap sem pagar caro
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Automatize seu atendimento com estilo e sem quebrar o bolso
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/cardapio"
            className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
          >
            Ver Cardápio
          </Link>
          <a
            href="#planos"
            className="bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded hover:bg-indigo-100 transition"
          >
            Quero testar agora
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
