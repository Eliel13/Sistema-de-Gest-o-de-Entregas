import React, { useState } from 'react';
import { MOCK_PRODUCTS, ICONS } from '../constants';
import { Product } from '../types';
import ProductModal from './ProductModal';

const Products: React.FC = () => {
    const [isProductModalOpen, setProductModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleEdit = (product: Product) => {
        setSelectedProduct(product);
        setProductModalOpen(true);
    };

    const handleAddNew = () => {
        setSelectedProduct(null);
        setProductModalOpen(true);
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-slate-800">Catálogo de Produtos</h2>
                <button
                    onClick={handleAddNew}
                    className="flex items-center px-4 py-2 bg-brand-blue text-white rounded-lg hover:bg-blue-700 font-semibold"
                >
                    {ICONS.plus}
                    <span className="ml-2">Novo Produto</span>
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-500">
                    <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                        <tr>
                            <th className="px-6 py-3">Produto</th>
                            <th className="px-6 py-3">SKU</th>
                            <th className="px-6 py-3">Preço Unitário</th>
                            <th className="px-6 py-3">Bônus (%)</th>
                            <th className="px-6 py-3">Unidade</th>
                            <th className="px-6 py-3">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MOCK_PRODUCTS.map(product => (
                            <tr key={product.id} className="bg-white border-b hover:bg-slate-50">
                                <td className="px-6 py-4 font-medium text-slate-900 flex items-center">
                                    <img src={product.photo} alt={product.name} className="w-10 h-10 rounded-md mr-4" />
                                    {product.name}
                                </td>
                                <td className="px-6 py-4">{product.sku}</td>
                                <td className="px-6 py-4">R$ {product.price.toFixed(2)}</td>
                                <td className="px-6 py-4">{product.reward_pct.toFixed(2)}%</td>
                                <td className="px-6 py-4">{product.unit}</td>
                                <td className="px-6 py-4">
                                    <button onClick={() => handleEdit(product)} className="font-medium text-brand-blue hover:underline">Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isProductModalOpen && <ProductModal product={selectedProduct} onClose={() => setProductModalOpen(false)} />}
        </div>
    );
};

export default Products;
