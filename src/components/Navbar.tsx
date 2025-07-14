import { HiOutlineHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    to: "/",
    label: "Home",
    icon: <HiOutlineHome className="w-5 h-5" />,
  },
  {
    to: "/users",
    label: "Users",
    icon: <HiOutlineHome className="w-5 h-5" />,
  },
  {
    to: "/users/:id",
    label: "User Details",
    icon: <HiOutlineHome className="w-5 h-5" />,
  },
];

const Navbar = () => {
  return (
    <nav className="flex-1 px-4 pb-4">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md transform scale-105"
                    : "text-gray-600 hover:bg-purple-50 hover:text-purple-700 hover:transform hover:scale-105"
                }`
              }
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
