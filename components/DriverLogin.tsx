import React, { useState } from 'react';
import { View } from '../App';
import { ICONS } from '../constants';
import { Driver } from '../types';

interface DriverLoginProps {
  setView: (view: View) => void;
  onLoginSuccess: (driver: Driver) => void;
  drivers: Driver[];
}

const DriverLogin: React.FC<DriverLoginProps> = ({ setView, onLoginSuccess, drivers }) => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const driver = drivers.find(d => d.cpf === cpf);
    
    if (driver) {
      // Convert YYYY-MM-DD from mock data to DDMMYYYY for password check
      const expectedPassword = driver.dateOfBirth.split('-').reverse().join('');
      if (password === expectedPassword) {
        setError('');
        onLoginSuccess(driver);
      } else {
        setError('CPF ou senha inválidos.');
      }
    } else {
      setError('CPF ou senha inválidos.');
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
            <h2 className="mt-4 text-2xl font-bold text-slate-700">Login do Entregador</h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="cpf" className="text-sm font-medium text-slate-700 block mb-2">CPF</label>
            <input 
              type="text" 
              id="cpf" 
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue" 
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="000.000.000-00"
              required 
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-slate-700 block mb-2">Senha (Data de Nascimento)</label>
            <input 
              type="password" 
              id="password" 
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="DDMMYYYY"
              required 
            />
          </div>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          <button type="submit" className="w-full px-4 py-2.5 font-semibold text-white bg-brand-blue rounded-lg hover:bg-blue-700 shadow-sm hover:shadow-md transition-all">
            Entrar
          </button>
        </form>
        <div className="text-sm text-center space-x-4">
            <button className="font-medium text-slate-500 hover:underline">Esqueci minha senha</button>
            <button className="font-medium text-slate-500 hover:underline">Ajuda</button>
        </div>
         <div className="text-center text-sm text-slate-600">
           <button onClick={() => setView('loginSelector')} className="mt-2 font-medium text-slate-500 hover:underline">
                &larr; Voltar
            </button>
        </div>
      </div>
    </div>
  );
};

export default DriverLogin;