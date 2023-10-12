import { useParams } from "react-router-dom";

interface FeatureProps {
  name: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    name: "On-Demand Service",
    description:
      "Experience the ultimate convenience with our on-demand home service. Our expert technicians bring our state-of-the-art mobile workshop directly to your doorstep, ensuring hassle-free and reliable auto electrical solutions.",
  },
  {
    name: "Quality Assurance",
    description:
      "Rest easy knowing your vehicle is in safe hands. Our unwavering commitment to quality ensures that every service meets the highest standards, giving you confidence in the optimal performance of your vehicle.",
  },
  {
    name: "Efficient Queue System",
    description:
      "Say goodbye to long waits. Our streamlined queue system ensures swift and efficient service, minimizing your downtime and getting you back on the road without unnecessary delays.",
  },
  {
    name: "Advanced Security Measures",
    description:
      "Trust in our cutting-edge security protocols. Your vehicle's safety is our top priority, and we employ advanced security measures to protect your auto electrical system and safeguard your investment.",
  },
];

const DetailedFeatures = () => {
  const { featureIndex } = useParams<{ featureIndex: string }>();

    console.log(featureIndex);
    
  const index = 2

  console.log(index);

  if (isNaN(index) || index < 0 || index >= features.length) {
    // history.push("/");
    return null;
  }

  const selectedFeature = features[index];
  return (
    <>
      <h1>{selectedFeature.name}</h1>
      <p>{selectedFeature.description}</p>
    </>
  );
};

export default DetailedFeatures;
