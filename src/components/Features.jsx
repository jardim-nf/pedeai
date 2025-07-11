function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-indigo-700 mb-10">Funcionalidades do PedeAí</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-2">Pedidos no WhatsApp</h4>
            <p className="text-gray-600">Atenda seus clientes de forma automática direto no Zap.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Cardápio Digital</h4>
            <p className="text-gray-600">Compartilhe seu cardápio com QR Code e link personalizado.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Painel de Pedidos</h4>
            <p className="text-gray-600">Gerencie os pedidos com status estilo kanban simples e eficaz.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;