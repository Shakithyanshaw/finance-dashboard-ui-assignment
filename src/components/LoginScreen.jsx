import { DollarSign, Lock, User } from 'lucide-react';

const LoginScreen = ({ onLogin }) => {
  //Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl div">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-zinc-900 p-3 rounded-xl mb-3">
            <DollarSign className="text-white" />
          </div>

          <h1 className="text-3xl font-bold text-zinc-900">Money Map</h1>
          <p className="text-zinc-600 mt-1">Sign in to manage your budgets.</p>
        </div>
        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email/Username */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-700"
            >
              Email Address
            </label>

            {/* Input Field */}
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={18} />
              </div>
              <input
                type="email"
                name="email"
                required
                defaultValue="demo@example.com"
                className="block w-full pl-10 pr-3 py-2 border border-zinc-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          </div>
          {/* Password */}
          <div>
            <label
              htmlFor="passwoard"
              className="block text-sm font-medium text-zinc-700"
            >
              Passwoard
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-auto">
                <Lock size={18} className="text-zinc-400" />
              </div>
              {/* Input Field */}
              <input
                type="password"
                name="passwoard"
                id="passwoard"
                required
                defaultValue="password123"
                className="block w-full pl-10 pr-3 py-2 border border-zinc-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 cursor-pointer transition-colors duration-100 ease-in"
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
