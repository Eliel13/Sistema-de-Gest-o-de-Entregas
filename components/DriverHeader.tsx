import React from 'react';
import { Driver } from '../types';
import { ICONS } from '../constants';

interface DriverHeaderProps {
    driver: Driver;
    handleLogout: () => void;
}

const DriverHeader: React.FC<DriverHeaderProps> = ({ driver, handleLogout }) => {
    return (
        <header className="flex items-center justify-between p-4 bg-white text-slate-800 shadow-sm sticky top-0 z-10">
            <div className="flex items-center">
                 {React.cloneElement(ICONS.truck, { className: "h-8 w-8 text-brand-blue" })}
                <h1 className="text-xl font-bold ml-2">EntregaPro</h1>
            </div>
            <div className="flex items-center">
                <span className="mr-4 text-sm font-medium">Olá, {driver.name.split(' ')[0]}</span>
                <button onClick={handleLogout} className="focus:outline-none text-slate-500 hover:text-brand-red">
                    {React.cloneElement(ICONS.logout, {className: "h-6 w-6"})}
                </button>
            </div>
        </header>
    );
};

export default DriverHeader;