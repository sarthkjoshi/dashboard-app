import React, { ReactNode } from "react";

import NavBar from "./NavBar";
import SideBar from "./SideBar";
import MobileSideBar from "./MobileSideBar";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar />

      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <NavBar />
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
