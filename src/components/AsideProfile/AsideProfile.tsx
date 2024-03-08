import React from "react";
import { RxAvatar } from "react-icons/rx";
import StarRating from "../Rating/Rating";
import { RiShoppingBag3Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { RiListSettingsLine } from "react-icons/ri";

const AsideProfile = () => {
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
      <div className="flex justify-start items-center gap-20">
        <div>
          <img
            src="/images/portfolio/portfolio.png"
            alt=""
            className="w-[140px] h-[140px] "
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
