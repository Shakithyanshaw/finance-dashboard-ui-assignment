import { DollarSign } from 'lucide-react';
import { tabs } from '../assets/data';
import Navitem from './UI/Navitem';

const Sidebar = ({ activeTab, setActiveTab, onLogout, setShowSidebar }) => {
  const handleClick = (tabName) => {
    setActiveTab(tabName);

    // ✅ close sidebar on mobile
    if (setShowSidebar) {
      setShowSidebar(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 mb-8 group cursor-pointer">
        <div className="bg-zinc-200 p-2 rounded-lg">
          <DollarSign size={24} className="text-zinc-700" />
        </div>
        <span className="text-lg tracking-tight font-bold text-zinc-900">
          Money Map{' '}
        </span>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-2">
        {tabs.map((tab) => (
          <Navitem
            key={tab.key}
            activeTab={activeTab}
            onTabClick={handleClick}
            {...tab}
          />
        ))}
      </nav>

      {/* Premium Upsell Card */}
      <div className="mt-auto pt-6 border-t border-zinc-100">
        {/* Logout Button */}
        <button
          onClick={() => {
            onLogout();
            if (setShowSidebar) setShowSidebar(false);
          }}
          className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg text-red-600 bg-red-50 hover:bg-red-100 transition-colors cursor-pointer"
        >
          Logout
        </button>
        {/* Premium Upsell */}
        <div className="mt-4 bg-zinc-100 p-4 rounded-lg text-center">
          <div className="bg-green-100 p-3 rounded-full inline-flex">
            <DollarSign size={24} className="text-gray-600" />
          </div>
          <p className="text-sm font-semibold text-zinc-900">Unlock Premium</p>
          <p className="text-xs text-zinc-600 mb-3">$9.99/month</p>
          <button className="w-full bg-zinc-900 text-white text-sm py-2 rounded-lg hover:bg-zinc-700 transition-colors duration-100 cursor-pointer">
            Explore Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
