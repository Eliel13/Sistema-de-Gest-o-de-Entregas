import React, { useState } from 'react';
import { Delivery, DeliveryItem, DeliveryStatus } from '../types';
import { ICONS } from '../constants';
import Badge from './Badge';
import ProofOfDeliveryModal from './ProofOfDeliveryModal';

interface DriverDeliveryDetailProps {
    delivery: Delivery;
    onBack: () => void;
}

const DriverDeliveryDetail: React.FC<DriverDeliveryDetailProps> = ({ delivery, onBack }) => {
    const [selectedItem, setSelectedItem] = useState<DeliveryItem | null>(null);

    const isActionable = delivery.status === DeliveryStatus.ASSIGNED || delivery.status === DeliveryStatus.IN_TRANSIT;

    return (
        <div className="space-y-4">
            <div className="flex items-center">
                <button onClick={onBack} className="text-slate-600 mr-3 p-1 rounded-full hover:bg-slate-200">
                    &larr;
                </button>
                <h1 className="text-xl font-bold text-slate-800">Detalhes da Entrega</h1>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="font-bold text-slate-800">{delivery.customer.name}</h2>
                    <Badge status={delivery.status} />
                </div>
                <p className="text-slate-600 text-sm flex items-start">
                     <span className="mt-1 mr-2 text-slate-400 shrink-0">{ICONS.mapPin}</span>
                     {delivery.customer.address}
                </p>
                <p className="text-slate-600 text-sm mt-1">Contato: {delivery.customer.contact}</p>
                <p className="text-slate-500 text-xs mt-2">Prazo: {new Date(delivery.delivery_deadline).toLocaleString('pt-BR')}</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-3">Itens</h3>
                <div className="space-y-3">
                    {delivery.items.map(item => (
                        <div key={item.product.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-md">
                            <div className="flex items-center">
                                <img src={item.product.photo} alt={item.product.name} className="w-12 h-12 rounded-md mr-4" />
                                <div>
                                    <p className="font-medium text-slate-800">{item.product.name}</p>
                                    <p className="text-sm text-slate-600">Qtd: {item.qty_ordered} {item.product.unit}</p>
                                </div>
                            </div>
                            {isActionable && (
                                <button onClick={() => setSelectedItem(item)} className="text-sm font-semibold text-brand-blue hover:underline">
                                    Registrar
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {isActionable && (
                <div className="flex flex-col space-y-3 pt-2">
                    {delivery.status === DeliveryStatus.ASSIGNED && (
                        <button className="w-full py-3 bg-brand-blue text-white font-bold rounded-lg shadow-sm hover:bg-blue-700">
                            Iniciar Entrega
                        </button>
                    )}
                     {delivery.status === DeliveryStatus.IN_TRANSIT && (
                        <button className="w-full py-3 bg-brand-green text-white font-bold rounded-lg shadow-sm hover:bg-green-700">
                            Finalizar Entrega
                        </button>
                    )}
                    <button className="w-full py-3 bg-brand-red text-white font-bold rounded-lg shadow-sm hover:bg-red-700">
                        Relatar Problema
                    </button>
                </div>
            )}

            {selectedItem && <ProofOfDeliveryModal item={selectedItem} deliveryId={delivery.id} onClose={() => setSelectedItem(null)} />}
        </div>
    );
};

export default DriverDeliveryDetail;
