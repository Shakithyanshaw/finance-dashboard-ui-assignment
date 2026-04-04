const AccountCard = ({
  name,
  description,
  Icon,
  iconColor,
  actionLabel,
  actionColor,
  bgColor,
}) => {
  return (
    <div className="flex items-center  cursor-pointer justify-between bg-white p-4 rounded-xl card-hover">
      <div className="flex items-center space-x-3">
        <div
          className={`w-9 h-9 ${bgColor ? bgColor : 'bg-zinc-200'} rounded-full center-item overflow-hidden`}
        >
          {Icon ? (
            <Icon className={`${iconColor}`} />
          ) : (
            <span className="text-sm text-zinc-500 center-item h-full">DP</span>
          )}
        </div>

        <div>
          <p className="text-sm font-medium text-zinc-900">{name}</p>
          <p className="text-xs text-zinc-600">{description}</p>
        </div>
      </div>
      {actionLabel && (
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${actionColor}`}
        >
          {actionLabel}
        </span>
      )}
    </div>
  );
};

export default AccountCard;
