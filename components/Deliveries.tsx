import React, { useState } from 'react';
import { MOCK_DELIVERIES, ICONS } from '../constants';
import { Delivery, DeliveryStatus } from '../types';
import Badge from './Badge';
import DeliveryDetailModal from './DeliveryDetailModal';
import NewDeliveryModal from './NewDeliveryModal';

const Deliveries: React.FC = () => {
  const [selectedDelivery, setSelectedDelivery] = useState<Delivery | null>(null);
  const [isNewDeliveryModalOpen, setNewDeliveryModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Pending', 'In Transit', 'Delivered', 'Failed'];

  const filteredDeliveries = MOCK_DELIVERIES.filter(d => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Pending') return d.status === DeliveryStatus.PENDING || d.status === DeliveryStatus.ASSIGNED;
    if (activeTab === 'In Transit') return d.status === DeliveryStatus.IN_TRANSIT;
    if (activeTab === 'Delivered') return d.status === DeliveryStatus.DELIVERED;
    if (activeTab === 'Failed') return d.status === DeliveryStatus.FAILED || d.status === DeliveryStatus.CANCELED;
    return false;
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-slate-800">Gerenciamento de Entregas</h2>
        <button
          onClick={() => setNewDeliveryModalOpen(true)}
          className="flex items-center px-4 py-2 bg-brand-blue text-white rounded-lg hover:bg-blue-700 font-semibold"
        >
          {ICONS.plus}
          <span className="ml-2">Nova Entrega</span>
        </button>
      </div>

      <div className="border-b border-slate-200 mb-4">
        <nav className="-mb-px flex space-x-6">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab
                  ? 'border-brand-blue text-brand-blue'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-500">
          <thead className="text-xs text-slate-700 uppercase bg-slate-50">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Cliente</th>
              <th className="px-6 py-3">Entregador</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Prazo</th>
              <th className="px-6 py-3 text-right">Valor</th>
            </tr>
          </thead>
          <tbody>
            {filteredDeliveries.map(delivery => (
              <tr
                key={delivery.id}
                className="bg-white border-b hover:bg-slate-50 cursor-pointer"
                onClick={() => setSelectedDelivery(delivery)}
              >
                <td className="px-6 py-4 font-medium text-slate-900">{delivery.id}</td>
                <td className="px-6 py-4">{delivery.customer.name}</td>
                <td className="px-6 py-4">{delivery.driver?.name || 'N/A'}</td>
                <td className="px-6 py-4"><Badge status={delivery.status} /></td>
                <td className="px-6 py-4">{new Date(delivery.delivery_deadline).toLocaleDateString('pt-BR')}</td>
                <td className="px-6 py-4 text-right">R$ {delivery.totalValue.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedDelivery && <DeliveryDetailModal delivery={selectedDelivery} onClose={() => setSelectedDelivery(null)} />}
      {isNewDeliveryModalOpen && <NewDeliveryModal onClose={() => setNewDeliveryModalOpen(false)} />}
    </div>
  );
};

export default Deliveries;
