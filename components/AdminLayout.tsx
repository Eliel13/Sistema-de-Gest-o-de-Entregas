import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard';
import Deliveries from './Deliveries';
import Drivers from './Drivers';
import Products from './Products';
import Bonuses from './Bonuses';
import Settings from './Settings';

export type Page = 'dashboard' | 'deliveries' | 'drivers' | 'products' | 'bonuses' | 'settings';

interface AdminLayoutProps {
    handleLogout: () => void;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ handleLogout }) => {
  const [activePage, setActivePage] = useState<Page>('dashboard');

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard setActivePage={setActivePage} />;
      case 'deliveries':
        return <Deliveries />;
      case 'drivers':
        return <Drivers />;
      case 'products':
        return <Products />;
      case 'bonuses':
        return <Bonuses />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header handleLogout={handleLogout} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;