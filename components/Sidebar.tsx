import React from 'react';
// FIX: Changed import to be a relative path
import { ICONS } from '../constants';
import { Page } from './AdminLayout';

interface SidebarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full px-6 py-3 text-sm font-medium transition-colors duration-200 ease-in-out relative ${
      isActive
        ? 'bg-slate-700 text-white'
        : 'text-slate-400 hover:bg-slate-700 hover:text-white'
    }`}
  >
    {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue rounded-r-full"></div>}
    <span className="mr-4">{icon}</span>
    {label}
  </button>
);

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage }) => {
  return (
    <div className="hidden md:flex flex-col w-64 bg-slate-800 text-white">
      <div className="flex items-center justify-center h-20 border-b border-slate-700">
        <div className="flex items-center text-slate-100">
            {React.cloneElement(ICONS.truck, { className: "h-8 w-8 text-white" })}
            <h1 className="text-2xl font-bold ml-2 tracking-wider">EntregaPro</h1>
        </div>
      </div>
      <nav className="flex-1 mt-6">
        <NavItem icon={ICONS.dashboard} label="Dashboard" isActive={activePage === 'dashboard'} onClick={() => setActivePage('dashboard')} />
        <NavItem icon={ICONS.truck} label="Entregas" isActive={activePage === 'deliveries'} onClick={() => setActivePage('deliveries')} />
        <NavItem icon={ICONS.users} label="Entregadores" isActive={activePage === 'drivers'} onClick={() => setActivePage('drivers')} />
        <NavItem icon={ICONS.box} label="Produtos" isActive={activePage === 'products'} onClick={() => setActivePage('products')} />
        <NavItem icon={ICONS.dollarSign} label="Bonificações" isActive={activePage === 'bonuses'} onClick={() => setActivePage('bonuses')} />
      </nav>
      <div className="p-4 border-t border-slate-700">
        <NavItem icon={ICONS.settings} label="Configurações" isActive={activePage === 'settings'} onClick={() => setActivePage('settings')} />
      </div>
    </div>
  );
};

export default Sidebar;