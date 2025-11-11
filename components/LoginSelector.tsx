import React from 'react';
// FIX: Changed import to be a relative path
import { View } from '../App';
// FIX: Changed import to be a relative path
import { ICONS } from '../constants';

const LoginSelector: React.FC<{ setView: (view: View) => void }> = ({ setView }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="w-full max-w-sm p-8 space-y-8 bg-white rounded-2xl shadow-lg text-center">
        <div className="flex justify-center items-center">
          {React.cloneElement(ICONS.truck, { className: "h-10 w-10 text-brand-blue" })}
          <h1 className="text-3xl font-bold ml-2 text-slate-800">EntregaPro</h1>
        </div>
        <p className="text-slate-600">Selecione o tipo de acesso para continuar</p>
        <div className="space-y-4 pt-4">
          <button
            onClick={() => setView('adminLogin')}
            className="w-full px-4 py-3 font-semibold text-white bg-brand-blue rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            Acessar como Administrador
          </button>
          <button
            onClick={() => setView('driverLogin')}
            className="w-full px-4 py-3 font-semibold text-brand-blue bg-white border-2 border-brand-blue rounded-lg hover:bg-blue-50 transition-colors duration-300"
          >
            Acessar como Entregador
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSelector;