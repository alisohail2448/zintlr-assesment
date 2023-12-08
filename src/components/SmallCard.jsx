import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";

export function SmallCard({ icon, color, heading }) {
  const location = useLocation();
  return (
    <div
      className={`mt-6 w-[210px]  h-[140px]  ${color === "red" && "bg-[#f4e4d5]"} ${
        color === "blue" && "bg-[#edf3fb]"
      } rounded-lg flex flex-col justify-around pr-2 pl-4`}
    >
      <div className=" ">
        <div className="flex ">
          <div className="mt-2 mr-2">
            {icon === "briefcase" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-amber-950"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
            )}
            {icon === "risk" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            )}
            {icon === "ticket" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                />
              </svg>
            )}
          </div>
          <div className="text-[15px]">
            {icon === "briefcase" && location.pathname === "/" && (
              <>
                Your have <span className="text-2xl">276</span> <br /> KYC
                approval pending
              </>
            )}
            {icon === "risk" && location.pathname === "/" && (
              <>
                There are <span className="text-2xl">182</span> <br />
                high risk consumer
              </>
            )}
            {icon === "ticket" && location.pathname === "/" && (
              <>
                There are <span className="text-2xl">32</span> <br />
                ticket open
              </>
            )}
            {icon === "briefcase" && location.pathname === "/manage" && (
              <>
                <span className="text-2xl mr-1">276</span> KYC approval pending
              </>
            )}
            {icon === "risk" && location.pathname === "/manage" && (
              <>
                <span className="text-2xl mr-1">182</span>
                high risk consumer
              </>
            )}
            {icon === "ticket" && location.pathname === "/manage" && (
              <>
                <span className="text-2xl mr-1">32</span>
                ticket open
              </>
            )}
          </div>
        </div>
      </div>
      <div className="mt-2">
        <Link className="bg-[#313945] py-2 px-4 text-white text-[14px] w-[100px] flex  items-center justify-center rounded-md">
         <p>View List</p>
        </Link>
      </div>
    </div>
  );
}
