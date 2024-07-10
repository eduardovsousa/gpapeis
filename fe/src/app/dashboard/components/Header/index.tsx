"use client";
import ThemeSwitch from "@/components/ThemeSwitch";
import Home from "@/components/icons/Home";
import useHeaderController from "./actions";

export default function Header() {
  const { isMounted, matchingPath } = useHeaderController();

  if (!isMounted) {
    return (
      <div className="w-full rounded-b-lg lg:rounded-none min-h-16 lg:min-h-0 max-h-16 h-full flex items-center justify-between py-4 px-5 lg:px-12 bg-purple animate-pulse" />
    );
  }

  return (
    <div className="w-full rounded-b-lg lg:rounded-none max-h-16 h-full flex items-center justify-between py-4 px-5 lg:px-12 bg-purple">
      <div>
        {matchingPath ? (
          <div className="flex items-center space-x-1">
            {matchingPath.icon}
            <span className="font-medium text-white">{matchingPath.title}</span>
          </div>
        ) : (
          <div className="flex items-center space-x-1">
            <Home className="h-8 w-8 stroke-white" />
            <span className="font-medium text-white">Dashboard</span>
          </div>
        )}
      </div>

      <div className="hidden lg:block">
        <ThemeSwitch />
      </div>
    </div>
  );
}
