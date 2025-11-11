import React, { useState } from 'react';
import { Driver, Delivery, DeliveryStatus } from '../types';
import { MOCK_DELIVERIES } from '../constants';
import Badge from './Badge';
import DriverDeliveryDetail from './DriverDeliveryDetail';

interface DriverDeliveriesProps {
    driver: Driver;
}

const DriverDeliveries: React.FC<DriverDeliveriesProps> = ({ driver }) => {
    const [selectedDelivery, setSelectedDelivery] = useState<Delivery | null>(null);
    const driverDeliveries = MOCK_DELIVERIES.filter(d => d.driver?.id === driver.id);

    const activeDeliveries = driverDeliveries.filter(d => d.status === DeliveryStatus.ASSIGNED || d.status === DeliveryStatus.IN_TRANSIT);
    const completedDeliveries = driverDeliveries.filter(d => d.status === DeliveryStatus.DELIVERED || d.status === DeliveryStatus.FAILED || d.status === DeliveryStatus.CANCELED);
    
    if (selectedDelivery) {
        return <DriverDeliveryDetail delivery={selectedDelivery} onBack={() => setSelectedDelivery(null)} />;
    }

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-800">Minhas Entregas</h1>

            <div>
                <h2 className="text-lg font-semibold text-slate-700 mb-3">Ativas</h2>
                <div className="space-y-3">
                    {activeDeliveries.length > 0 ? activeDeliveries.map(delivery => (
                        <div key={delivery.id} onClick={() => setSelectedDelivery(delivery)} className="bg-white p-4 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-semibold text-slate-800">{delivery.customer.name}</p>
                                    <p className="text-sm text-slate-600 truncate">{delivery.customer.address}</p>
                                </div>
                                <Badge status={delivery.status}/>
                            </div>
                             <p className="text-xs text-slate-500 mt-2">Prazo: {new Date(delivery.delivery_deadline).toLocaleString('pt-BR')}</p>
                        </div>
                    )) : <p className="text-slate-500 text-center py-4">Nenhuma entrega ativa.</p>}
                </div>
            </div>

             <div>
                <h2 className="text-lg font-semibold text-slate-700 mb-3">Histórico</h2>
                <div className="space-y-3">
                     {completedDeliveries.length > 0 ? completedDeliveries.map(delivery => (
                        <div key={delivery.id} onClick={() => setSelectedDelivery(delivery)} className="bg-white p-4 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow opacity-80">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-semibold text-slate-800">{delivery.customer.name}</p>
                                    <p className="text-sm text-slate-600 truncate">{delivery.customer.address}</p>
                                </div>
                                <Badge status={delivery.status}/>
                            </div>
                             <p className="text-xs text-slate-500 mt-2">Finalizada em: {new Date(delivery.delivery_deadline).toLocaleDateString('pt-BR')}</p>
                        </div>
                    )) : <p className="text-slate-500 text-center py-4">Nenhum histórico de entrega.</p>}
                </div>
            </div>
        </div>
    );
};

export default DriverDeliveries;
