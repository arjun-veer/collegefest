import { useNavigate } from "react-router-dom";

const Login = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
            Welcome Back 👋
          </h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center mt-4 text-gray-600">
            Don’t have an account?{" "}
            <a href="/signup" className="text-indigo-600 font-medium" onClick={() => navigate("/signup")}>
              Sign Up
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default Login;
  