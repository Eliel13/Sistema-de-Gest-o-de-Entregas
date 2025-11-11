import React, { useState } from 'react';
import { Driver } from '../types';
import { ICONS } from '../constants';
import VehicleModal from './VehicleModal';

interface DriverProfileProps {
    driver: Driver;
}

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="flex justify-between items-center py-3 border-b border-slate-200">
        <span className="text-sm font-medium text-slate-500">{label}</span>
        <span className="text-sm text-slate-800 font-semibold">{value}</span>
    </div>
);

const DriverProfile: React.FC<DriverProfileProps> = ({ driver }) => {
    const [isVehicleModalOpen, setVehicleModalOpen] = useState(false);
    
    return (
        <div className="space-y-6">
             <div className="flex flex-col items-center">
                <img src={driver.avatar} alt={driver.name} className="w-24 h-24 rounded-full ring-4 ring-white shadow-lg" />
                <h1 className="text-2xl font-bold text-slate-800 mt-4">{driver.name}</h1>
                <p className="text-slate-600">{driver.status}</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold text-slate-800 mb-2">Informações Pessoais</h2>
                <InfoRow label="CPF" value={driver.cpf} />
                <InfoRow label="Telefone" value={driver.phone} />
                <InfoRow label="Data de Nascimento" value={new Date(driver.dateOfBirth).toLocaleDateString('pt-BR')} />
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md">
                <div className="flex justify-between items-center mb-2">
                     <h2 className="text-lg font-semibold text-slate-800">Veículo</h2>
                     <button onClick={() => setVehicleModalOpen(true)} className="flex items-center text-sm text-brand-blue font-semibold hover:underline">
                         {ICONS.edit}
                         <span className="ml-1">Editar</span>
                     </button>
                </div>
                <InfoRow label="Tipo" value={driver.vehicle.type} />
                <InfoRow label="Placa" value={driver.vehicle.plate} />
            </div>
            
            {isVehicleModalOpen && <VehicleModal vehicle={driver.vehicle} onClose={() => setVehicleModalOpen(false)} />}
        </div>
    );
};

export default DriverProfile;
