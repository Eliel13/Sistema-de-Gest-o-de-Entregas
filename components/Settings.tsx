import React from 'react';

const Settings: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Configurações</h2>
            
            <div className="space-y-8">
                <div>
                    <h3 className="text-lg font-medium text-gray-900">Regras de Bonificação</h3>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="base_bonus" className="block text-sm font-medium text-gray-700">Percentual base de bonificação (%)</label>
                            <input type="number" name="base_bonus" id="base_bonus" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="2.0" />
                        </div>
                         <div>
                            <label htmlFor="calculation_rule" className="block text-sm font-medium text-gray-700">Regra de cálculo</label>
                            <select id="calculation_rule" name="calculation_rule" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                <option>Baseado no valor do produto</option>
                                <option>Baseado no valor total da entrega</option>
                            </select>
                        </div>
                    </div>
                </div>

                 <div>
                    <h3 className="text-lg font-medium text-gray-900">Perfil Administrativo</h3>
                     <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nome</label>
                            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="Admin" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="admin@entregapro.com" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button type="button" className="bg-brand-blue text-white px-6 py-2 rounded-md hover:bg-blue-700">
                        Salvar Alterações
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;