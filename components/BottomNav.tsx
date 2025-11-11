import React from 'react';
import { DriverPage } from './DriverLayout';
import { ICONS } from '../constants';

interface BottomNavProps {
    activePage: DriverPage;
    setActivePage: (page: DriverPage) => void;
}

const NavItem: React.FC<{
    icon: React.ReactElement;
    label: string;
    isActive: boolean;
    onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 ${
            isActive ? 'text-brand-blue' : 'text-slate-500 hover:text-brand-blue'
        }`}
    >
        {/* FIX: Cast the icon to React.ReactElement<any> to inform TypeScript that it can accept a className prop, resolving the type error with React.cloneElement. */}
        {React.cloneElement(icon as React.ReactElement<any>, { className: 'h-6 w-6' })}
        <span className={`mt-1 text-xs ${isActive ? 'font-bold' : 'font-medium'}`}>{label}</span>
    </button>
);

const BottomNav: React.FC<BottomNavProps> = ({ activePage, setActivePage }) => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white flex md:hidden z-10 shadow-[0_-2px_5px_-1px_rgba(0,0,0,0.05)]">
            <NavItem
                icon={ICONS.home}
                label="Início"
                isActive={activePage === 'dashboard'}
                onClick={() => setActivePage('dashboard')}
            />
            <NavItem
                icon={ICONS.truck}
                label="Entregas"
                isActive={activePage === 'deliveries'}
                onClick={() => setActivePage('deliveries')}
            />
            <NavItem
                icon={ICONS.dollarSign}
                label="Bônus"
                isActive={activePage === 'bonuses'}
                onClick={() => setActivePage('bonuses')}
            />
            <NavItem
                icon={ICONS.user}
                label="Perfil"
                isActive={activePage === 'profile'}
                onClick={() => setActivePage('profile')}
            />
        </nav>
    );
};

export default BottomNav;
