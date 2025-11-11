import React from 'react';
import { DeliveryItem } from '../types';
import { ICONS } from '../constants';

interface ProofOfDeliveryModalProps {
    item: DeliveryItem;
    deliveryId: string;
    onClose: () => void;
}

const ProofOfDeliveryModal: React.FC<ProofOfDeliveryModalProps> = ({ item, deliveryId, onClose }) => {
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Prova de entrega para ${item.product.name} na entrega ${deliveryId} registrada!`);
        onClose();
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-lg font-bold text-gray-800">Registrar Entrega do Item</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">{ICONS.x}</button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <p className="font-semibold text-gray-700">{item.product.name}</p>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Quantidade Entregue</label>
                        <input type="number" defaultValue={item.qty_ordered - item.qty_delivered} max={item.qty_ordered - item.qty_delivered} min="0" className="mt-1 w-full p-2 border rounded-md" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nome do Recebedor</label>
                        <input type="text" className="mt-1 w-full p-2 border rounded-md" />
                    </div>
                    <div className="space-y-2">
                        <button type="button" className="w-full flex items-center justify-center p-3 border-2 border-dashed rounded-md text-gray-600 hover:bg-gray-50">
                            {ICONS.camera}
                            <span className="ml-2">Tirar Foto</span>
                        </button>
                         <button type="button" className="w-full flex items-center justify-center p-3 border-2 border-dashed rounded-md text-gray-600 hover:bg-gray-50">
                            {ICONS.signature}
                            <span className="ml-2">Coletar Assinatura</span>
                        </button>
                    </div>
                    <div className="pt-4 flex justify-end space-x-2">
                         <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancelar</button>
                        <button type="submit" className="px-4 py-2 bg-brand-blue text-white rounded-md hover:bg-blue-700">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProofOfDeliveryModal;