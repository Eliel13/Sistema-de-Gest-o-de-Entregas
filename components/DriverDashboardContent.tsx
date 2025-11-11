import React from 'react';
import { Driver, DeliveryStatus } from '../types';
import { DriverPage } from './DriverLayout';
import { MOCK_DELIVERIES } from '../constants';
import Badge from './Badge';

interface DriverDashboardContentProps {
    driver: Driver;
    setActivePage: (page: DriverPage) => void;
}

const DriverDashboardContent: React.FC<DriverDashboardContentProps> = ({ driver, setActivePage }) => {
    const pendingDeliveries = MOCK_DELIVERIES.filter(d => d.driver?.id === driver.id && (d.status === DeliveryStatus.ASSIGNED || d.status === DeliveryStatus.IN_TRANSIT));
    const today = new Date().toISOString().split('T')[0];
    const todayDeliveries = MOCK_DELIVERIES.filter(d => d.driver?.id === driver.id && d.delivery_deadline.startsWith(today));

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-800">Seu Painel de Controle</h1>
                <p className="text-slate-600">Resumo do seu dia e entregas.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white p-4 rounded-xl shadow-md text-center">
                    <p className="text-3xl font-bold text-brand-blue">{pendingDeliveries.length}</p>
                    <h3 className="text-sm font-medium text-slate-600 mt-1">Entregas Pendentes</h3>
                </div>
                 <div className="bg-white p-4 rounded-xl shadow-md text-center">
                    <p className="text-3xl font-bold text-brand-yellow">R$ {driver.accumulatedBonus.toFixed(2)}</p>
                    <h3 className="text-sm font-medium text-slate-600 mt-1">Bônus a Receber</h3>
                </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold text-slate-800 mb-3">Entregas de Hoje</h2>
                {todayDeliveries.length > 0 ? (
                    <div className="space-y-3">
                        {todayDeliveries.slice(0, 3).map(delivery => (
                            <div key={delivery.id} onClick={() => setActivePage('deliveries')} className="bg-slate-50 p-4 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
                                <div className="flex justify-between items-start">
                                    <p className="font-semibold text-slate-800">{delivery.customer.name}</p>
                                    <Badge status={delivery.status}/>
                                </div>
                                <p className="text-sm text-slate-600 truncate">{delivery.customer.address}</p>
                                <p className="text-xs text-slate-500 mt-1">Prazo: {new Date(delivery.delivery_deadline).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-slate-500 py-4">
                        Nenhuma entrega agendada para hoje.
                    </div>
                )}
                 <button onClick={() => setActivePage('deliveries')} className="mt-4 w-full text-center text-brand-blue font-semibold hover:underline text-sm p-2">
                    Ver todas as entregas &rarr;
                </button>
            </div>
        </div>
    );
};

export default DriverDashboardContent;