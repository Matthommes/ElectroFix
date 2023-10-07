import {
  CheckBadgeIcon,
  WrenchScrewdriverIcon,
  ClockIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Specializations",
    description:
      "We pride ourselves on being specialists in the intricate world of auto electrical systems. Our focused expertise sets us apart in the market, allowing us to deliver tailored solutions with precision and efficiency. ",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Quality Assurance",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: ClockIcon,
  },
];

export default function Feature() {
  return (
    <div className="bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Everything you need to get your vehicle up and running
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 lg:text-left">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative px-20 pb-10  shadow-lg hover:shadow-xl  rounded-2xl w-[33rem]"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-14 w-14  items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon
                      className="h-10 w-10 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 mb-20">
                  {feature.description}
                </dd>
                <div className="flex absolute bottom-1 py-4">
                  <button className=" mr-2 font-bold text-lg text-gray-700 peer">
                    Learn more
                  </button>
                  <ArrowRightIcon
                    width={24}
                    color="blue"
                    className=" cursor-pointer peer-hover:translate-x-1"
                  />
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
