import React, { useState } from 'react';
import { Driver } from '../types';
import DriverHeader from './DriverHeader';
import BottomNav from './BottomNav';
import DriverDashboard from './DriverDashboard';
import DriverDeliveries from './DriverDeliveries';
import DriverBonuses from './DriverBonuses';
import DriverProfile from './DriverProfile';

export type DriverPage = 'dashboard' | 'deliveries' | 'bonuses' | 'profile';

interface DriverLayoutProps {
    driver: Driver;
    handleLogout: () => void;
}

const DriverLayout: React.FC<DriverLayoutProps> = ({ driver, handleLogout }) => {
    const [activePage, setActivePage] = useState<DriverPage>('dashboard');

    const renderContent = () => {
        switch (activePage) {
            case 'dashboard':
                return <DriverDashboard driver={driver} setActivePage={setActivePage} />;
            case 'deliveries':
                return <DriverDeliveries driver={driver} />;
            case 'bonuses':
                return <DriverBonuses driver={driver} />;
            case 'profile':
                return <DriverProfile driver={driver} />;
            default:
                return <DriverDashboard driver={driver} setActivePage={setActivePage} />;
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100 font-sans">
            <DriverHeader driver={driver} handleLogout={handleLogout} />
            <main className="flex-1 overflow-y-auto p-4 pb-20">
                {renderContent()}
            </main>
            <BottomNav activePage={activePage} setActivePage={setActivePage} />
        </div>
    );
};

export default DriverLayout;
