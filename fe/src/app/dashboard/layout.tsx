import Header from "./components/Header";
import Nav from "./components/Nav";

export default function CustomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-white dark:bg-light-dark dark:text-white lg:min-h-screen lg:flex overflow-hidden">
        <Nav />
        <div className="bg-gray dark:bg-dark flex-grow">
          <Header />
          <div className="p-2 lg:p-12">
            <div className="w-full pb-16 lg:p-8 lg:min-h-max lg:h-full lg:rounded-lg lg:bg-white text-black dark:text-white lg:dark:bg-light-dark">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
