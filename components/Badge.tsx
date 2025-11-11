import React from 'react';
import { DeliveryStatus } from '../types';

interface BadgeProps {
  status: DeliveryStatus;
}

const Badge: React.FC<BadgeProps> = ({ status }) => {
  const getBadgeClass = () => {
    switch (status) {
      case DeliveryStatus.DELIVERED:
        return 'bg-green-100 text-green-700';
      case DeliveryStatus.IN_TRANSIT:
        return 'bg-blue-100 text-blue-700';
      case DeliveryStatus.PENDING:
      case DeliveryStatus.ASSIGNED:
        return 'bg-yellow-100 text-yellow-700';
      case DeliveryStatus.FAILED:
      case DeliveryStatus.CANCELED:
        return 'bg-red-100 text-red-700';
      case DeliveryStatus.PARTIAL:
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${getBadgeClass()}`}>
      {status}
    </span>
  );
};

export default Badge;