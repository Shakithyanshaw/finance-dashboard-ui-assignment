import React, { useState } from 'react';
import { BarChart, Bitcoin, PieChart } from 'lucide-react';

const sampleInvestments = [
  { id: 1, name: 'Apple Stocks', type: 'Stocks', value: 5000 },
  { id: 2, name: 'Tesla Stocks', type: 'Stocks', value: 3000 },
  { id: 3, name: 'Bitcoin', type: 'Crypto', value: 2500 },
  { id: 4, name: 'Ethereum', type: 'Crypto', value: 1500 },
  { id: 5, name: 'Mutual Fund', type: 'Fund', value: 4000 },
];

// Function to return badge colors and icon based on type
const getTypeBadge = (type) => {
  switch (type) {
    case 'Stocks':
      return {
        color: 'bg-green-100 text-green-800',
        icon: <BarChart className="w-4 h-4 inline mr-1" />,
      };
    case 'Crypto':
      return {
        color: 'bg-yellow-100 text-yellow-800',
        icon: <Bitcoin className="w-4 h-4 inline mr-1" />,
      };
    case 'Fund':
      return {
        color: 'bg-blue-100 text-blue-800',
        icon: <PieChart className="w-4 h-4 inline mr-1" />,
      };
    default:
      return { color: 'bg-zinc-100 text-zinc-800', icon: null };
  }
};

const InvestmentsExamples = () => {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');

  const filteredInvestments = sampleInvestments.filter((inv) => {
    const matchesSearch = inv.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === 'All' || inv.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-zinc-900">
        Investments
      </h1>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <input
          type="text"
          placeholder="Search investment..."
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
          <option value="Stocks">Stocks</option>
          <option value="Crypto">Crypto</option>
          <option value="Fund">Fund</option>
        </select>
      </div>

      {/* Investments Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-zinc-200 border border-zinc-200 rounded-lg">
          <thead className="bg-zinc-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-zinc-700">
                Investment Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-zinc-700">
                Type
              </th>
              <th className="px-4 py-2 text-right text-sm font-medium text-zinc-700">
                Value ($)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            {filteredInvestments.length > 0 ? (
              filteredInvestments.map((inv) => {
                const badge = getTypeBadge(inv.type);
                return (
                  <tr key={inv.id} className="hover:bg-zinc-50">
                    <td className="px-4 py-2 text-sm text-zinc-800">
                      {inv.name}
                    </td>
                    <td className="px-4 py-2 text-sm text-zinc-800">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}
                      >
                        {badge.icon}
                        {inv.type}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm font-medium text-right">
                      {inv.value.toFixed(2)}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={3} className="px-4 py-6 text-center text-zinc-500">
                  No investments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvestmentsExamples;
