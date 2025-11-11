import React from 'react';
import { Delivery } from '../types';
// FIX: Changed import to be a relative path
import { ICONS } from '../constants';
import Badge from './Badge';

interface DeliveryDetailModalProps {
  delivery: Delivery;
  onClose: () => void;
}

const DeliveryDetailModal: React.FC<DeliveryDetailModalProps> = ({ delivery, onClose }) => {
  if (!delivery) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-5 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-800">Detalhes da Entrega: {delivery.id}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-800">
            {ICONS.x}
          </button>
        </div>

        <div className="p-6 overflow-y-auto bg-slate-50/50">
          {/* Header Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-slate-600 mb-2">Cliente</h3>
              <p className="text-slate-800 font-medium">{delivery.customer.name}</p>
              <p className="text-slate-600 text-sm">{delivery.customer.contact}</p>
              <p className="text-slate-600 text-sm flex items-start mt-1">
                <span className="mt-1 mr-2 text-slate-400 shrink-0">{ICONS.mapPin}</span>
                {delivery.customer.address}
              </p>
            </div>
             <div className="bg-white p-4 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-600 mb-2">Status & Prazos</h3>
                <div className="flex items-center mb-2">
                    <span className="font-medium mr-2 text-sm text-slate-800">Status:</span> <Badge status={delivery.status} />
                </div>
                <div className="flex items-center">
                    <span className="font-medium mr-2 text-sm text-slate-800">Prioridade:</span> <span className="font-semibold">{delivery.priority}</span>
                </div>
                 <p className="text-sm text-slate-500 mt-2">Criado em: {new Date(delivery.created_at).toLocaleString('pt-BR')}</p>
                 <p className="text-sm text-slate-500">Prazo: {new Date(delivery.delivery_deadline).toLocaleString('pt-BR')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-600 mb-2">Financeiro</h3>
                <p className="text-slate-800"><span className="font-medium">Valor Total:</span> R$ {delivery.totalValue.toFixed(2)}</p>
                <p className="text-slate-800"><span className="font-medium">Recompensa:</span> R$ {delivery.reward.toFixed(2)}</p>
                <p className="text-slate-800 mt-2"><span className="font-medium">Entregador:</span> {delivery.driver?.name || "N/A"}</p>
            </div>
          </div>
          
          {/* Items Table */}
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Itens da Entrega</h3>
          <div className="overflow-x-auto border border-slate-200 rounded-lg bg-white">
            <table className="w-full text-sm text-left text-slate-500">
                <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                    <tr>
                        <th className="px-4 py-3">Produto</th>
                        <th className="px-4 py-3 text-center">Qtd. Pedida</th>
                        <th className="px-4 py-3 text-center">Qtd. Entregue</th>
                        <th className="px-4 py-3 text-center">Qtd. Restante</th>
                        <th className="px-4 py-3">Provas</th>
                    </tr>
                </thead>
                <tbody>
                    {delivery.items.map(item => (
                        <tr key={item.product.id} className="border-b border-slate-200">
                            <td className="px-4 py-2 font-medium text-slate-900 flex items-center">
                                <img src={item.product.photo} alt={item.product.name} className="w-10 h-10 rounded-md mr-3" />
                                {item.product.name}
                            </td>
                            <td className="px-4 py-2 text-center">{item.qty_ordered}</td>
                            <td className="px-4 py-2 text-center">{item.qty_delivered}</td>
                            <td className="px-4 py-2 text-center font-semibold">{item.qty_ordered - item.qty_delivered}</td>
                            <td className="px-4 py-2">
                                {item.proofs.length > 0 ? (
                                    <a href={item.proofs[0].photoUrl} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
                                        Ver Prova ({item.proofs.length})
                                    </a>
                                ) : 'Nenhuma'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
        </div>

        <div className="p-4 border-t border-slate-200 flex justify-end bg-white rounded-b-xl">
            <button onClick={onClose} className="px-4 py-2 bg-slate-200 text-slate-800 rounded-lg mr-2 hover:bg-slate-300 font-semibold">
                Fechar
            </button>
            <button className="px-4 py-2 bg-brand-green text-white rounded-lg hover:bg-green-600 font-semibold">
                Finalizar Entrega
            </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetailModal;