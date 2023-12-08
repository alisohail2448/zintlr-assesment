import React from "react";
import { FirstChart } from "./charts/FirstChart";
import {
  BanknotesIcon,
  ChevronDoubleRightIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  WalletIcon,
} from "@heroicons/react/24/solid";
import DashboardCard from "./DashboardCard";
import { SecondChart } from "./charts/SecondChart";
import { ThirdChart } from "./charts/ThirdChart";
import { TabsComponent } from "./TabsComponent";
import { FourthChart } from "./charts/FourthChart";

const Dashboard = () => {
  return (
    <>
      <div className="p-4 flex flex-row gap-4 justify-between overflow-x-hidden">
        <div className="flex flex-col gap-2 w-[80%]">
          <p className="font-[450]">Consumers Overview</p>
          <DashboardCard />
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex  border border-[#f0f2fa] rounded-md p-3">
                <div className="flex flex-col gap-[6px]">
                  <p className="text-[14px]">Total Earnings</p>
                  <p className="text-[22px] text-[#313945]">₹1,321,342</p>
                  <div className="flex flex-row justify-between items-center gap-[10px] border-[1px] border-[#313945] px-2 py-1 rounded-[5px] cursor-pointer">
                    <p className="text-[12px] text-[#313945]">Past Week</p>
                    <ChevronDownIcon className="w-5 h-5 text-[#313945]" />
                  </div>
                </div>
                <div className="w-[220px] h-[100px]">
                  <SecondChart />
                </div>
              </div>

              <div className=" bg-[#f4f2fe] flex flex-row justify-between p-4 rounded-md items-center">
                <div className="flex flex-row gap-2 items-center">
                  <div className="bg-white p-3 rounded-full">
                    <CurrencyDollarIcon className="w-6 h-6 text-[#5531fb]" />
                  </div>
                  <div className="">
                    <p className="text-[16px] text-[#313945]">
                      Overall Cash Wallet
                    </p>
                    <div className="flex flex-row items-center gap-1">
                      <p className="text-[14px] text-[#0153c9] font-[500]">
                        Wallet History
                      </p>
                      <ChevronDoubleRightIcon className="w-[14px] h-[14px] text-[#0153c9]" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-[18px] font-[500]">₹1,35,342</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-[100%]">
              <div className=" bg-[#efffec] flex flex-row justify-between p-4 rounded-md items-center">
                <div className="flex flex-row gap-2 items-center">
                  <div className="bg-white p-3 rounded-full">
                    <BanknotesIcon className="w-6 h-6 text-[#108d38]" />
                  </div>
                  <div className="">
                    <p className="text-[16px] text-[#313945]">
                      Overall Cash Wallet
                    </p>
                    <div className="flex flex-row items-center gap-1">
                      <p className="text-[14px] text-[#0153c9] font-[500]">
                        Wallet History
                      </p>
                      <ChevronDoubleRightIcon className="w-[14px] h-[14px] text-[#0153c9]" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-[18px] font-[500]">₹1,35,342</p>
                </div>
              </div>

              <div className=" bg-[#fff2e9] flex flex-row justify-between p-4 rounded-md items-center">
                <div className="flex flex-row gap-2 items-center">
                  <div className="bg-white p-3 rounded-full">
                    <WalletIcon className="w-6 h-6 text-[#fc6b21]" />
                  </div>
                  <div className="">
                    <p className="text-[16px] text-[#313945]">
                      Overall Bullion Wallet
                    </p>
                    <div className="flex flex-row items-center gap-1">
                      <p className="text-[14px] text-[#0153c9] font-[500]">
                        Wallet History
                      </p>
                      <ChevronDoubleRightIcon className="w-[14px] h-[14px] text-[#0153c9]" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <div className="flex flex-col">
                    <div className="bg-[#ffedb2] px-3 py-1 rounded-[20px]">
                      <p className="text-[14px] text-[#db9f15] font-[500]">
                        Gold
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="bg-[#ffffff] px-3 py-1 rounded-[20px]">
                      <p className="text-[14px] text-[#acacac] font-[500]">
                        Silver
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col items-end">
                    <p className="text-black text-[12px] font-[500]">
                      134,232 gm
                    </p>
                    <div className="bg-white px-3 py-1 rounded-[20px]">
                      <p className="text-[14px] text-[#3173d3] font-[500]">
                        ₹1,35,342
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-black text-[12px] font-[500]">
                      134,232 gm
                    </p>
                    <div className="bg-white px-3 py-1 rounded-[20px]">
                      <p className="text-[14px] text-[#3173d3] font-[500]">
                        ₹1,35,342
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[396px] h-[400px] border border-[#f0f2fa] rounded-md p-4 pb-16">
          <div className="flex flex-row justify-between">
            <p>Highest Revenue Earned</p>
            <div className="flex flex-row justify-between items-center gap-[10px] border-[1px] border-[#313945] px-2 rounded-[5px] cursor-pointer">
              <p className="text-[12px] text-[#313945]">Top 5</p>
              <ChevronDownIcon className="w-4 h-4 text-[#313945]" />
            </div>
          </div>
          <div className="flex flex-row gap-2 mt-2">
            <div className="cursor-pointer p-[4px] border-[1px] border-[#313945] rounded-md flex flex-row items-center px-3 gap-[2px]">
              <p className="text-[#313945]  text-[10px]">Past Week</p>
            </div>
            <div className="cursor-pointer p-[4px] bg-[#313945] rounded-md flex flex-row items-center px-3 gap-[2px]">
              <p className="text-white  text-[10px]">Past Month</p>
            </div>
            <div className="cursor-pointer p-[4px] border-[1px] border-[#313945] rounded-md flex flex-row items-center px-3 gap-[2px]">
              <p className="text-[#313945]  text-[10px]">Past Year</p>
            </div>
            <div className="cursor-pointer p-[4px] border-[1px] border-[#313945] rounded-md flex flex-row items-center px-3 gap-[2px]">
              <p className="text-[#313945]  text-[10px]">All Time</p>
            </div>
          </div>
          <FirstChart />
        </div>
      </div>

      <div className="flex flex-row p-4 gap-4">
      <div className="p-4 flex flex-col gap-4 w-[68%] border border-[#f0f2fa] rounded-md mb-[40px]">
        <p className="font-[450]">Consumer Analysis</p>
        <div className="flex flex-row justify-between">
          <TabsComponent />
          <div className="flex flex-row gap-2 mt-2 ">
            <div className="cursor-pointer p-[4px] border-[1px] border-[#313945] rounded-md flex flex-row items-center px-3 gap-[2px]">
              <p className="text-[#313945]  text-[12px]">Past Week</p>
            </div>
            <div className="cursor-pointer p-[4px] bg-[#313945] rounded-md flex flex-row items-center px-3 gap-[2px]">
              <p className="text-white  text-[12px]">Past Month</p>
            </div>
            <div className="cursor-pointer p-[4px] border-[1px] border-[#313945] rounded-md flex flex-row items-center px-3 gap-[2px]">
              <p className="text-[#313945]  text-[12px]">Past Year</p>
            </div>
            <div className="cursor-pointer p-[4px] border-[1px] border-[#313945] rounded-md flex flex-row items-center px-3 gap-[2px]">
              <p className="text-[#313945]  text-[12px]">All Time</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-end gap-2">
          <div className="cursor-pointer py-[6px] border-[1px] border-[#313945] rounded-md flex flex-row items-center px-4 gap-[2px]">
            <p className="text-[#313945]  text-[13px]">Filter By Associates</p>
            <ChevronDownIcon className="w-4 h-4 text-[#313945]" />
          </div>
          <div className="cursor-pointer py-[6px] border-[1px] border-[#313945] rounded-md flex flex-row items-center px-4 gap-[2px]">
            <p className="text-[#313945]  text-[13px]">Filter By Zone</p>
            <ChevronDownIcon className="w-4 h-4 text-[#313945]" />
          </div>
          <div className="cursor-pointer py-[6px] border-[1px] border-[#313945] rounded-md flex flex-row items-center px-4 gap-[2px]">
            <p className="text-[#313945]  text-[13px]">Filter By Account Type</p>
            <ChevronDownIcon className="w-4 h-4 text-[#313945]" />
          </div>
        </div>
        <div className="w-[600px] h-[250px]">
          <ThirdChart />
        </div>
        <div className="">
          <p className="text-[#86909c] text-[14px] text-end">Number of Consumers</p>
        </div>
      </div>

      <div className="w-[380px] h-[400px] border border-[#f0f2fa] rounded-md p-4 pb-16">
          <div className="">
            <p>5 Greatest Transaction</p>
          </div>
          <div className="flex flex-row gap-2 mt-2">
            <div className="cursor-pointer p-[4px] border-[1px] border-[#313945] rounded-md flex flex-row items-center px-3 gap-[2px]">
              <p className="text-[#313945]  text-[10px]">Past Week</p>
            </div>
            <div className="cursor-pointer p-[4px] bg-[#313945] rounded-md flex flex-row items-center px-3 gap-[2px]">
              <p className="text-white  text-[10px]">Past Month</p>
            </div>
            <div className="cursor-pointer p-[4px] border-[1px] border-[#313945] rounded-md flex flex-row items-center px-3 gap-[2px]">
              <p className="text-[#313945]  text-[10px]">Past Year</p>
            </div>
            <div className="cursor-pointer p-[4px] border-[1px] border-[#313945] rounded-md flex flex-row items-center px-3 gap-[2px]">
              <p className="text-[#313945]  text-[10px]">All Time</p>
            </div>
          </div>
          <FourthChart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
