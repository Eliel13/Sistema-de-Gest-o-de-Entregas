import React from 'react';
import { ICONS } from '../constants';
import { Driver } from '../types';

const DriverProfileModal: React.FC<{ driver: Driver, onClose: () => void }> = ({ driver, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg">
                <div className="flex justify-between items-center p-5 border-b">
                    <h2 className="text-xl font-bold text-slate-800">Perfil do Entregador</h2>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-800">{ICONS.x}</button>
                </div>
                <div className="p-6">
                    <div className="flex items-center mb-4">
                        <img src={driver.avatar} alt={driver.name} className="w-20 h-20 rounded-full mr-4" />
                        <div>
                            <h3 className="text-lg font-bold text-slate-800">{driver.name}</h3>
                            <p className="text-slate-600">{driver.status}</p>
                        </div>
                    </div>
                     <p><strong>CPF:</strong> {driver.cpf}</p>
                    <p><strong>Telefone:</strong> {driver.phone}</p>
                </div>
                <div className="p-4 border-t flex justify-end">
                    <button onClick={onClose} className="px-4 py-2 bg-slate-200 text-slate-800 rounded-lg hover:bg-slate-300 font-semibold">
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DriverProfileModal;
