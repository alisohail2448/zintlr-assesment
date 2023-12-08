import React from "react";
import {
  UserGroupIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

const DashboardCard = () => {
  return (
    <div className="flex flex-row h-[30%] border-[1px] border-[#e9ecf9] rounded-[10px] justify-between">
      <div className="bg-[#e2e6f7] flex flex-row items-center h-full p-3 gap-[10px] rounded-[10px]">
        <UserGroupIcon className="w-[70px] h-[70px] text-[#3c39b2]" />
        <div className="flex flex-col">
          <p className="text-[#313945] text-[12px]">Total Consumers</p>
          <p className="text-[#313945] text-[22px]">1,342</p>
        </div>
      </div>

      <div className="flex flex-row items-center p-3">
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-row gap-[10px] items-center justify-between">
            <div className="flex flex-row gap-2">
              <p className="text-[#313945] text-[14px]">Direct Consumers</p>
              <InformationCircleIcon className="w-5 h-5 text-[#7675ca]" />
            </div>
            <p className="text-[#313945] text-[16px] font-[500]">342</p>
          </div>
          <div className="flex flex-row gap-[10px] items-center justify-between">
            <div className="flex flex-row gap-2">
              <p className="text-[#313945] text-[14px]">Through Associates</p>
              <InformationCircleIcon className="w-5 h-5 text-[#7675ca]" />
            </div>
            <p className="text-[#313945] text-[16px] font-[500]">342</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center p-3">
        <div className="flex flex-col gap-[20px] pr-[10px]">
          <div className="flex flex-row gap-[8px] items-center justify-between">
            <div className="flex flex-row gap-2">
              <p className="text-[#313945] text-[14px]">
                Through Field Executives
              </p>
              <InformationCircleIcon className="w-5 h-5 text-[#7675ca]" />
            </div>
            <p className="text-[#313945] text-[16px] font-[500]">342</p>
          </div>
          <div className="flex flex-row gap-[8px] items-center justify-between">
            <div className="flex flex-row gap-2">
              <p className="text-[#313945] text-[14px]">
                Through Sales Executives
              </p>
              <InformationCircleIcon className="w-5 h-5 text-[#7675ca]" />
            </div>
            <p className="text-[#313945] text-[16px] font-[500]">342</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
