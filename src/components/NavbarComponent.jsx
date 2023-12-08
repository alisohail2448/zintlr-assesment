import {
  BellIcon,
  CurrencyDollarIcon,
  FolderMinusIcon,
  MagnifyingGlassIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import ProfileCard from "./ProfileCard";

const NavbarComponent = () => {
  return (
    <div className="flex flex-row items-center justify-between w-[80vw] pl-4">
      <div className="flex flex-row justify-between items-center w-full gap-[60px]  ">
        <div class="relative flex flex-row  rounded-[20px] bg-[#f6fafc] pl-4 pr-1 py-[4px] w-[300px]">
          <input
            className="border-none outline-none focus:border-none bg-[#f6fafc] w-full"
            placeholder="Search (Eg Rewards)"
            required
          />
          <button className="rounded-full bg-white p-2">
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="py-4 flex flex-row items-center gap-4">
        <div className="flex flex-row gap-[14px] relative">
          <CurrencyDollarIcon className="w-7 h-7 text-[#313945] iconBadge" />
          <WalletIcon className="w-7 h-7 text-[#313945] relative" />
          <FolderMinusIcon className="w-7 h-7 text-[#313945]" />
          <BellIcon className="w-7 h-7 text-[#313945]" />
          <div className="w-2 h-2 bg-[#eb5757] rounded-full absolute left-[60px]"></div>
          <div className="w-2 h-2 bg-[#eb5757] rounded-full absolute left-[100px]"></div>
          <div className="w-2 h-2 bg-[#eb5757] rounded-full absolute left-[140px]"></div>
        </div>
        <ProfileCard />
      </div>
    </div>
  );
};

export default NavbarComponent;
