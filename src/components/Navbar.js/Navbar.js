import { FaBell } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-white px-20 py-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        {/* <img
          src="https://via.placeholder.com/40"
          alt="Profile Logo"
          className="h-10 w-10 rounded-full"
        /> */}
        <span className="text-gray-800 text-xl font-bold ml-2">Profile</span>
      </div>
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-500 h-6 w-6" />
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-gray-800 text-lg ml-2">Username</span>
        </div>
        <Link to="/sign-in">
        <div className="flex align-middle">
          <button className="font-bold">LOGOUT</button>
           <MdKeyboardArrowDown className="text-gray-800 h-6 w-6"/>
           </div>
           </Link>
      </div>
    </nav>
    )
}
export default Navbar;