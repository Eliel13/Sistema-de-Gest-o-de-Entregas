import React from 'react';
import { Driver, BonusStatus } from '../types';
// FIX: Changed import to be a relative path
import { MOCK_BONUSES } from '../constants';

interface DriverBonusesProps {
    driver: Driver;
}

const DriverBonuses: React.FC<DriverBonusesProps> = ({ driver }) => {
    const driverBonuses = MOCK_BONUSES.filter(b => b.driver.id === driver.id);
    const totalPaid = driverBonuses.filter(b => b.status === BonusStatus.PAID).reduce((sum, b) => sum + b.amount, 0);
    const totalUnpaid = driverBonuses.filter(b => b.status === BonusStatus.UNPAID).reduce((sum, b) => sum + b.amount, 0);

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Minhas Bonificações</h2>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                     <p className="text-xl font-bold text-brand-green">R$ {totalPaid.toFixed(2)}</p>
                    <h3 className="text-sm font-medium text-gray-600 mt-1">Total Recebido</h3>
                </div>
                 <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <p className="text-xl font-bold text-yellow-600">R$ {totalUnpaid.toFixed(2)}</p>
                    <h3 className="text-sm font-medium text-gray-600 mt-1">Pendente de Pagamento</h3>
                </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">Histórico de Bônus</h3>
                <div className="space-y-3">
                    {driverBonuses.map(bonus => (
                        <div key={bonus.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                            <div>
                                <p className="font-medium text-gray-800">Entrega {bonus.delivery.id}</p>
                                <p className="text-xs text-gray-500">{new Date(bonus.date).toLocaleDateString('pt-BR')}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-gray-900">R$ {bonus.amount.toFixed(2)}</p>
                                <p className={`text-xs font-semibold ${bonus.status === BonusStatus.PAID ? 'text-green-600' : 'text-yellow-600'}`}>{bonus.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DriverBonuses;