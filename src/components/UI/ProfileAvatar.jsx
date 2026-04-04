import { ChevronDown } from 'lucide-react';

const ProfileAvatar = ({ name, title, src }) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-zinc-200 rounded-full overflow-hidden mb-3 flex items-center justify-center text-zinc-500 text-lg">
        {src ? (
          <img src={src} alt="profile-image" className="size-full" />
        ) : (
          'DP'
        )}
      </div>

      <h3 className="text-lg font-bold text-zinc-900">{name}</h3>
      <p className="text-sm text-zinc-600">{title}</p>
      <div className="flex bg-white w-fit mx-auto py-1 px-2 rounded-full items-center justify-center space-x-2 text-sm text-blue-600 mt-2 hover:underline cursor-pointer">
        <span>Avaiable</span>
        <ChevronDown size={16} />
      </div>
    </div>
  );
};

export default ProfileAvatar;
