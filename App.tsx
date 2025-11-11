import React, { useState } from 'react';
import LoginSelector from './components/LoginSelector';
import AdminLogin from './components/AdminLogin';
import AdminRegister from './components/AdminRegister';
import AdminLayout from './components/AdminLayout';
import DriverLogin from './components/DriverLogin';
// FIX: Changed import to be a relative path
import DriverLayout from './components/DriverLayout';
// FIX: Changed import to be a relative path
import { MOCK_DRIVERS } from './constants';
import { Driver } from './types';

export type View = 'loginSelector' | 'adminLogin' | 'adminRegister' | 'driverLogin' | 'adminDashboard' | 'driverDashboard';

const App: React.FC = () => {
  const [view, setView] = useState<View>('loginSelector');
  const [loggedInAdmin, setLoggedInAdmin] = useState(false);
  const [loggedInDriver, setLoggedInDriver] = useState<Driver | null>(null);

  const handleAdminLoginSuccess = () => {
    setLoggedInAdmin(true);
    setView('adminDashboard');
  };

  const handleDriverLoginSuccess = (driver: Driver) => {
    setLoggedInDriver(driver);
    setView('driverDashboard');
  }

  const handleLogout = () => {
    setLoggedInAdmin(false);
    setLoggedInDriver(null);
    setView('loginSelector');
  };

  const renderView = () => {
    if (loggedInAdmin) {
      return <AdminLayout handleLogout={handleLogout} />;
    }
    if (loggedInDriver) {
        return <DriverLayout driver={loggedInDriver} handleLogout={handleLogout} />
    }

    switch (view) {
      case 'adminLogin':
        return <AdminLogin setView={setView} onLoginSuccess={handleAdminLoginSuccess} />;
      case 'adminRegister':
        return <AdminRegister setView={setView} onRegisterSuccess={handleAdminLoginSuccess} />;
      case 'driverLogin':
        return <DriverLogin setView={setView} onLoginSuccess={handleDriverLoginSuccess} drivers={MOCK_DRIVERS} />;
      case 'loginSelector':
      default:
        return <LoginSelector setView={setView} />;
    }
  };

  return (
    <div className="App">
      {renderView()}
    </div>
  );
};

export default App;