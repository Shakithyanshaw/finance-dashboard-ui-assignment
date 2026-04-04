import React, { useState } from 'react';

const SettingsExample = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [username, setUsername] = useState('John Doe');

  const handleSave = () => {
    alert('Settings saved!');
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-zinc-900">
        Settings
      </h1>

      {/* Account Settings */}
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-zinc-800">Account</h2>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <label className="text-zinc-700 mb-2 sm:mb-0">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full sm:w-1/2 px-3 py-2 border border-zinc-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-zinc-700">Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="w-5 h-5 text-blue-600 border-zinc-300 rounded focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Notifications Settings */}
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-zinc-800">
          Notifications
        </h2>
        <div className="flex items-center justify-between mb-4">
          <span className="text-zinc-700">Email Notifications</span>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
            className="w-5 h-5 text-blue-600 border-zinc-300 rounded focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 text-sm sm:text-base transition-colors duration-150 ease-in"
      >
        Save Settings
      </button>
    </div>
  );
};

export default SettingsExample;
