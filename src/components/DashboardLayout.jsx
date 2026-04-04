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

  // Drawer states for mobile
  const [showSidebar, setShowSidebar] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-white shadow p-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">{activeTab}</h2>
        <button
          onClick={() => setShowSidebar(true)}
          className="bg-zinc-900 text-white px-3 py-1 rounded"
        >
          Menu
        </button>
        <button
          onClick={() => setShowProfile(true)}
          className="bg-zinc-200 px-3 py-1 rounded"
        >
          Profile
        </button>
      </div>

      {/* Overlay */}
      {(showSidebar || showProfile) && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => {
            setShowSidebar(false);
            setShowProfile(false);
          }}
        />
      )}

      {/* Sidebar - LEFT */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-zinc-50 p-6 shadow-md z-40
          transform transition-transform duration-300
          ${showSidebar ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:block
          flex-shrink-0 overflow-auto
        `}
      >
        <button
          onClick={() => setShowSidebar(false)}
          className="lg:hidden mb-4 text-sm text-red-500"
        >
          Close
        </button>
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onLogout={onLogout}
          setShowSidebar={setShowSidebar}
        />
      </div>

      {/* Middle Content */}
      <div className="flex-1 h-full overflow-auto p-2 md:p-6 lg:p-10 pt-20 lg:pt-0">
        {activeTab === 'Dashboard' && <MainContent />}
        {activeTab === 'Accounts' && <AccountsExample />}
        {activeTab === 'Transactions' && <TransactionsExamples />}
        {activeTab === 'Investments' && <InvestmentsExamples />}
        {activeTab === 'Notifications' && <NotificationsExaples />}
        {activeTab === 'Settings' && <SettingsExample />}
        {activeTab === 'Help & Support' && <HelpSupportExample />}
      </div>

      {/* Profile Panel - RIGHT */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80 bg-zinc-100 p-4 shadow-md z-40
          transform transition-transform duration-300
          ${showProfile ? 'translate-x-0' : 'translate-x-full'}
          xl:translate-x-0 xl:static xl:flex-shrink-0
          overflow-auto
        `}
      >
        <button
          onClick={() => setShowProfile(false)}
          className="xl:hidden mb-4 text-sm text-red-500"
        >
          Close
        </button>
        <RightPanel />
      </div>
    </div>
  );
};

export default DashboardLayout;
