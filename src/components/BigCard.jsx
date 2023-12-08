import { UserPlusIcon,UserMinusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";

export function BigCard({ heading }) {
  const location = useLocation();
  return (
    <div
      className={`mt-6 w-[420px] h-[140px] bg-[#edf3fb] rounded-lg flex justify-between flex-row px-4 py-1`}
    >
      <div className="h-[40px] mb-2 text-md flex flex-col">
        <div className="mt-2 mr-2">
          {location.pathname === "/" && (
            <>
              <p className="text-[22px] ">Hello Shakir!</p>
              <span className="text-[#7b7d7e] text-[12px]">
                You have 134 Consumer this week.
              </span>
            </>
          )}
          {location.pathname === "/manage" && (
            <>
              <h1 className="text-lg mb-1 text-[#1fb9fc]">
                Consumer {`>`} Manage Consumer
              </h1>
              <span className="text-black text-lg">Actions</span>
            </>
          )}
        </div>
        <div
          className={`${location.pathname === "/" && "mt-4"} ${
            location.pathname === "/manage" && "mt-1"
          } flex gap-1`}
        >
          <Link to="/" className="bg-[#313945] py-2 px-3 text-white text-[14px] flex  items-center rounded-md border-[1px] border-[#313945] ">
            <UserPlusIcon className="w-4 h-4 mr-2" />
            Add Consumers
          </Link>
          {location.pathname === "/" && (
            <Link to="/manage" className="bg-transparent py-2 px-3 text-black text-[14px] flex  items-center rounded-md outline-none border-[1px] border-black ">
                <UserMinusIcon className="w-4 h-4 mr-2" />
                Manage Consumers
            </Link>
          )}
        </div>
      </div>
      <div className="bg-transparent flex justify-center items-center"></div>
    </div>
  );
}
