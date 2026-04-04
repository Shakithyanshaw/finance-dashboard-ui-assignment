import React from 'react';

const sampleNotifications = [
  { id: 1, title: 'Payment Received', type: 'Info', date: '2026-04-01' },
  {
    id: 2,
    title: 'Subscription Expiring',
    type: 'Warning',
    date: '2026-04-03',
  },
  {
    id: 3,
    title: 'New Investment Opportunity',
    type: 'Info',
    date: '2026-04-02',
  },
  { id: 4, title: 'Failed Transaction', type: 'Error', date: '2026-04-04' },
  { id: 5, title: 'Profile Updated', type: 'Info', date: '2026-04-05' },
  { id: 6, title: 'Refund Processed', type: 'Info', date: '2026-04-06' },
];

// Function to return Tailwind color classes based on type
const getCardColor = (type) => {
  switch (type) {
    case 'Info':
      return 'bg-blue-50 border-blue-200';
    case 'Warning':
      return 'bg-yellow-50 border-yellow-200';
    case 'Error':
      return 'bg-red-50 border-red-200';
    default:
      return 'bg-white border-zinc-200';
  }
};

const NotificationsExaples = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 overflow-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-zinc-900">
        Notifications
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleNotifications.map((n) => (
          <div
            key={n.id}
            className={`p-4 rounded-xl shadow hover:shadow-md transition-shadow duration-200 border ${getCardColor(
              n.type,
            )}`}
          >
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-2">
              {n.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 mb-1">
              Type: <span className="font-medium">{n.type}</span>
            </p>
            <p className="text-sm sm:text-base text-zinc-700">
              Date: <span className="font-medium">{n.date}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsExaples;
