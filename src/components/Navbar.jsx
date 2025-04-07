import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Navbar = ({ isLoggedIn }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <nav className="bg-white shadow-md px-4 py-2 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo/Name */}
        <div className="text-xl font-bold text-indigo-600">CollegeFest</div>

        {/* Center: Search Bar (hidden on mobile) */}
        <div className="hidden md:flex flex-1 mx-4">
          <input
            type="text"
            placeholder="Search events..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Right: Navigation and Login/Profile */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-700 hover:text-indigo-600">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">
            Contact
          </a>

          <div className="relative">
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-gray-700 hover:text-indigo-600"
            >
              More
            </button>
            {showMore && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md py-2 z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  About Us
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Events
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Gallery
                </a>
              </div>
            )}
          </div>

          {isLoggedIn ? (
            <User className="w-6 h-6 text-indigo-600 cursor-pointer" />
          ) : (
            <button
              className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
              onClick={() => navigate("/login")} // Navigate to login page
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile: Hamburger menu */}
        <div className="md:hidden flex items-center gap-2">
          {isLoggedIn ? (
            <User className="w-6 h-6 text-indigo-600" />
          ) : (
            <button
              className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-full"
              onClick={() => navigate("/login")} // Navigate to login page
            >
              Login
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-white shadow-sm space-y-2">
          <input
            type="text"
            placeholder="Search events..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <a href="#" className="block text-gray-700 hover:text-indigo-600">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">
            Contact
          </a>
          <div className="border-t pt-2">
            <a href="#" className="block text-gray-700 hover:text-indigo-600">
              About Us
            </a>
            <a href="#" className="block text-gray-700 hover:text-indigo-600">
              Events
            </a>
            <a href="#" className="block text-gray-700 hover:text-indigo-600">
              Gallery
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
