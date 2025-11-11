import React, { useState } from 'react';
// FIX: Changed import to be a relative path
import { ICONS } from '../constants';

interface HeaderProps {
    handleLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex items-center justify-between h-20 px-8 bg-white shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-800">Painel do Gestor</h2>
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center space-x-2 focus:outline-none p-1 rounded-full"
        >
          <img src="https://picsum.photos/seed/manager/40/40" alt="Admin" className="w-10 h-10 rounded-full" />
          <span className="hidden md:inline text-slate-700 font-medium">Admin</span>
          <span className="hidden md:inline text-slate-500">{ICONS.chevronDown}</span>
        </button>
        {dropdownOpen && (
          <div 
            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-1 z-20 ring-1 ring-black ring-opacity-5"
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a href="#" className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
              <span className="mr-3 text-slate-500">{ICONS.user}</span>
              Perfil
            </a>
            <button onClick={handleLogout} className="w-full text-left flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
               <span className="mr-3 text-slate-500">{ICONS.logout}</span>
              Sair
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;