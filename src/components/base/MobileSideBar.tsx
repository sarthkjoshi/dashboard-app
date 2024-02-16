import React from "react";
import {
  BarChart,
  Wallet,
  Newspaper,
  BellRing,
  Paperclip,
  Brush,
  Wrench,
  Menu,
  SheetIcon,
  TrendingUp,
  AreaChart,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Logo from "./Logo";

export default function MobileSideBar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="w-full h-full" />
      </SheetTrigger>
      <SheetContent side={"left"} className=" bg-black">
        <aside className="flex h-screen w-64 flex-col overflow-y-auto  px-5 py-8 bg-black">
          <Link href="#">
            <Logo />
          </Link>
          <div className="mt-6 flex flex-1 flex-col justify-between">
            <nav className="-mx-3 space-y-6 ">
              <div className="space-y-3 ">
                <label className="px-3 text-xs font-semibold uppercase text-white">
                  analytics
                </label>
                <Link
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700  "
                  href="/dashboard"
                >
                  <BarChart className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">Dashboard</span>
                </Link>
                <Link
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="/dashboard/datatable"
                >
                  <SheetIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">Data Table</span>
                </Link>
                <Link
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="/dashboard/trends"
                >
                  <TrendingUp className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">
                    Trend Analysis
                  </span>
                </Link>
              </div>
              <div className="space-y-3 ">
                <label className="px-3 text-xs font-semibold uppercase text-white">
                  content
                </label>
                <Link
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="/dashboard/charts"
                >
                  <AreaChart className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">Charts</span>
                </Link>
                <Link
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="#"
                >
                  <BellRing className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">
                    Notifications
                  </span>
                </Link>
                <Link
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="#"
                >
                  <Paperclip className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">Checklists</span>
                </Link>
              </div>

              <div className="space-y-3 ">
                <label className="px-3 text-xs font-semibold uppercase text-white">
                  Customization
                </label>
                <Link
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="#"
                >
                  <Brush className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">Themes</span>
                </Link>
                <Link
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="#"
                >
                  <Wrench className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">Setting</span>
                </Link>
              </div>
            </nav>
          </div>
        </aside>
      </SheetContent>
    </Sheet>
  );
}
