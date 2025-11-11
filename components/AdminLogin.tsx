import React, { useState } from 'react';
// FIX: Changed import to be a relative path
import { View } from '../App';
// FIX: Changed import to be a relative path
import { ICONS } from '../constants';

const AdminLogin: React.FC<{ setView: (view: View) => void; onLoginSuccess: () => void; }> = ({ setView, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@entregapro.com' && password === 'password123') {
      setError('');
      onLoginSuccess();
    } else {
      setError('Email ou senha inválidos.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <div className="text-center">
            <div className="flex justify-center items-center">
                {React.cloneElement(ICONS.truck, { className: "h-10 w-10 text-brand-blue" })}
                <h1 className="text-3xl font-bold ml-2 text-slate-800">EntregaPro</h1>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-slate-700">Login do Administrador</h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-slate-700 block mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-slate-700 block mb-2">Senha</label>
            <input 
              type="password" 
              id="password" 
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          <button type="submit" className="w-full px-4 py-2.5 font-semibold text-white bg-brand-blue rounded-lg hover:bg-blue-700 shadow-sm hover:shadow-md transition-all">
            Entrar
          </button>
        </form>
        <div className="text-center text-sm text-slate-600">
          <p>Não tem uma conta?{' '}
            <button onClick={() => setView('adminRegister')} className="font-medium text-brand-blue hover:underline">
                Crie uma conta
            </button>
          </p>
           <button onClick={() => setView('loginSelector')} className="mt-4 font-medium text-slate-500 hover:underline">
                &larr; Voltar
            </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;