import React, { useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const sampleTransactions = [
  {
    id: 1,
    date: '2026-04-01',
    description: 'Grocery Shopping',
    amount: -50.25,
    type: 'Debit',
  },
  {
    id: 2,
    date: '2026-04-02',
    description: 'Salary',
    amount: 2000,
    type: 'Credit',
  },
  {
    id: 3,
    date: '2026-04-03',
    description: 'Electricity Bill',
    amount: -120.5,
    type: 'Debit',
  },
  {
    id: 4,
    date: '2026-04-04',
    description: 'Freelance Payment',
    amount: 450,
    type: 'Credit',
  },
  {
    id: 5,
    date: '2026-04-05',
    description: 'Gym Membership',
    amount: -35,
    type: 'Debit',
  },
];

const TransactionsExamples = () => {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');

  const filteredTransactions = sampleTransactions.filter((tx) => {
    const matchesSearch = tx.description
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesType = filterType === 'All' || tx.type === filterType;
    return matchesSearch && matchesType;
  });

  const getBadgeColor = (type) => {
    return type === 'Credit'
      ? 'bg-green-100 text-green-800'
      : 'bg-red-100 text-red-800';
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 overflow-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-zinc-900">
        Transactions
      </h1>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <input
          type="text"
          placeholder="Search description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 px-3 py-2 border border-zinc-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="w-full sm:w-1/4 px-3 py-2 border border-zinc-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
        >
          <option value="All">All</option>
          <option value="Credit">Credit</option>
          <option value="Debit">Debit</option>
        </select>
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-zinc-200 border border-zinc-200 rounded-lg">
          <thead className="bg-zinc-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-zinc-700">
                Date
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-zinc-700">
                Description
              </th>
              <th className="px-4 py-2 text-right text-sm font-medium text-zinc-700">
                Amount ($)
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-zinc-700">
                Type
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((tx) => (
                <tr
                  key={tx.id}
                  className="hover:bg-zinc-50 transition-colors duration-150"
                >
                  <td className="px-4 py-2 text-sm text-zinc-800">{tx.date}</td>
                  <td className="px-4 py-2 text-sm text-zinc-800">
                    {tx.description}
                  </td>
                  <td
                    className={`px-4 py-2 text-sm font-medium text-right ${tx.type === 'Credit' ? 'text-green-600' : 'text-red-600'}`}
                  >
                    {tx.amount.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 text-sm">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${getBadgeColor(tx.type)}`}
                    >
                      {tx.type === 'Credit' ? (
                        <ArrowUp size={14} />
                      ) : (
                        <ArrowDown size={14} />
                      )}
                      {tx.type}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-zinc-500">
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsExamples;
