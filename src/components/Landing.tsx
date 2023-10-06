const Landing = () => {
  return (
    <>
      <main className=" px-36 py-8">
        <div className=" flex justify-between items-center pb-8">
          <h1 className=" font-extrabold text-3xl">ElectroFix</h1>
          <button className=" border px-4 py-2 rounded-lg bg-black font-bold text-white hover:bg-gray-600 hover:text-gray-300">
            Shop
          </button>
        </div>
        <hr className=" border-t border-gray-200 h-4" />

        <a
          href="http://twitter.com/matthewakahomen"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex justify-center items-center text-sm text-gray-500 mx-auto mt-16 border w-72 p-1 rounded-lg font-medium hover:text-black"
        >
          Trusted by over &nbsp;
          <span className=" text-green-600">1 million</span> &nbsp; car owners
        </a>
        <div className=" w-1/2  mx-auto my-8 flex flex-col justify-center items-center text-center">
          <h1 className=" text-7xl font-extrabold ">
            Diagnose and repair your car Quickly using our <br /> AI-powered OBD2
            scanner.
          </h1>
          <p className=" text-2xl my-5">
            Your one-stop shop for all your car repair, spare parts and
            maintenance needs.
          </p>
          <button className=" border px-4 py-3 rounded-lg bg-black font-bold text-white hover:bg-gray-600 hover:text-gray-300">
            Call an engineer
          </button>
        </div>
      </main>
    </>
  );
};

export default Landing;
