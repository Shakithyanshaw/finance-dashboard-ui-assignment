import { Banknote, Calendar, CreditCard, MoreHorizontal } from 'lucide-react';
import ProfileAvatar from './UI/ProfileAvatar';
import CalendarDay from './UI/CalendarDay';
import EventCard from './UI/EventCard';

const RightPanel = () => {
  return (
    <div className="space-y-8">
      {/*Profile Card*/}
      <div className="bg-transparent p-6">
        <div className="flex justify-end mb-4">
          <MoreHorizontal size={20} className="text-zinc-500" />
        </div>
        <ProfileAvatar
          src="/user-1.png"
          name="Jane Doe"
          title="Financial Advisor"
        />
      </div>

      {/*Financial Clender*/}
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-zinc-900">My Agenda</h3>
          <button className="text-sm text-blue-600 hover:underline">
            View All
          </button>
        </div>
        {/*Calendar Days*/}
        <div className="grid grid-cols-7 gap-1.5 text-cente mb-6">
          <CalendarDay day="Mon" date="12" />
          <CalendarDay day="Tue" date="13" isActive={true} />
          <CalendarDay day="Wed" date="14" />
          <CalendarDay day="Thu" date="15" />
          <CalendarDay day="Fri" date="17" />
          <CalendarDay day="Sat" date="18" />
          <CalendarDay day="Sun" date="19" />
        </div>
      </div>

      {/*Upcomming Evevt*/}

      <div className="space-y-4">
        <EventCard
          time="12.30-13:30"
          title="Quartely Review With J.Smith"
          participants={2}
          icon={Calendar}
        />
        <EventCard
          time="14.30-15:45"
          title="Payment Reminder: Uitility Bill"
          icon={CreditCard}
        />
        <EventCard
          time="16.30-17:00"
          title="Investment Call: New Portfolio"
          icon={Banknote}
        />
        <EventCard
          time="18.30-19:00"
          title="Meeting with S.Green"
          participants={1}
          icon={Calendar}
        />
      </div>
      <button className="w-full mt-6 bg-zinc-50 border border-zinc-300 text-zinc-800 cursor-pointer duration-100 se-in hover:shadow-xl text-sm py-3 rounded-lg hover:bg-zinc-200 transition-colors">
        All Comming Events
      </button>
    </div>
  );
};

export default RightPanel;
