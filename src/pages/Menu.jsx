
import { useState } from 'react';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
const produtos = [
  { nome: 'X-Burguer', preco: 15 },
  { nome: 'Pizza Calabresa', preco: 35 },
  { nome: 'Refrigerante', preco: 5 },
  { nome: 'Suco Natural', preco: 7 },
];

function Menu() {
  const [pedido, setPedido] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const adicionarItem = (produto) => {
    setPedido([...pedido, produto]);
  };

  const total = pedido.reduce((acc, item) => acc + item.preco, 0);

const enviarPedido = async () => {
  const numero = telefone.replace(/\D/g, '');
  const itens = pedido.map(p => p.nome).join(', ');
  const msg = `Olá ${nome}, recebemos seu pedido: ${itens}. Total: R$ ${total.toFixed(2)}`;
  const link = `https://wa.me/55${numero}?text=${encodeURIComponent(msg)}`;

  try {
    // 1. Criar cliente
    const clienteRef = await addDoc(collection(db, 'clientes'), {
      nome,
      telefone,
    });

    // 2. Criar pedido com referência ao cliente
    await addDoc(collection(db, 'pedidos'), {
      clienteId: clienteRef.id,
      itens: pedido.map((p) => p.nome),
      total,
      status: 'recebido',
      criadoEm: new Date(),
    });

    // 3. Enviar para o WhatsApp
    window.open(link, '_blank');
  } catch (error) {
    console.error("Erro ao salvar pedido:", error);
    alert("Erro ao salvar o pedido. Tente novamente.");
  }
};

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">Cardápio Digital</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          {produtos.map((produto, i) => (
            <div key={i} className="flex items-center justify-between border p-4 rounded">
              <div>
                <h4 className="font-bold">{produto.nome}</h4>
                <p>R$ {produto.preco.toFixed(2)}</p>
              </div>
              <button
                className="bg-purple-600 text-white px-3 py-1 rounded"
                onClick={() => adicionarItem(produto)}
              >
                Adicionar
              </button>
            </div>
          ))}
        </div>
        <div className="border rounded p-4">
          <h3 className="text-xl font-semibold mb-2">Resumo do Pedido</h3>
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full p-2 border rounded mb-2"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Seu telefone"
            className="w-full p-2 border rounded mb-2"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <p className="mb-2">Total: R$ {total.toFixed(2)}</p>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded w-full"
            onClick={enviarPedido}
            disabled={!nome || !telefone || pedido.length === 0}
          >
            Enviar Pedido via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
