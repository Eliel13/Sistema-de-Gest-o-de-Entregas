import React, { useState } from 'react';
import StatCard from './StatCard';
import DeliveriesChart from './DeliveriesChart';
import DriverRankingChart from './DriverRankingChart';
// FIX: Changed import to be a relative path
import { MOCK_DELIVERIES, MOCK_DRIVERS } from '../constants';
import { DeliveryStatus } from '../types';
import { Page } from './AdminLayout';

const generateChartData = (days: number) => {
    const data = [];
    const today = new Date();
    for (let i = days - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dayName = date.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '');
        const deliveries = Math.floor(Math.random() * 10) + 1; // Mock data
        data.push({ name: dayName.charAt(0).toUpperCase() + dayName.slice(1), Entregas: deliveries });
    }
    return data;
}

const Dashboard: React.FC<{ setActivePage: (page: Page) => void }> = ({ setActivePage }) => {
  const [timePeriod, setTimePeriod] = useState<'7d' | '30d' | '2m'>('7d');

  const totalDeliveries = MOCK_DELIVERIES.length;
  const pendingDeliveries = MOCK_DELIVERIES.filter(d => d.status === DeliveryStatus.PENDING || d.status === DeliveryStatus.ASSIGNED).length;
  const activeDrivers = MOCK_DRIVERS.filter(d => d.status === 'Ativo').length;
  const totalBonusesToPay = MOCK_DRIVERS.reduce((sum, d) => sum + d.accumulatedBonus, 0);

  const chartData = () => {
      switch (timePeriod) {
          case '7d': return generateChartData(7);
          case '30d': return generateChartData(30);
          case '2m': return generateChartData(60);
          default: return [];
      }
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total de Entregas (mês)" value={totalDeliveries} onClick={() => setActivePage('deliveries')} />
        <StatCard title="Entregas Pendentes" value={pendingDeliveries} onClick={() => setActivePage('deliveries')} />
        <StatCard title="Entregadores Ativos" value={activeDrivers} onClick={() => setActivePage('drivers')} />
        <StatCard title="Bonificações Pendentes" value={`R$ ${totalBonusesToPay.toFixed(2)}`} onClick={() => setActivePage('bonuses')}/>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-slate-800">Visão Geral das Entregas</h3>
            <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg">
              <button onClick={() => setTimePeriod('7d')} className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${timePeriod === '7d' ? 'bg-white text-brand-blue shadow' : 'bg-transparent text-slate-600'}`}>7 Dias</button>
              <button onClick={() => setTimePeriod('30d')} className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${timePeriod === '30d' ? 'bg-white text-brand-blue shadow' : 'bg-transparent text-slate-600'}`}>30 Dias</button>
              <button onClick={() => setTimePeriod('2m')} className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${timePeriod === '2m' ? 'bg-white text-brand-blue shadow' : 'bg-transparent text-slate-600'}`}>2 Meses</button>
            </div>
          </div>
          <DeliveriesChart data={chartData()}/>
        </div>
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
           <h3 className="text-xl font-semibold text-slate-800 mb-4">Ranking de Entregadores</h3>
           <DriverRankingChart deliveries={MOCK_DELIVERIES}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;