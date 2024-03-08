import { FaBars } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  return (
    <header>
      <div className="min-w-[350px] max-w-[540px] md:max-w-[1200px] xl:max-w-[1192px] mx-auto md:p-6 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center gap-6 relative">
            <Link to="/">
              <img src="/logo/logo.png" alt="" className="cursor-pointer" />
            </Link>
            <button
              className="border border-black hidden md:flex items-center gap-2 rounded-lg px-4 py-2 hover:border-blue-500 focus:border-blue-500  transition-all cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <FaBars className="w-[20px] h-[20px]" />
              All Categories
            </button>

            {/* DropdownMenu */}
            {showDropdown && (
              <div className="absolute top-full left-[50%]">
                <DropdownMenu />
              </div>
            )}
          </div>

          <ul className="flex justify-center items-center gap-6">
            <li>
              <p className="hidden md:flex justify-center items-center gap-2 hover:text-blue-500 focus:text-blue-500 transition-all cursor-pointer">
                <CiHeart /> Favourite
              </p>
            </li>
            <Link
              to="/profile"
              state={location}
              className="hover:text-blue-500 focus:text-blue-500  transition-all cursor-pointer"
            >
              Profile
            </Link>
            <li>
              <button className="border border-black bg-black px-4 py-2 rounded-lg text-white hover:text-black focus:text-black0 hover:bg-blue-200 focus:bg-blue-200 transition-all cursor-pointer">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
