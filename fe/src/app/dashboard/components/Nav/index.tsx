"use client";
import Link from "next/link";
import Logo from "@/components/Logo";
import Config from "@/components/icons/Settings";
import Stock from "@/components/icons/Stock";
import Home from "@/components/icons/Home";
import Menu from "@/components/icons/Menu";
import Product from "@/components/icons/Product";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cs";

export default function Nav() {
  const pathname = usePathname();

  const inactiveLink = <div className="opacity-0 " />;
  const activeLinkDesk = (
    <div className="lg:w-[6px] lg:h-full lg:absolute lg:left-0 lg:bg-purple lg:rounded-md lg:opacity-1 lg:transition-colors lg:duration-300" />
  );

  return (
    <aside className="w-full fixed lg:relative bottom-0 lg:max-w-16 z-50">
      <nav className="bg-[#F5F5F5] dark:bg-dark lg:bg-transparent p-2 flex lg:flex-col items-center justify-center lg:justify-start gap-4  max-h-14 lg:max-h-full h-full">
        <Link href={"/dashboard"} className="hidden lg:block">
          <Logo className="w-10 h-10 mt-1" />
        </Link>
        <Link
          href={"/dashboard"}
          className="w-full flex flex-col items-center justify-center relative"
        >
          {pathname === "/dashboard" ? activeLinkDesk : inactiveLink}
          <div
            className={cn(
              "transition-all ease-linear duration-200",
              pathname === "/dashboard"
                ? "bg-purple lg:bg-transparent p-2 lg:p-0 rounded-full lg:rounded-none -translate-y-1 lg:translate-y-0 transition-all ease-linear duration-200"
                : ""
            )}
          >
            <Home
              className={cn(
                "h-6 w-6 lg:h-8 lg:w-8 stroke-medium-gray lg:stroke-dark-gray dark:stroke-white relative",
                pathname === "/dashboard" ? "stroke-white" : ""
              )}
            />
          </div>
          <span
            className={cn(
              "block lg:hidden text-[10px]",
              pathname === "/dashboard"
                ? "font-semibold pb-4"
                : "text-medium-gray"
            )}
          >
            Home
          </span>
        </Link>

        <Link
          href={"/dashboard/produtos"}
          className="w-full flex flex-col items-center justify-center relative"
        >
          {pathname === "/dashboard/produtos" ? activeLinkDesk : inactiveLink}
          <div
            className={cn(
              "transition-all ease-linear duration-200",
              pathname === "/dashboard/produtos"
                ? "bg-purple lg:bg-transparent p-2 lg:p-0 rounded-full lg:rounded-none -translate-y-1 lg:translate-y-0 transition-all ease-linear duration-200"
                : ""
            )}
          >
            <Product
              className={cn(
                "h-6 w-6 lg:h-8 lg:w-8 stroke-medium-gray lg:stroke-dark-gray dark:stroke-white relative",
                pathname === "/dashboard/produtos" ? "stroke-white" : ""
              )}
            />
          </div>
          <span
            className={cn(
              "block lg:hidden text-[10px]",
              pathname === "/dashboard/produtos"
                ? "font-semibold pb-4"
                : "text-medium-gray"
            )}
          >
            Produtos
          </span>
        </Link>

        <Link
          href={"/dashboard/estoque"}
          className="w-full flex flex-col items-center justify-center relative"
        >
          {pathname === "/dashboard/estoque" ? activeLinkDesk : inactiveLink}
          <div
            className={cn(
              "transition-all ease-linear duration-200",
              pathname === "/dashboard/estoque"
                ? "bg-purple lg:bg-transparent p-2 lg:p-0 rounded-full lg:rounded-none -translate-y-1 lg:translate-y-0 transition-all ease-linear duration-200"
                : ""
            )}
          >
            <Stock
              className={cn(
                "h-6 w-6 lg:h-8 lg:w-8 stroke-medium-gray lg:stroke-dark-gray dark:stroke-white relative",
                pathname === "/dashboard/estoque" ? "stroke-white" : ""
              )}
            />
          </div>
          <span
            className={cn(
              "block lg:hidden text-[10px]",
              pathname === "/dashboard/estoque"
                ? "font-semibold pb-4"
                : "text-medium-gray"
            )}
          >
            Estoque
          </span>
        </Link>

        <Link
          href={"/dashboard/configuracoes"}
          className="w-full flex flex-col items-center justify-center relative"
        >
          {pathname === "/dashboard/configuracoes" ? activeLinkDesk : inactiveLink}
          <div
            className={cn(
              "transition-all ease-linear duration-200",
              pathname === "/dashboard/configuracoes"
                ? "bg-purple lg:bg-transparent p-2 lg:p-0 rounded-full lg:rounded-none -translate-y-1 lg:translate-y-0 transition-all ease-linear duration-200"
                : ""
            )}
          >
            <Config
              className={cn(
                "h-6 w-6 lg:h-8 lg:w-8 stroke-medium-gray lg:stroke-dark-gray dark:stroke-white relative",
                pathname === "/dashboard/configuracoes" ? "stroke-white" : ""
              )}
            />
          </div>
          <span
            className={cn(
              "block lg:hidden text-[10px]",
              pathname === "/dashboard/configuracoes"
                ? "font-semibold pb-4"
                : "text-medium-gray"
            )}
          >
            Configuracoes
          </span>
        </Link>

        <Link
          href={"/dashboard/menu"}
          className="w-full flex flex-col items-center justify-center relative"
        >
          {pathname === "/dashboard/menu" ? activeLinkDesk : inactiveLink}
          <div
            className={cn(
              "transition-all ease-linear duration-200",
              pathname === "/dashboard/menu"
                ? "bg-purple lg:bg-transparent p-2 lg:p-0 rounded-full lg:rounded-none -translate-y-1 lg:translate-y-0 transition-all ease-linear duration-200"
                : ""
            )}
          >
            <Menu
              className={cn(
                "h-6 w-6 lg:h-8 lg:w-8 stroke-medium-gray lg:stroke-dark-gray dark:stroke-white relative",
                pathname === "/dashboard/menu" ? "stroke-white" : ""
              )}
            />
          </div>
          <span
            className={cn(
              "block lg:hidden text-[10px]",
              pathname === "/dashboard/menu"
                ? "font-semibold pb-4"
                : "text-medium-gray"
            )}
          >
            Menu
          </span>
        </Link>
      </nav>
    </aside>
  );
}
