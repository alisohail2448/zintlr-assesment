import {
  BanknotesIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleRightIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  EnvelopeOpenIcon,
  UserMinusIcon,
  WalletIcon,
  UserPlusIcon,
  ChartBarIcon,
  ChevronRightIcon,
  DocumentChartBarIcon,
  LifebuoyIcon,
  ExclamationCircleIcon,
  TicketIcon,
  ArrowLongRightIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { SecondChart } from "./charts/SecondChart";
import { ThirdChart } from "./charts/ThirdChart";
import { FifthChart } from "./charts/FifthChart";

const DrawerComponent = ({ open, setOpen }) => {
  return (
    <>
      <div
        className={
          open
            ? "w-[100%] h-[100vh] bg-black bg-opacity-50 fixed right-0 flex flex-row "
            : ""
        }
      >
        <div
          className="w-[50%] h-[100%] bg-transparent"
          onClick={() => setOpen(false)}
        ></div>
        <div
          className={`w-[50%] h-[100%] bg-white transition-transform duration-300 flex flex-col overflow-y-auto ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full bg-[#e2eaee] ">
          <div className="sticky top-0 z-50 p-4 px-6 bg-white flex items-center justify-between">
              <div className="flex gap-2">
                <div className="">
                  <h1 className="text-[#313945]">Raghuvendra Rega</h1>
                  <span className="text-[#445163] text-[12px]">
                    Pay and use (Major)
                  </span>
                </div>
                <div className="h-12 w-12 bg-[#ffd9c3] text-[#646164] rounded-md flex flex-col items-center justify-center text-[15px]">
                  <LifebuoyIcon className="w-5 h-5" />
                  245
                </div>
                <div className="flex gap-1 flex-col">
                  <span className="p-1 px-2 bg-[#ffe9e9] text-[#ff6d6d] text-[13px] rounded-md flex justify-center items-center">
                    KYC Pending
                  </span>
                  <span className="bg-black px-1 py-1 w-[70%] text-white rounded-md  text-center text-[14px] flex justify-center items-center">
                    Verify
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[#646164]">Insitued</div>
                <div className="text-[#445163] text-[13px]">Tue, Apr 29</div>
                <div className="text-[#445163] text-[13px]">
                  14:27:47 IST 2021
                </div>
              </div>
            </div>

            <div className="flex px-6 justify-between items-center bg-[#d9ffe3] py-3 border-b-[4px] border-b-[#e2eaee] border-t-[2px] border-t-[#e2eaee]">
              <div className="flex items-center gap-1">
                <ExclamationCircleIcon className="h-5 w-5 " /> 2 Active
                Ticket(s)
              </div>
              <div className="bg-[#313945] text-white text-[15px] flex gap-1 p-1   px-2 rounded-md items-center">
                <TicketIcon className="h-5 w-5" />
                View Ticket History
              </div>
            </div>

            <div className="flex bg-white items-center justify-between gap-2 pl-6 border-b-[4px] border-b-[#e2eaee]">
              <div className="flex flex-col justify-between items-start gap-1">
                <span className="text-[#7b7d7e] text-[12px]">
                  B2B Flied Executive
                </span>
                <span className="text-[#3e4551]">Arun Jha</span>
              </div>
              <div className="">
                <ArrowLongRightIcon className="h-6 w-6 text-[#6ab0ff]" />
              </div>
              <div className="flex flex-col justify-between items-start gap-1">
                <span className="text-[#7b7d7e] text-[12px]">Associate</span>
                <span className="text-[#3e4551]">Anika Singh</span>
              </div>
              <div className="">
                <ArrowLongRightIcon className="h-6 w-6 text-[#6ab0ff]" />
              </div>
              <div className="flex flex-col justify-between items-start gap-1">
                <span className="text-[#7b7d7e] text-[12px]">Consumer</span>
                <span className="text-[#3e4551]">Raghuvendra</span>
              </div>
              <div className="flex flex-col bg-[#ffdde9] pr-6 pl-4 py-2 w-[30%]">
                <span className="text-[13px] text-[#ff629a]">
                  Start a chat with
                </span>
                <span className="text-[15px text-[#313945]">Raghuvendra</span>
                <span className="flex gap-1 items-center bg-[#313945] px-1 text-white w-[50%] justify-center rounded-md text-[15px]">
                  {" "}
                  <ChatBubbleLeftRightIcon className="h-4 w-4" />
                  Chat{" "}
                </span>
              </div>
            </div>

            <div className=" bg-[#ffffff] border-b-[1px] border-b-[#e2eaee] flex flex-row justify-between p-2 px-8 rounded-md items-center">
              <div className="">
                <p className="text-[16px] text-[#313945]">Last Transaction</p>
              </div>
              <div className="flex flex-row items-center font-[450]">
                <p className="text-[12px] text-blue-500 ">
                  View All Transactions
                </p>
                <ChevronRightIcon className="w-3 h-3  text-blue-500" />
              </div>
            </div>

            <div className=" bg-[#ffffff] border-b-[4px] border-b-[#e2eaee] flex flex-row justify-between p-2 px-8 rounded-md items-center">
              <div className="flex flex-col items-start">
                <p className="text-[13px] text-[#313945]">Money Added</p>
                <p className="text-[11px] text-[#313945]">
                  Transaction Id :{" "}
                  <span className="text-[#808080]">243987123789243243</span>
                </p>
                <p className="text-[11px] text-[#808080]">
                  Thu Apr 29 17:57:47 IST 2023
                </p>
              </div>
              <div className="flex flex-col items-center font-[450]">
                <div className="text-[#25af18] text-[15px]">+ ₹7,342.00</div>
                <div className="flex flex-row items-center">
                  <div className="bg-[#aef7a8] text-[12px] text-[#25af18] py-[2px] px-2 rounded-[20px] font-[450]">
                    Success
                  </div>
                  <DocumentChartBarIcon className="w-4 h-4 text-[#313945]" />
                </div>
              </div>
            </div>

            <div className=" bg-[#ffffff] border-b-[4px] border-b-[#e2eaee] flex flex-row justify-between p-4 px-8 rounded-md items-center">
              <div className="flex flex-row gap-2 items-center">
                <div className="bg-[#f4f2fe] p-3 rounded-full">
                  <CurrencyDollarIcon className="w-6 h-6 text-[#5531fb]" />
                </div>
                <div className="">
                  <p className="text-[16px] text-[#313945]">
                    TruCard Cash Wallet
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
                <p className="text-[24px] text-[#313945] font-[500]">
                  ₹1,35,342
                </p>
              </div>
            </div>

            <div className=" bg-[#ffffff] border-b-[4px] border-b-[#e2eaee] flex flex-row justify-between p-4 px-8 rounded-md items-center">
              <div className="flex flex-row gap-2 items-center">
                <div className="bg-[#ffe9db] p-3 rounded-full">
                  <WalletIcon className="w-6 h-6 text-[#fc6b21]" />
                </div>
                <div className="">
                  <p className="text-[16px] text-[#313945]">
                    TruCard Bullion Wallet
                  </p>
                  <div className="flex flex-row items-center gap-1">
                    <p className="text-[14px] text-[#0153c9] font-[500]">
                      Wallet History
                    </p>
                    <ChevronDoubleRightIcon className="w-[14px] h-[14px] text-[#0153c9]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[2px]">
                <div className="flex flex-row">
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#ffefba] text-[14px] text-[#e4b33e] py-[2px] px-4 rounded-[20px]">
                      Gold
                    </div>
                    <div className="bg-[#f0f0f0] text-[14px] text-[#a7a7a7] py-[2px] px-4 rounded-[20px]">
                      Silver
                    </div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col items-center gap-2">
                    <div className=" text-[14px] text-[#3e4551] py-[2px] px-4 rounded-[20px] font-[450]">
                      4,232 gm
                    </div>
                    <div className=" text-[14px] text-[#3e4551] py-[2px] px-4 rounded-[20px] font-[450]">
                      1,34,232 gm
                    </div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#e5eefa] text-[14px] text-[#3b6cd6] py-[2px] px-4 rounded-[20px] font-[450]">
                      ₹9242.5
                    </div>
                    <div className="bg-[#e5eefa] text-[14px] text-[#3b6cd6] py-[2px] px-4 rounded-[20px] font-[450]">
                      ₹49,242.5
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-[#ffffff] border-b-[4px] border-b-[#e2eaee] flex flex-row justify-between p-4 px-8 rounded-md items-center">
              <div className="flex flex-row gap-2 items-center">
                <div className="bg-[#e5ffdf] p-3 rounded-full">
                  <BanknotesIcon className="w-6 h-6 text-[#00852b]" />
                </div>
                <div className="">
                  <p className="text-[16px] text-[#313945]">Float</p>
                  <div className="flex flex-row items-center gap-1">
                    <p className="text-[14px] text-[#0153c9] font-[500]">
                      Wallet History
                    </p>
                    <ChevronDoubleRightIcon className="w-[14px] h-[14px] text-[#0153c9]" />
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-[24px] text-[#313945] font-[500]">
                  ₹1,35,342
                </p>
              </div>
            </div>

            <div className=" bg-[#ffffff] border-b-[4px] border-b-[#e2eaee] flex flex-row justify-between p-4 px-8 rounded-md items-center">
              <div className="flex flex-row gap-2 items-center">
                <div className="bg-[#ffdde9] p-3 rounded-full">
                  <CreditCardIcon className="w-6 h-6 text-[#ff629a]" />
                </div>
                <div className="">
                  <p className="text-[16px] text-[#313945]">Lending</p>
                  <div className="flex flex-row items-center gap-1">
                    <p className="text-[14px] text-[#0153c9] font-[500]">
                      Active Loans
                    </p>
                    <ChevronDoubleDownIcon className="w-[14px] h-[14px] text-[#0153c9]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-end gap-2">
                <p className="text-[12px] text-[#313945]">
                  Overall Loan Amount
                </p>
                <p className="text-[17px] text-[#313945] font-[500]">
                  ₹1,35,342
                </p>
              </div>
              <div className="flex flex-row items-end gap-2">
                <p className="text-[12px] text-[#313945]">
                  Net Next Emi Amount
                </p>
                <p className="text-[17px] text-[#313945] font-[500]">
                  ₹1,35,342
                </p>
              </div>
            </div>

            <div className=" bg-[#ffffff] border-b-[4px] border-b-[#e2eaee] flex flex-col p-4 px-8 ">
              <div className="flex flex-row items-center gap-2">
                <div className="bg-[#e5f7ff] p-3 rounded-full">
                  <ChartBarIcon className="w-6 h-6 text-[#63aeff]" />
                </div>
                <div className="">
                  <p className="text-[16px] text-[#313945]">
                    Activity Overview
                  </p>
                </div>
              </div>

              <div className="flex flex-row gap-2 mt-2">
                <div className="cursor-pointer p-[4px] bg-[#313945] rounded-md flex flex-row items-center px-3 gap-[2px]">
                  <p className="text-white  text-[10px]">Past Week</p>
                </div>
                <div className="cursor-pointer p-[4px] border-[1px] border-[#313945] rounded-md flex flex-row items-center px-3 gap-[2px]">
                  <p className="text-[#313945]  text-[10px]">Past Month</p>
                </div>
                <div className="cursor-pointer p-[4px] border-[1px] border-[#313945] rounded-md flex flex-row items-center px-3 gap-[2px]">
                  <p className="text-[#313945]  text-[10px]">Past Year</p>
                </div>
                <div className="cursor-pointer p-[4px] border-[1px] border-[#313945] rounded-md flex flex-row items-center px-3 gap-[2px]">
                  <p className="text-[#313945]  text-[10px]">All Time</p>
                </div>
              </div>

              <div className="flex flex-row mb-4">
                <div className="w-[300px] h-[250px] py-6">
                  <SecondChart />
                </div>
                <div className="w-[300px] h-[250px] py-6">
                  <FifthChart />
                </div>
              </div>
            </div>

            <div className=" bg-[#ffffff] border-b-[4px] border-b-[#e2eaee] flex flex-row justify-between p-4 px-8 rounded-md items-center">
              <div className="flex flex-row gap-2 items-center">
                <div className="bg-[#e4f7ff] p-3 rounded-full">
                  <EnvelopeOpenIcon className="w-6 h-6 text-[#1fb9fc]" />
                </div>
                <div className="">
                  <p className="text-[16px] text-[#313945]">Referral</p>
                  <div className="flex flex-row items-center gap-1">
                    <p className="text-[14px] text-[#0153c9] font-[500]">
                      Active Loans
                    </p>
                    <ChevronDoubleDownIcon className="w-[14px] h-[14px] text-[#0153c9]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-end gap-2">
                <p className="text-[12px] text-[#313945]">
                  Total Referrals Sent
                </p>
                <p className="text-[17px] text-[#313945] font-[500]">232</p>
              </div>
            </div>

            <div className=" bg-[#ffffff]  border-b-[4px] border-b-[#e2eaee] flex flex-row  p-2 px-8 rounded-md items-center ">
              <div className="flex flex-row gap-2 items-center w-[50%] justify-between border-r-[4px] border-r-[#e2eaee] pr-2">
                <div className="flex flex-row items-center gap-2">
                  <div className="bg-[#e6e6e6] p-2 rounded-full">
                    <UserMinusIcon className="w-6 h-6 text-[#808080]" />
                  </div>
                  <div className="">
                    <p className="text-[14px] text-[#808080]">
                      Disable Consumer
                    </p>
                  </div>
                </div>
                <button className="bg-[#808080] text-[14px] text-white font-[450] px-2 py-[4px]] rounded-[5px]">
                  Disable
                </button>
              </div>

              <div className="flex flex-row gap-2 items-center w-[50%] justify-between pl-2 ">
                <div className="flex flex-row items-center gap-2">
                  <div className="bg-[#f0ffb8] p-2 rounded-full">
                    <UserPlusIcon className="w-6 h-6 text-[#95c900]" />
                  </div>
                  <div className="">
                    <p className="text-[14px] text-[#808080]">
                      Disable Consumer
                    </p>
                  </div>
                </div>
                <button className="bg-[#95c900] text-[14px] text-white font-[450] px-2 py-[4px]] rounded-[5px]">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawerComponent;
