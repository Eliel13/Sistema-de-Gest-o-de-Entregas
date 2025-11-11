import React from 'react';
import { MOCK_BONUSES } from '../constants';
import { BonusStatus } from '../types';

const Bonuses: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Bonificações</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-500">
                    <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                        <tr>
                            <th className="px-6 py-3">ID Bônus</th>
                            <th className="px-6 py-3">Entregador</th>
                            <th className="px-6 py-3">ID Entrega</th>
                            <th className="px-6 py-3">Data</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3 text-right">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MOCK_BONUSES.map(bonus => (
                            <tr key={bonus.id} className="bg-white border-b hover:bg-slate-50">
                                <td className="px-6 py-4 font-medium text-slate-900">{bonus.id}</td>
                                <td className="px-6 py-4">{bonus.driver.name}</td>
                                <td className="px-6 py-4">{bonus.delivery.id}</td>
                                <td className="px-6 py-4">{new Date(bonus.date).toLocaleDateString('pt-BR')}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${bonus.status === BonusStatus.PAID ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                        {bonus.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right font-semibold">R$ {bonus.amount.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bonuses;
