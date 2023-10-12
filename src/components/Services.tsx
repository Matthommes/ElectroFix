const Services = () => {
  const services = [
    {
      title: "Diagnostic Services",
      content:
        "Our advanced diagnostic tools help identify and troubleshoot complex electrical issues in your vehicle. From intricate wiring problems to malfunctioning components, we provide precise diagnostics to keep your vehicle running smoothly.",
    },
    {
      title: "Key Programming",
      content:
        "Whether you need a new key or your existing one reprogrammed, our skilled technicians have the expertise to handle key programming for a wide range of vehicles. We ensure seamless integration with your vehicle's electrical system.",
    },
    {
      title: "Electrical Troubleshooting",
      content:
        "Our experienced technicians specialize in thorough electrical troubleshooting. We meticulously identify and fix electrical problems, ensuring that your vehicle's electrical system operates at optimal performance.",
    },
    {
      title: "General Repairs",
      content:
        "From addressing wiring issues to conducting component replacements, our team is equipped to handle a diverse range of electrical repairs. We prioritize quality parts and workmanship for reliable and lasting repairs.",
    },
  ];

  return (
    <div className="py-8">
      <h1 className="font-bold text-4xl text-gray-800 sm:text-5xl">
        Our Services
      </h1>
      <p className="py-8 mx-auto max-w-4xl font-display text-lg text-black sm:text-xl">
        Discover top-notch auto electrical services at{" "}
        <span className="font-bold text-gray-800">ElectroFix</span>. From
        diagnostics to installations, we ensure your vehicle's electrical
        systems perform at their best. Our skilled technicians bring precision
        and expertise to every task, prioritizing quality in both service and
        parts. Explore our range of services designed to keep you on the road
        with reliability and efficiency.
      </p>
      <div className="flex flex-wrap gap-8 justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md max-w-md hover:scale-105 transition duration-300 ease-in-out mx-2"
          >
            <h2 className="font-bold text-xl mb-4">{service.title}</h2>
            <p className="text-gray-700">{service.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
