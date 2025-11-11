import React from 'react';
import { ICONS } from '../constants';

const NewDeliveryModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl">
                <div className="flex justify-between items-center p-5 border-b">
                    <h2 className="text-xl font-bold text-slate-800">Criar Nova Entrega</h2>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-800">{ICONS.x}</button>
                </div>
                <div className="p-6">
                    <p>Formulário para nova entrega.</p>
                </div>
                <div className="p-4 border-t flex justify-end">
                    <button onClick={onClose} className="px-4 py-2 bg-slate-200 text-slate-800 rounded-lg mr-2 hover:bg-slate-300 font-semibold">
                        Cancelar
                    </button>
                    <button className="px-4 py-2 bg-brand-blue text-white rounded-lg hover:bg-blue-700 font-semibold">
                        Criar Entrega
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewDeliveryModal;
