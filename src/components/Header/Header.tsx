import { FaBars } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="min-w-[350px] max-w-[540px] md:max-w-[1200px] xl:max-w-[1192px] mx-auto md:p-6 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center gap-6">
            <img src="/logo/logo.png" alt="" />
            <button className="border border-black hidden md:flex items-center gap-2 rounded-lg px-4 py-2">
              <FaBars className="w-[20px] h-[20px]" />
              All Categories
            </button>
          </div>
          <ul className="flex justify-center items-center gap-6">
            <li>
              <p className="hidden md:flex justify-center items-center gap-2">
                <CiHeart /> Favourite
              </p>
            </li>
            <Link to="/profile">Profile</Link>
            <li>
              <button className="border border-black bg-black px-4 py-2 rounded-lg text-white">
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
