import { Link } from "react-router-dom";
import Feature from "./Feature";
import Services from "./Services";
import Testimonial from "./Testimonials";
import Footer from "./Footer";

const Landing = () => {
  return (
    <>
      <main className="  w-full flex-col items-center justify-center text-center sm:mt-20 mt-10 ">
        <a
          href="http://twitter.com/matthewakahomen"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex justify-center items-center text-sm text-gray-500 mx-auto mt-4 border sm:w-72 p-1 rounded-lg font-medium hover:text-black"
        >
          Trusted by over &nbsp;
          <span className=" text-blue-600">1 million</span> &nbsp; car owners
        </a>
        <div className="  mx-auto my-8 flex flex-col justify-center items-center text-center">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-800 sm:text-7xl">
            Diagnose and repair your car quickly using our modern OBD2 scanner.
          </h1>
          <h2 className="mx-auto my-10 max-w-xl text-lg sm:text-gray-700  text-gray-900 leading-7">
            Drive hassle-free with our on-the-go auto electrical expertise. From
            pinpoint diagnostics to swift fixes, we bring precision and
            professionalism to your doorstep. Experience the convenience of
            mobile solutions tailored to your schedule. Wherever you are, we’re
            there to keep you moving.
          </h2>

          <button className=" border px-4 py-3 rounded-lg bg-black font-bold text-white hover:bg-gray-600 hover:text-gray-300">
            <Link to="/booking">Book an appointment</Link>
          </button>
        </div>
        <section>
          <Services />
          <h1 className=" text-5xl font-bold">
            Power-Packed <br /> Features
          </h1>
          <Feature />
          <Testimonial />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Landing;
