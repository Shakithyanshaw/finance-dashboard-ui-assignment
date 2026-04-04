import { Bell, Search } from 'lucide-react';

const MainContent = () => {
  return (
    <div className=" flex-1 space-y-8">
      {/*Greeting*/}
      <div className="p-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl tracking-tighter font-bold text-zinc-900 mb-1">
            Welcom back, Jane
          </h2>
          <p className="text-sm text-zinc-600">
            Track your spending, manage your budgets and control tour cask flow.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 cursor-pointer rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors">
            <Search size={18} className="text-zinc-600" />
          </button>
          <button className="p-2 cursor-pointer rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors">
            <Bell size={18} className="text-zinc-600" />
          </button>
        </div>
      </div>
      {/*Expence Summary Cards*/}

      {/*Recent T ransaction & Budgets*/}

      {/*Shedule Payments*/}
    </div>
  );
};

export default MainContent;
