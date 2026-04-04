import React, { useState } from 'react';

const sampleHelpData = [
  {
    id: 1,
    question: 'How to reset my password?',
    category: 'Account',
    status: 'Open',
  },
  {
    id: 2,
    question: 'How to update payment method?',
    category: 'Billing',
    status: 'Closed',
  },
  {
    id: 3,
    question: 'App crashes on login',
    category: 'Technical',
    status: 'Open',
  },
  {
    id: 4,
    question: 'How to view transaction history?',
    category: 'Account',
    status: 'Closed',
  },
  {
    id: 5,
    question: 'Refund request procedure',
    category: 'Billing',
    status: 'Open',
  },
];

const HelpSupportExample = () => {
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const filteredData = sampleHelpData.filter((item) => {
    const matchesSearch = item.question
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      filterCategory === 'All' || item.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-zinc-900">
        Help & Support
      </h1>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <input
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 px-3 py-2 border border-zinc-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
        />
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="w-full sm:w-1/4 px-3 py-2 border border-zinc-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
        >
          <option value="All">All Categories</option>
          <option value="Account">Account</option>
          <option value="Billing">Billing</option>
          <option value="Technical">Technical</option>
        </select>
      </div>

      {/* Help & Support Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-zinc-200 border border-zinc-200 rounded-lg">
          <thead className="bg-zinc-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-zinc-700">
                Question
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-zinc-700">
                Category
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-zinc-700">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-zinc-50">
                  <td className="px-4 py-2 text-sm text-zinc-800">
                    {item.question}
                  </td>
                  <td className="px-4 py-2 text-sm text-zinc-800">
                    {item.category}
                  </td>
                  <td className="px-4 py-2 text-sm text-zinc-800">
                    {item.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="px-4 py-6 text-center text-zinc-500">
                  No questions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HelpSupportExample;
