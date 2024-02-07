import React from "react";
import { Search } from "lucide-react";

import MobileSideBar from "./MobileSideBar";
import AvatarDropDown from "../common/AvatarDropDown";

export default function NavBar() {
  return (
    <div className=" w-full bg-slate-300   z-20   sticky top-0 flex   drop-shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-center md:hidden w-11 h-10 text-center ">
          <MobileSideBar />
        </div>
        <div className="inline-flex items-center space-x-2">
          <span className="hidden md:block">
            <Search />
          </span>
          <span className="font-bold">
            <div className="flex grow justify-end">
              <input
                className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Serach"
              ></input>
            </div>
          </span>
        </div>

        <div className="ml-2 mt-2 ">
          <span className="relative inline-block ">
            <AvatarDropDown />

            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
          </span>
        </div>
      </div>
    </div>
  );
}
