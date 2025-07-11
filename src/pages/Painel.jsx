import PedidoCard from '../components/PedidoCard';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  onSnapshot
} from 'firebase/firestore';

function Painel() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'pedidos'), (snapshot) => {
      const dados = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPedidos(dados);
    });
    return () => unsub();
  }, []);

  const mudarStatus = async (id, novoStatus) => {
    const ref = doc(db, 'pedidos', id);
    await updateDoc(ref, { status: novoStatus });
  };

  const colunas = [
    { titulo: 'Recebido', status: 'recebido' },
    { titulo: 'Em Preparo', status: 'preparo' },
    { titulo: 'Saiu p/ Entrega', status: 'entregando' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Painel de Pedidos</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {colunas.map((coluna) => (
          <div key={coluna.status}>
            <h3 className="text-xl font-semibold mb-4 text-center">{coluna.titulo}</h3>
            <div className="space-y-4">
              {pedidos.filter((p) => p.status === coluna.status).map((pedido) => (
                <PedidoCard key={pedido.id} pedido={pedido} mudarStatus={mudarStatus} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Painel;
