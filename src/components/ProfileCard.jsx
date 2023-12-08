import {
  ArrowTrendingUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import flag from "../assets/flag.jpg";
import img from "../assets/nft.jpg";
import graph from "../assets/graph.jpg";

const ProfileCard = () => {
  return (
    <div className="flex flex-row gap-4">
      <div className="border border-[#e6eaf9] rounded-[16px] flex flex-row items-center w-[380px]">
        <div className="w-[30%] p-4">
          <p className="text-[15px] text-[#fd874b] font-bold">Gold</p>
          <div className="flex flex-row items-center gap-1 border border-[#e6eaf9] px-2 rounded-[2px]">
            <img src={flag} className="w-[20px] h-[10px] rounded-full" alt="" />
            <p className="text-[14px] text-[#373636]">IN</p>
            <ChevronDownIcon className="w-6 h-6 text-[#373636]" />
          </div>
        </div>
        <div className="w-[40%]">
          <img src={graph} className="w-[80px]" alt="" />
          <p className="text-[#39f882] text-[14px] text-end pr-4">+0.34%</p>
        </div>
        <div className="w-[45%]">
          <div className="flex flex-row items-center gap-2 ">
            <p className="text-[14px] text-[#313945] font-[500]">
              <span className="text-[12px] text-[#313945] font-[500]">
                Buy:
              </span>{" "}
              ₹7,390.00
            </p>
            <ArrowTrendingUpIcon className="w-4 h-4 text-[#39f882]" />
          </div>
          <div className="flex flex-row items-center gap-2">
            <p className="text-[14px] text-[#313945] font-[500]">
              <span className="text-[12px] text-[#313945] font-[500]">
                Sell:
              </span>{" "}
              ₹7,390.00
            </p>
            <ArrowTrendingUpIcon className="w-4 h-4 text-[#39f882]" />
          </div>
        </div>
      </div>
      <div className="bg-[#f6fafc] flex flex-row justify-center items-center p-3 rounded-[10px] gap-2">
        <div className="flex justify-center items-center border-[4px] border-[#fc6b21] rounded-full">
          <img src={img} className="w-[70px] rounded-full" alt="" />
        </div>
        <ChevronDownIcon className="w-6 h-6 text-[#373636]" />
      </div>
    </div>
  );
};

export default ProfileCard;
