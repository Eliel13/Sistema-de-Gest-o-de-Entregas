import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  onClick?: () => void;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, onClick }) => {
  const isClickable = !!onClick;
  
  const cardClasses = `
    bg-white p-6 rounded-xl shadow-md
    ${isClickable ? 'cursor-pointer hover:shadow-lg hover:ring-2 hover:ring-brand-blue/50 transition-all duration-300' : ''}
  `;

  return (
    <div className={cardClasses} onClick={onClick}>
      <h4 className="text-slate-500 font-medium text-sm">{title}</h4>
      <p className="text-3xl font-bold text-slate-800 mt-2">{value}</p>
    </div>
  );
};

export default StatCard;