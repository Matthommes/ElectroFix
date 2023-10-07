export default function Header() {
  return (
    <header className="flex flex-col xs:flex-row justify-between items-center w-full mt-3 border-b  sm:px-4  border-gray-300 gap-2">
      <div className=" flex justify-between items-center pb-8 w-full py-6">
        <h1 className=" font-extrabold text-3xl">ElectroFix</h1>
        <div className="flex">
          <button className=" border rounded-lg px-4 py-2 mr-2 font-bold border-black">
            Call an engineer
          </button>
          <button className=" border px-4 py-2 rounded-lg bg-black font-bold text-white hover:bg-gray-600 hover:text-gray-300">
            Shop
          </button>
        </div>
      </div>
    </header>
  );
}
