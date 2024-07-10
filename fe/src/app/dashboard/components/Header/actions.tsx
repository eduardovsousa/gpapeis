import SettingsIcon from "@/components/icons/Settings";
import ProductIcon from "@/components/icons/Product";
import StockIcon from "@/components/icons/Stock";
import MenuIcon from "@/components/icons/Menu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export default function useHeaderController() {
  const paths = [
    { title: "Produtos", icon: <ProductIcon className="h-8 w-8 stroke-white" /> },
    { title: "Estoque", icon: <StockIcon className="h-8 w-8 stroke-white" /> },
    { title: "Configuracoes", icon: <SettingsIcon className="h-8 w-8 stroke-white" /> },
    { title: "Menu", icon: <MenuIcon className="h-8 w-8 stroke-white" /> },
  ];

  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);


  const matchingPath = paths.find(
    (path) => path.title.toLowerCase() === pathname.split("/")[2]?.toLowerCase()
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return {
    isMounted,
    matchingPath
  }
}