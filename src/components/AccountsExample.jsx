import React, { useState } from 'react';

const sampleAccounts = [
  { id: 1, name: 'Checking Account', type: 'Bank', balance: 1200.5 },
  { id: 2, name: 'Savings Account', type: 'Bank', balance: 5400 },
  { id: 3, name: 'Credit Card', type: 'Card', balance: -350.75 },
  { id: 4, name: 'Investment Account', type: 'Investment', balance: 15000 },
  { id: 5, name: 'Cash Wallet', type: 'Cash', balance: 250 },
];

const AccountsExample = () => {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');

  const filteredAccounts = sampleAccounts.filter((acc) => {
    const matchesSearch = acc.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === 'All' || acc.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-zinc-900">
        Accounts
      </h1>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <input
          type="text"
          placeholder="Search account..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 px-3 py-2 border border-zinc-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="w-full sm:w-1/4 px-3 py-2 border border-zinc-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
        >
          <option value="All">All Types</option>
          <option value="Bank">Bank</option>
          <option value="Card">Card</option>
          <option value="Investment">Investment</option>
          <option value="Cash">Cash</option>
        </select>
      </div>

      {/* Accounts Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-zinc-200 border border-zinc-200 rounded-lg">
          <thead className="bg-zinc-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-zinc-700">
                Account Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-zinc-700">
                Type
              </th>
              <th className="px-4 py-2 text-right text-sm font-medium text-zinc-700">
                Balance ($)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            {filteredAccounts.length > 0 ? (
              filteredAccounts.map((acc) => (
                <tr key={acc.id} className="hover:bg-zinc-50">
                  <td className="px-4 py-2 text-sm text-zinc-800">
                    {acc.name}
                  </td>
                  <td className="px-4 py-2 text-sm text-zinc-800">
                    {acc.type}
                  </td>
                  <td
                    className={`px-4 py-2 text-sm font-medium text-right ${
                      acc.balance >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {acc.balance.toFixed(2)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="px-4 py-6 text-center text-zinc-500">
                  No accounts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountsExample;
