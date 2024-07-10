import ThemeSwitch from "@/components/ThemeSwitch";

export default function Settings() {
  return (
    <div className="h-screen flex items-start justify-start">
      <div className="hidden lg:block">
        <h1>Página de configuração</h1>
      </div>
      <div className="flex items-center justify-between w-full py-2 px-2 rounded-lg shadow-black/20 shadow-md lg:hidden">
        <h1 className="">Trocar tema</h1>
        <ThemeSwitch />
      </div>

    </div>
);
}
