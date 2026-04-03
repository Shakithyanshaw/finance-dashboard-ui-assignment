import { useState } from 'react';
import MainContent from './MainContent';
import RightPanel from './RightPanel';
import Sidebar from './Sidebar';

const DashboardLayout = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="flex min-h-screen">
      {/* Left sidebar */}
      <div className="w-64 bg-zinc-50 p-6 shadow-md hidden lg:block">
        <Sidebar />
      </div>
      {/* Main content (Dynamic Area)*/}
      <div className="flex-1 p-2 container md:p-6 lg:p-10 max-w-5xl md:mx-auto">
        {activeTab === 'Dashboard' && <MainContent />}
        {/* Future tabs can be added here with similar conditional rendering */}
      </div>
      {/* Right pannel */}
      <div className="w-80 bg-zinc-100 p-4 shadow-md hidden xl:block">
        <RightPanel />
      </div>
    </div>
  );
};

export default DashboardLayout;
