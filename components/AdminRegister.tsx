import React from 'react';
// FIX: Changed import to be a relative path
import { View } from '../App';
// FIX: Changed import to be a relative path
import { ICONS } from '../constants';

interface AdminRegisterProps {
  setView: (view: View) => void;
  onRegisterSuccess: () => void;
}

const AdminRegister: React.FC<AdminRegisterProps> = ({ setView, onRegisterSuccess }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle registration logic
    onRegisterSuccess();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
            <div className="flex justify-center items-center">
                {ICONS.truck}
                <h1 className="text-3xl font-bold ml-2 text-gray-800">EntregaPro</h1>
            </div>
            <h2 className="mt-2 text-2xl font-bold text-gray-700">Cadastro de Administrador</h2>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Nome Completo</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Email</label>
            <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Telefone</label>
            <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Senha</label>
            <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Confirmar Senha</label>
            <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
          </div>
          <button type="submit" className="w-full px-4 py-2 font-semibold text-white bg-brand-blue rounded-lg hover:bg-blue-700">
            Cadastrar
          </button>
        </form>
         <div className="text-center text-sm text-gray-600">
            <p>Já tem uma conta?{' '}
                <button onClick={() => setView('adminLogin')} className="font-medium text-brand-blue hover:underline">
                    Faça login
                </button>
            </p>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;