import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function FormularioPedido() {
  const [cliente, setCliente] = useState('');
  const [itens, setItens] = useState('');
  const [total, setTotal] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cliente || !itens || !total) return alert("Preencha todos os campos");

    const novoPedido = {
      cliente,
      itens: itens.split(',').map(item => item.trim()),
      total,
      status: 'recebido'
    };

    try {
      await addDoc(collection(db, 'pedidos'), novoPedido);
      setCliente('');
      setItens('');
      setTotal('');
    } catch (error) {
      console.error("Erro ao adicionar pedido:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <h3 className="text-lg font-bold mb-2">Novo Pedido</h3>
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Itens (separados por vírgula)"
          value={itens}
          onChange={(e) => setItens(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Total (ex: 25,00)"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Criar Pedido
        </button>
      </div>
    </form>
  );
}

export default FormularioPedido;
