import {
  Bell,
  Droplet,
  ForkKnife,
  Goal,
  Landmark,
  Search,
  ShoppingBasket,
  TrendingDown,
} from 'lucide-react';
import ExpenseSummaryCard from './UI/ExpenseSummaryCard';
import ListItemCard from './UI/ListItemCard';
import AccountCard from './UI/AccountCard';

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
      <div className="grid md:grid-cols-3 gap-6">
        <ExpenseSummaryCard
          lable="Spent This Month"
          amount="$1,850"
          icon={TrendingDown}
          colorClass="bg-pink-200"
          iconColor="text-red-500"
        />
        <ExpenseSummaryCard
          lable="Spent This Month"
          amount="$450"
          icon={Goal}
          colorClass="bg-blue-200"
          iconColor="text-emerald-500"
        />
        <ExpenseSummaryCard
          lable="Highest Category"
          amount="Groceries"
          icon={Landmark}
          colorClass="bg-emerald-200"
          iconColor="text-orange-500"
        />
      </div>
      {/*Recent Transaction & Budgets*/}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-6">
          <h3 className="text-lg tracking-tight font-bold text-zinc-900 mb-4">
            Recend Spending
          </h3>

          <div className="space-y-3">
            <ListItemCard
              title="Supermarket Run"
              subTitle="Groceries"
              value="-$85.00"
              valueColor="text-red-600"
              src="/user-2.png"
            />
            <ListItemCard
              title="Online Subscription"
              subTitle="Software"
              value="-$19.99"
              valueColor="text-red-600"
              src="/user-3.png"
            />
            <ListItemCard
              title="ATM Withdrawal"
              subTitle="Cash"
              value="-$100.00"
              valueColor="text-red-600"
              src="/user-4.png"
            />
            <ListItemCard
              title="Paycheck Deposit"
              subTitle="Income"
              value="+$3,500.00"
              valueColor="text-green-600"
              src="/user-5.png"
            />
          </div>
        </div>
        {/*Budgets*/}
        <div className="p-6">
          <h3 className="text-lg tracking-tight font-bold text-zinc-900 mb-4 flex justify-between items-center">
            My Budgets
            <button className="text-sm font-normal cursor-pointer text-blue-600 hover:underline">
              Manage All
            </button>
          </h3>
          <div className="space-y-3">
            <AccountCard
              name="Groceries"
              description="Spending: $450/ $600"
              actionLabel="75% Used"
              actionColor="bg-red-100 text-red-700"
              Icon={ShoppingBasket}
              bgColor="bg-emerald-100"
              iconColor="text-emerald-700"
            />
            <AccountCard
              name="Restaurants"
              description="Spending: $120/ $300"
              actionLabel="40% Used"
              actionColor="bg-green-100 text-green-700"
              Icon={ForkKnife}
              bgColor="bg-amber-100"
              iconColor="text-amber-700"
            />
            <AccountCard
              name="Utilities"
              description="Spending: $200/ $200"
              actionLabel="100% Used"
              actionColor="bg-red-500 text-white"
              Icon={Droplet}
              bgColor="bg-blue-100"
              iconColor="text-blue-700"
            />
            <AccountCard
              name="Entertainment"
              description="Spending: $50/ $150"
              actionLabel="33% Used"
              actionColor="bg-blue-100 text-blue-700"
              Icon={ForkKnife}
              bgColor="bg-pink-100"
              iconColor="text-pink-700"
            />
          </div>
        </div>
      </div>

      {/*Shedule Payments*/}
    </div>
  );
};

export default MainContent;
