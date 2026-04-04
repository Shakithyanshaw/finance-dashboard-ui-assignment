import { DollarSign, Lock, User } from 'lucide-react';

const LoginScreen = ({ onLogin }) => {
  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100 px-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-lg xl:max-w-md bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          <div className="bg-zinc-900 p-3 rounded-xl mb-3">
            <DollarSign className="text-white w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 text-center">
            Money Map
          </h1>
          <p className="text-zinc-600 mt-1 text-sm sm:text-base text-center">
            Sign in to manage your budgets.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
          {/* Email/Username */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-medium text-zinc-700"
            >
              Email Address
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={18} className="sm:w-5 sm:h-5" />
              </div>
              <input
                type="email"
                name="email"
                required
                defaultValue="demo@example.com"
                className="block w-full pl-10 pr-3 py-2 sm:py-2.5 border border-zinc-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm sm:text-base font-medium text-zinc-700"
            >
              Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-zinc-400 sm:w-5 sm:h-5" />
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                defaultValue="password123"
                className="block w-full pl-10 pr-3 py-2 sm:py-2.5 border border-zinc-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 sm:py-3 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-zinc-900 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 cursor-pointer transition-colors duration-150 ease-in"
            >
              Sign in to Dashboard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
