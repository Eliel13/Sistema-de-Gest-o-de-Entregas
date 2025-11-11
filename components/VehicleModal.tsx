import React from 'react';
import { Driver } from '../types';
import { ICONS } from '../constants';

interface VehicleModalProps {
    vehicle: Driver['vehicle'];
    onClose: () => void;
}

const VehicleModal: React.FC<VehicleModalProps> = ({ vehicle, onClose }) => {
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Veículo atualizado!`);
        onClose();
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-lg font-bold text-gray-800">Editar Veículo</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">{ICONS.x}</button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Tipo de Veículo</label>
                        <input type="text" defaultValue={vehicle.type} className="mt-1 w-full p-2 border rounded-md" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Placa</label>
                        <input type="text" defaultValue={vehicle.plate} className="mt-1 w-full p-2 border rounded-md" required />
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

export default VehicleModal;
