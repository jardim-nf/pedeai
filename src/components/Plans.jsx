function Plans() {
  return (
    <section id="plans" className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-indigo-700 mb-10">Escolha seu plano</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-bold mb-2">Free</h4>
            <p className="text-gray-600 mb-4">R$ 0/mês</p>
            <ul className="text-gray-700 mb-4">
              <li>✔ Cardápio digital</li>
              <li>✖ Painel de pedidos</li>
              <li>✖ WhatsApp automático</li>
            </ul>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Começar</button>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-bold mb-2">Starter</h4>
            <p className="text-gray-600 mb-4">R$ 29/mês</p>
            <ul className="text-gray-700 mb-4">
              <li>✔ Cardápio digital</li>
              <li>✔ Painel de pedidos</li>
              <li>✖ WhatsApp automático</li>
            </ul>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Assinar</button>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-bold mb-2">Pro</h4>
            <p className="text-gray-600 mb-4">R$ 59/mês</p>
            <ul className="text-gray-700 mb-4">
              <li>✔ Cardápio digital</li>
              <li>✔ Painel de pedidos</li>
              <li>✔ WhatsApp automático</li>
            </ul>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Assinar</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plans;