import React from "react";

interface TestimonialProps {
  name: string;
  title: string;
  quote: string;
  avatar: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Olawale Akintola",
    title: "Happy Customer",
    quote:
      "ElectroFix provided outstanding service for my vehicle. Their team was efficient, professional, and fixed the issue promptly. I highly recommend their auto electrical services.",
    avatar: "",
  },
  {
    name: "Matthew Akahomen",
    title: "Satisfied Driver",
    quote:
      "I'm impressed with the expertise of ElectroFix. They diagnosed and repaired my car's electrical problem with precision. Excellent service from a dedicated team!",
    avatar: "",
  },
  // Add more testimonials as needed
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Customers Say
          </p>
        </div>
        <div className="mt-16 space-y-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden lg:max-w-2xl"
            >
              <div className="bg-white p-6">
                <blockquote className="mb-4 pb-4 border-b border-gray-300">
                  <p className="text-lg font-semibold text-gray-900">
                    {testimonial.quote}
                  </p>
                </blockquote>
                <div className="flex justify-between items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
