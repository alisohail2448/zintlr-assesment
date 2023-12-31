import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
 
export function TabsComponent() {
  const data = [
    {
      label: "Dashboard",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Profile",
      value: "profile",
      icon: UserCircleIcon,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Settings",
      value: "settings",
      icon: Cog6ToothIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
      <TabsHeader className="w-[300px]" >
        {data.map(({ label, value, icon }) => (
          <Tab
            key={value}
            value={value}
            className={`border-b-[1px] ${
              activeTab === value ? "border-blue-500" : ""
            }`}
          >
            <div className={`flex items-center gap-2 ${activeTab === value ? "text-blue-500" : "text-[#3e4551]"} font-[500] text-[14px]`}>
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      {/* <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody> */}
    </Tabs>
  );
}