import Feature from "./Feature";

const Landing = () => {
  return (
    <>
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-16 background-gradient">
        <a
          href="http://twitter.com/matthewakahomen"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex justify-center items-center text-sm text-gray-500 mx-auto mt-4 border w-72 p-1 rounded-lg font-medium hover:text-black"
        >
          Trusted by over &nbsp;
          <span className=" text-green-600">1 million</span> &nbsp; car owners
        </a>
        <div className="  mx-auto my-8 flex flex-col justify-center items-center text-center">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-800 sm:text-7xl">
            Diagnose and repair your car quickly using our AI-powered OBD2
            scanner.
          </h1>
          <h2 className="mx-auto my-10 max-w-xl text-lg sm:text-gray-700  text-gray-900 leading-7">
            Your one-stop shop for all your car repair, spare parts and
            maintenance needs.
          </h2>
          <button className=" border px-4 py-3 rounded-lg bg-black font-bold text-white hover:bg-gray-600 hover:text-gray-300">
            Call an engineer
          </button>
        </div>
        <section>
          <div className="py-4">
            <h1 className="font-bold tracking-normal py-4 text-5xl text-gray-800 sm:text-7xl">
              Our Services
            </h1>
            <h3 className=" py-8 mx-auto max-w-4xl font-display text-2xl font-small tracking-normal text-black sm:text-2xl">
              Discover top-notch auto electrical services at{" "}
              <span className="font-bold text-gray-800">ElectroFix</span>. From
              diagnostics to installations, we ensure your vehicle's electrical
              systems perform at their best. Our skilled technicians bring
              precision and expertise to every task, prioritizing quality in both
              service and parts. Explore our range of services designed to keep
              you on the road with reliability and efficiency."
            </h3>
          </div>
          <h1 className=" text-5xl font-bold">
            Power-Packed <br /> Features
          </h1>

          <Feature />
        </section>
      </main>
    </>
  );
};

export default Landing;
