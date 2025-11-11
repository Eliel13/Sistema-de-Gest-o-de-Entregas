import React, { useState } from 'react';
import { MOCK_DRIVERS, ICONS } from '../constants';
import { Driver, DriverStatus } from '../types';
import NewDriverModal from './NewDriverModal';
import DriverProfileModal from './DriverProfileModal';

const Drivers: React.FC = () => {
    const [isNewDriverModalOpen, setNewDriverModalOpen] = useState(false);
    const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-slate-800">Entregadores</h2>
                <button
                    onClick={() => setNewDriverModalOpen(true)}
                    className="flex items-center px-4 py-2 bg-brand-blue text-white rounded-lg hover:bg-blue-700 font-semibold"
                >
                    {ICONS.plus}
                    <span className="ml-2">Novo Entregador</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_DRIVERS.map(driver => (
                    <div key={driver.id} className="bg-white p-5 rounded-xl shadow-md flex flex-col">
                        <div className="flex items-center mb-4">
                            <img src={driver.avatar} alt={driver.name} className="w-16 h-16 rounded-full mr-4" />
                            <div>
                                <h3 className="text-lg font-bold text-slate-800">{driver.name}</h3>
                                <span className={`text-sm font-semibold ${driver.status === DriverStatus.ACTIVE ? 'text-green-600' : 'text-red-600'}`}>
                                    {driver.status}
                                </span>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm text-slate-600 flex-grow">
                            <p><strong>Total de Entregas:</strong> {driver.totalDeliveries}</p>
                            <p><strong>Bônus Acumulado:</strong> R$ {driver.accumulatedBonus.toFixed(2)}</p>
                            <p><strong>Veículo:</strong> {driver.vehicle.type} ({driver.vehicle.plate})</p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-200 flex justify-end">
                            <button onClick={() => setSelectedDriver(driver)} className="font-semibold text-brand-blue hover:underline">Ver Perfil</button>
                        </div>
                    </div>
                ))}
            </div>
            {isNewDriverModalOpen && <NewDriverModal onClose={() => setNewDriverModalOpen(false)} />}
            {selectedDriver && <DriverProfileModal driver={selectedDriver} onClose={() => setSelectedDriver(null)} />}
        </div>
    );
};

export default Drivers;
