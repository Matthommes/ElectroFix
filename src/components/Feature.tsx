import {
  CheckBadgeIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

interface FeatureProps {
  name: string;
  description: string;
  icon: React.ElementType;
}

const features: FeatureProps[] = [
  {
    name: "On-Demand Service",
    description:
      "Experience the ultimate convenience with our on-demand home service. Our expert technicians bring our state-of-the-art mobile workshop directly to your doorstep, ensuring hassle-free and reliable auto electrical solutions.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Quality Assurance",
    description:
      "Rest easy knowing your vehicle is in safe hands. Our unwavering commitment to quality ensures that every service meets the highest standards, giving you confidence in the optimal performance of your vehicle.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Efficient Queue System",
    description:
      "Say goodbye to long waits. Our streamlined queue system ensures swift and efficient service, minimizing your downtime and getting you back on the road without unnecessary delays.",
    icon: UserGroupIcon,
  },
  {
    name: "Advanced Security Measures",
    description:
      "Trust in our cutting-edge security protocols. Your vehicle's safety is our top priority, and we employ advanced security measures to protect your auto electrical system and safeguard your investment.",
    icon: LockClosedIcon,
  },
];

const Feature: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Elevate Your Vehicle's Performance with Our Exclusive Features
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore the comprehensive range of cutting-edge features that
            empower your vehicle for optimum performance and reliability.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <dl className="grid max-w-full grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 lg:text-left">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative sm:px-20 pl-14 pr-2 pb-10 shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl text-left "
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex sm:h-14 sm:w-14 w-10 h-10  items-center justify-center rounded-lg bg-blue-600">
                    {
                      <feature.icon
                        className="sm:h-10 sm:w-10 h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    }
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 ">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Feature;
