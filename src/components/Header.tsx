import { useMediaQuery } from "react-responsive";
import HamburgerMenu from "./Menu";
export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  return (
    <header className="flex flex-col xs:flex-row justify-between items-center w-full mt-3 border-b sm:pb-8 pb-7 sm:px-4 px-2 border-gray-300 gap-2">
      <div className=" flex justify-between items-center w-full ">
        <h1 className=" font-extrabold sm:text-4xl text-2xl ">ElectroFix</h1>

        {isMobile ? (
          <HamburgerMenu />
        ) : (
          <div >
            <button className=" border rounded-lg px-4 py-2 mr-2 font-bold border-black ">
              Call an engineer
            </button>
            <button className=" border px-4 py-2 rounded-lg bg-black font-bold text-white  hover:bg-gray-600 hover:text-gray-300">
              Shop
            </button>
          </div>
        )}

        {/* */}
      </div>
    </header>
  );
}
