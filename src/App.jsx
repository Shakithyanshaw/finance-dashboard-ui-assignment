import { useState } from 'react';
import DashboardLayout from './components/DashboardLayout';
import LoginScreen from './components/LoginScreen';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  //Conditional rendering based on login state
  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <DashboardLayout onLogout={handleLogout} />
    </div>
  );
};

export default App;
