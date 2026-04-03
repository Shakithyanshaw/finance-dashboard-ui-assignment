/* eslint-disable no-unused-vars */
const EventCard = function ({ time, title, participants, icon: Icon }) {
  return (
    <div className="bg-white/90 p-3 rounded-lg flex items-center  space-x-3 hover:bg-white card-hover cursor-pointer text-zinc-600">
      <div className="size-8 flex items-center justify-center bg-white rounded-full border border-zinc-200 text-zinc-600">
        <Icon size={26} />
      </div>
      <div className="flex-1">
        <p className="text-xs text-zinc-500">{time}</p>
        <p className="text-sm font-medium text-zinc-900 mb-1">{title}</p>

        {participants && (
          <div className="flex -space-x-2 overflow-hidden">
            {Array.from({ length: participants }).map((_, i) => (
              <div
                key={i}
                className="size-6 rounded-full bg-zinc-300 border-2 border-zinc-50 center-item text-xs text-zinc-600"
              >
                A
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
