/* eslint-disable no-unused-vars */

const ExpenseSummaryCard = ({
  lable,
  amount,
  icon: Icon,
  colorClass,
  iconColor,
}) => {
  return (
    <div
      className={`${colorClass ? colorClass : 'bg-amber-200'} p-5 rounded-xl flex items-end justify-between cursor-pointer`}
    >
      <div className="col gap-16 md:gap-12">
        <p className="text-sm text-zinc-600 mb-1">{lable}</p>
        <p className="text-2xl font-bold text-zinc-900">{amount}</p>
      </div>

      <div className={`p-2 rounded-full bg-white`}>
        <Icon size={20} className={`${iconColor}`} />
      </div>
    </div>
  );
};

export default ExpenseSummaryCard;
