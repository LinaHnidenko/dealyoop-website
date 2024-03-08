import StarRating from "../Rating/Rating";
import { RiShoppingBag3Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { RiListSettingsLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const AsideProfile = () => {
  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";

  const menu = [
    {
      title: "Orders",
      icon: <RiShoppingBag3Line className="w-5 h-5" />,
    },
    {
      title: "Favourite",
      icon: <CiHeart className="w-5 h-5" />,
    },
    {
      title: "Help",
      icon: <RiListSettingsLine className="w-5 h-5" />,
    },
    {
      title: "Profile",
      icon: <IoMdSettings className="w-5 h-5" />,
    },
  ];

  return (
    <div className="nax-w-[392px] flex flex-col gap-5">
      <ul className="flex gap-4 items-center justify-center md:justify-start mb-5">
        {/* Location Buttons */}
        <li>
          <Link
            to={location.state?.pathname || "/"}
            className="border bg-blue-100 rounded-xl px-3 py-1 text-sm flex flex-row items-center justify-center text-blue-400"
          >
            <MdOutlineKeyboardArrowLeft /> Previous Page
          </Link>
        </li>
        <div className="flex gap-2 items-center">
          <li>
            <Link
              to="/"
              className={!isProfilePage ? "font-bold" : "font-normal"}
            >
              Home •
            </Link>
          </li>
          <li className={isProfilePage ? "font-bold" : "font-normal"}>
            Profile
          </li>
        </div>
      </ul>
      <div className="flex justify-start items-center gap-20">
        <div>
          <img
            src="/images/portfolio/portfolio.png"
            alt=""
            className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] "
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">Helen Wilson</p>
          <p>82 reviews</p>
          <StarRating rate={5} />
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-7">
          {menu.map((item, idx) => (
            <li key={idx} className="flex items-center justify-start gap-5">
              <div>{item.icon}</div>
              <p className="font-medium">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AsideProfile;
