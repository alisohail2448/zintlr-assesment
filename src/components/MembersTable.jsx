import React from "react";

const TABLE_HEAD = [
  "Consumer name",
  "Assets",
  "Revenue",
  "KYC Status",
  "Facilitator",
  "Zone",
  "Account Type",
  "TPA",
];

const TABLE_ROWS = [
  {
    name: "Adib",
    count: 3,
    assets: "₹3552",
    revenue: "₹2552",
    kyc: "Done",
    facilitator: {
      p1: "B2B Flied Executive",
      n1: "Arun Jha",
      p2: "Associate",
      n2: "Anika Singh",
    },
    zone: "south",
    account: "business",
    tpa: "856522@trucard",
  },
  {
    name: "John",
    assets: "₹6200",
    revenue: "₹5200",
    kyc: "Done",
    facilitator: {
      p1: "B2B Flied Executive",
      n1: "Arun Jha",
      p2: "Associate",
      n2: "Anika Singh",
    },
    zone: "West",
    account: "pay & use",
    tpa: "778899@trucard",
  },
  {
    name: "Aisha",
    assets: "₹4200",
    revenue: "₹3200",
    kyc: "Done",
    facilitator: {
      p1: "B2B Flied Executive",
      n1: "Arun Jha",
      p2: "Associate",
      n2: "Anika Singh",
    },
    zone: "East",
    account: "",
    tpa: "665544@trucard",
  },
  {
    name: "Raj",
    assets: "₹5800",
    revenue: "₹4800",
    kyc: "pending",
    facilitator: {
      p1: "B2B Flied Executive",
      n1: "Arun Jha",
      p2: "Associate",
      n2: "Anika Singh",
    },
    zone: "North",
    account: "",
    tpa: "889977@trucard",
  },
  {
    name: "Anita",
    count: 3,
    assets: "₹7000",
    revenue: "₹6000",
    kyc: "Done",
    facilitator: {
      p1: "B2B Flied Executive",
      n1: "Arun Jha",
      p2: "Associate",
      n2: "Anika Singh",
    },
    zone: "West",
    account: "",
    tpa: "778899@trucard",
  },
  {
    name: "Ryan",
    assets: "₹4500",
    revenue: "₹3500",
    kyc: "pending",
    facilitator: {
      p1: "B2B Flied Executive",
      n1: "Arun Jha",
      p2: "Associate",
      n2: "Anika Singh",
    },
    zone: "South",
    account: "business",
    tpa: "998877@trucard",
  },
  {
    name: "Priya",
    count: 3,
    assets: "₹5100",
    revenue: "₹4100",
    kyc: "Done",
    facilitator: {
      p1: "B2B Flied Executive",
      n1: "Arun Jha",
      p2: "Associate",
      n2: "Anika Singh",
    },
    zone: "East",
    account: "",
    tpa: "665544@trucard",
  },
];

