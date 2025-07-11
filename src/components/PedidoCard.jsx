// src/components/PedidoCard.jsx
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

function PedidoCard({ pedido, mudarStatus }) {
  const avancar = {
    recebido: "preparo",
    preparo: "entregando",
  };
  const voltar = {
    preparo: "recebido",
    entregando: "preparo",
  };

  const excluirPedido = async () => {
    const confirm = window.confirm("Tem certeza que deseja excluir este pedido?");
    if (confirm) {
      await deleteDoc(doc(db, "pedidos", pedido.id));
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h4 className="font-bold text-lg">{pedido.cliente}</h4>
      <p className="text-sm text-gray-600">Itens: {pedido.itens.join(", ")}</p>
      <p className="text-sm text-gray-600">Total: R$ {pedido.total}</p>
      <div className="flex gap-2 mt-2 flex-wrap">
        {voltar[pedido.status] && (
          <button
            onClick={() => mudarStatus(pedido.id, voltar[pedido.status])}
            className="text-sm bg-yellow-500 text-white px-2 py-1 rounded"
          >
            Voltar
          </button>
        )}
        {avancar[pedido.status] && (
          <button
            onClick={() => mudarStatus(pedido.id, avancar[pedido.status])}
            className="text-sm bg-green-600 text-white px-2 py-1 rounded"
          >
            Avançar
          </button>
        )}
        <button
          onClick={excluirPedido}
          className="text-sm bg-red-600 text-white px-2 py-1 rounded"
        >
          Excluir
        </button>
      </div>
    </div>
  );
}

export default PedidoCard;
