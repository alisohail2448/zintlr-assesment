import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  HomeIcon,
  ArchiveBoxIcon,
  BoltIcon,
  CubeTransparentIcon,
  UsersIcon,
  InboxStackIcon,
  QueueListIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
// import { sidebarData } from "./constants/constants";
import logo from "../assets/zintlr.png";
import moneyBag from "../assets/money-bag.svg"

const sidebarData = [
  {
    id: 1,
    name: "Dashboard",
    icon: HomeIcon,
  },
  {
    id: 2,
    name: "Bullion Operations",
    icon: ArchiveBoxIcon,
  },
  {
    id: 3,
    name: "Transaction",
    icon: BoltIcon,
  },
  {
    id: 4,
    name: "Your Network",
    icon: CubeTransparentIcon,
  },
  {
    id: 5,
    name: "Consumers",
    icon: UsersIcon,
    active: true,
  },
  {
    id: 6,
    name: "Other Operations",
    icon: InboxStackIcon,
  },
  {
    id: 7,
    name: "Manage Bank Accounts",
    icon: BuildingLibraryIcon,
  },
  {
    id: 8,
    name: "FAQ",
    icon: QueueListIcon,
  },
  {
    id: 9,
    name: "Customize Dashboard",
    icon: Cog6ToothIcon,
  },
];

export function DashboardSidebar() {
  return (
    <Card className="h-[100%] w-full max-w-[20rem] p-1 bg-[#f6fafc]">
      <div className="mb-2 p-4 ">
        <img src={logo} className="w-[110px] " alt="" />
      </div>
      <div className="flex flex-col gap-4">
        {sidebarData.map((item) => {
          return (
            <ListItem
              key={item.id}
              className={
                item.active
                  ? "text-white bg-[#4daeff] gap-2 flex items-center font-bold py-2 px-4 rounded-[50px]"
                  : "text-[#7b7d7e] gap-2 flex items-center px-4"
              }
            >
              <ListItemPrefix>
                <item.icon
                  className={
                    item.active
                      ? "h-7 w-7 text-[#ffffff] font-bold"
                      : "h-7 w-7 text-[#313945]"
                  }
                />
              </ListItemPrefix>
              {item.name}
            </ListItem>
          );
        })}
        <div className="text-[#4a4b4c] gap-2 flex py-2 px-4  flex-col">
          <p>Your Stock</p>
          <div className="bg-[#4daeff] w-[200px] rounded-r-[8px] rounded-bl-[8px] py-4 pr-2 pl-4">
            <div className="flex flex-col bg-white rounded-[10px] py-5 relative">
              <img src={moneyBag} className="w-[35px] absolute top-[-12px] left-[-15px] " style={{ fill: "#ffffff" }} alt="" />
              <div className="flex flex-row justify-between">
                <div className="flex flex-col font-[500] px-2">
                  <p className="text-[15px] text-[#18244a]">TruCoin <span className="text-[#fd874b]" >Gold</span></p>
                  <p className="text-[12px] text-[#6fc759]">{"$6.18(+1.82%)"}</p>
                </div>
                <div className="mr-2 flex items-center font-[500] text-[14px]" >7.3k gm</div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col font-[500] px-2">
                  <p className="text-[15px] text-[#18244a]">TruCoin <span className="text-[#fd874b]" >Gold</span></p>
                  <p className="text-[12px] text-[#6fc759]">{"$6.18(+1.82%)"}</p>
                </div>
                <div className="mr-2 flex items-center justify-center font-[500] text-[14px]" >8.3k gm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