export function MembersTable({open, setOpen }) {
  return (
    <div className="h-full w-full capitalize ">
      <div className="  px-0 overflow-hidden">
        <table className="mt-4 table-auto text-left ">
          <thead className="bg-[#edf3fb]">
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <div className="flex items-center justify-between gap-2 font-normal leading-none text-sm text-black ">
                    <div className="flex flex-col gap-1 items-start">
                      {head}
                      {head === "Assets" && (
                        <>
                          <div className="flex gap-1  items-start flex-col">
                            <span className="text-[#6dbdfe] text-[12px]">
                              Total-₹9M
                            </span>
                            <div className="flex gap-1 ">
                              <span className="h-4 w-8 bg-[#e9d698] text-[#9d8332] text-[10px] rounded-md flex justify-center items-center  ">
                                50.4g
                              </span>
                              <span className="h-4 w-8 bg-[#d0d0d0] text-[#7d7d7d] text-[10px] rounded-md flex justify-center items-center">
                                34.2g
                              </span>
                              <span className="h-4 w-8 bg-[#c0e3f8] text-[#6dbdfe] text-[10px] rounded-md flex justify-center items-center">
                                242.5
                              </span>
                            </div>
                          </div>
                        </>
                      )}
                      {head === "Revenue" && (
                        <>
                          <div className="flex gap-1  items-center">
                            <span className="text-[#6dbdfe] text-[12px]">
                              Total-₹9M
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                    {index !== TABLE_HEAD.length - 1 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {TABLE_ROWS.map(
              (
                {
                  name,
                  count,
                  assets,
                  revenue,
                  kyc,
                  facilitator,
                  zone,
                  account,
                  tpa,
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-2"
                  : "p-2 border-b border-blue-gray-50";

                return (
                  <tr key={name} className="even:bg-[#f6fafc]">
                    <td className={classes}>
                      <div className="flex items-start gap-3">
                        {/* <Avatar src={img} alt={name} size="sm" /> */}
                        <div className="flex justify-between items-center capitalize w-full">
                          <button onClick={() => setOpen(true)} className="font-normal text-[#1fb9fc]">
                            {name}
                          </button>
                          {count && (
                            <>
                              <div className="bg-[#ff7979] flex justify-center items-center h-4 w-7 text-white rounded-md text-[11px]">
                                {count}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col w-full">
                        <div className="font-normal">{assets}</div>
                        <div className="flex gap-1 font-bold">
                          <span className="h-4 w-8 bg-[#e9d698] text-[#9d8332] text-[10px] rounded-md flex justify-center items-center  ">
                            50.4g
                          </span>
                          <span className="h-4 w-8 bg-[#d0d0d0] text-[#7d7d7d] text-[10px] rounded-md flex justify-center items-center">
                            34.2g
                          </span>
                          <span className="h-4 w-8 bg-[#c0e3f8] text-[#6dbdfe] text-[10px] rounded-md flex justify-center items-center">
                            242.5
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <div className="font-normal">{revenue}</div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex justify-items-center flex-col items-center">
                        <div
                          className={`px-5 py-1 rounded-md flex text-[#33ac15] justify-center items-center capitalize ${
                            kyc === "Done" ? "bg-[#eaffe0] " : ""
                          }${kyc === "pending" && "bg-[#ffe9e9] text-[#ff6d6d]"}`}
                        >
                          {kyc}
                        </div>
                        {kyc === "pending" && (
                          <>
                            <div className="text-[12px] text-[#7b7d7e] ">
                              Since 3 weeks
                            </div>
                          </>
                        )}
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex flex-col justify-between items-start gap-1">
                          <span className="text-[#7b7d7e] text-[12px]">
                            {facilitator.p1}
                          </span>
                          <span className="">{facilitator.n1}</span>
                        </div>
                        <div className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-[#1fb9fc]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col justify-between items-start gap-1">
                          <span className="text-[#7b7d7e] text-[12px]">
                            {facilitator.p2}
                          </span>
                          <span className="">{facilitator.n2}</span>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="">{zone}</div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col justify-between items-strat">
                        {account}
                        {account == "pay & use" && (
                          <>
                            <div className="text-[#1fb9fc]">
                              {"{"}Minor{"}"}
                            </div>
                          </>
                        )}
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="font-normal">{tpa}</div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
      <div className=" flex items-center justify-center my-2 gap-2">
        <div
          className="border border-[#7b7d7e] p-1 rounded-sm px-2 cursor-pointer border-1"
          size="sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-[#1fb9fc]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div
          className="border border-[#7b7d7e] p-1 rounded-sm px-2 cursor-pointer border-1"
          size="sm"
        >
          1
        </div>
        <div
          className="border border-[#7b7d7e] p-1 rounded-sm px-2 cursor-pointer border-1"
          size="sm"
        >
          2
        </div>
        <div
          className="border border-[#7b7d7e] p-1 rounded-sm px-2 cursor-pointer border-1"
          size="sm"
        >
          3
        </div>
        <div
          className="border border-[#7b7d7e] p-1 rounded-sm px-2 cursor-pointer border-1"
          size="sm"
        >
          ...
        </div>
        <div
          className="border border-[#7b7d7e] p-1 rounded-sm px-2 cursor-pointer border-1"
          size="sm"
        >
          8
        </div>
        <div
          className="border border-[#7b7d7e] p-1 rounded-sm px-2 cursor-pointer border-1"
          size="sm"
        >
          9
        </div>
        <div
          className="border border-[#7b7d7e] p-1 rounded-sm px-2 cursor-pointer border-1"
          size="sm"
        >
          10
        </div>
        <div
          className="border border-[#7b7d7e] p-1 rounded-sm px-2 cursor-pointer border-1"
          size="sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-[#1fb9fc]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
