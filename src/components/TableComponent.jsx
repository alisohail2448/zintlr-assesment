import {
  ArrowPathIcon,
  DocumentMagnifyingGlassIcon,
  DocumentTextIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { MembersTable } from "./MembersTable";
import DrawerComponent from "./DrawerComponent";



const TableComponent = ({ open, setOpen }) => {
  return (
    <><div className="px-[30px]">
    <p className="font-[450] mt-2">Consumers Overview</p>
      <div className="flex flex-row justify-between items-center">
        <div class="relative flex flex-row  rounded-[4px] bg-[#ffffff] pl-4 pr-1 py-[3px] w-[400px] border-[1px] border-[#c7d2e1] mt-2">
          <input
            className="border-none outline-none focus:border-none bg-[#ffffff] w-full"
            placeholder="Search Consumers"
            required
          />
          <button className="rounded-full bg-white p-2">
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-row gap-4">
          <div className="p-[4px] bg-[#313945] rounded-md">
            <ArrowPathIcon className="w-5 h-5 text-white font-bold" />
          </div>
          <div className="p-[4px] text-[#313945] border-[1px] border-[#313945]  rounded-md">
            <DocumentMagnifyingGlassIcon className="w-5 h-5" />
          </div>
          <div className="p-[4px] text-[#313945] border-[1px] border-[#313945] rounded-md">
            <DocumentTextIcon className="w-5 h-5" />
          </div>
          <div className="p-[4px] text-[#ffffff] bg-[#4daeff] rounded-md flex flex-row items-center px-2 gap-[2px]">
            <FunnelIcon className="w-4 h-4" />
            <p className="text-white  text-[12px]">Filter</p>
          </div>
        </div>
      </div>
      <MembersTable open={open} setOpen={setOpen} />
    </div>
    <DrawerComponent open={open} setOpen={setOpen} />
    </>
  );
};

export default TableComponent;