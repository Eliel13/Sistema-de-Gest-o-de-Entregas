import React from 'react';
import { Driver } from '../types';
// FIX: Changed import to be a relative path
import DriverDashboardContent from './DriverDashboardContent';
// FIX: Changed import to be a relative path
import { DriverPage } from './DriverLayout';

interface DriverDashboardProps {
    driver: Driver;
    setActivePage: (page: DriverPage) => void;
}

const DriverDashboard: React.FC<DriverDashboardProps> = ({ driver, setActivePage }) => {
    return <DriverDashboardContent driver={driver} setActivePage={setActivePage} />;
};

export default DriverDashboard;