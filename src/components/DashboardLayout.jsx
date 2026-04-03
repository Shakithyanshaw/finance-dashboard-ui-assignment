import { useState } from 'react';
import MainContent from './MainContent';
import RightPanel from './RightPanel';
import Sidebar from './Sidebar';
import AccountsExample from './AccountsExample';
import HelpSupportExample from './HelpSupportExample';
import SettingsExample from './SettingsExample';
import TransactionsExamples from './TransactionsExamples';
import InvestmentsExamples from './InvestmentsExamples';
import NotificationsExaples from './NotificationsExaples';

const DashboardLayout = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="flex min-h-screen">
      {/* Left sidebar */}
      <div className="w-64 bg-zinc-50 p-6 shadow-md hidden lg:block">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onLogout={onLogout}
        />
      </div>
      {/* Main content (Dynamic Area)*/}
      <div className="flex-1 p-2 container md:p-6 lg:p-10 max-w-5xl md:mx-auto">
        {activeTab === 'Dashboard' && <MainContent />}
        {activeTab === 'Accounts' && <AccountsExample />}
        {activeTab === 'Transactions' && <TransactionsExamples />}
        {activeTab === 'Investments' && <InvestmentsExamples />}
        {activeTab === 'Notifications' && <NotificationsExaples />}
        {activeTab === 'Settings' && <SettingsExample />}
        {activeTab === 'Help & Support' && <HelpSupportExample />}
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
