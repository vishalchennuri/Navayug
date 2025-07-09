import React from "react";
import features from "../data/features.json";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

const DashedBorderBox = ({ children }: { children: React.ReactNode }) => (
  <div className="relative bg-white p-4 rounded-lg min-h-[300px] shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="absolute inset-0 rounded-lg pointer-events-none z-0 border-2 border-transparent">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[length:20px_1px] bg-repeat-x bg-[linear-gradient(to_right,_var(--color-dark)_10px,_transparent_10px)]" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[length:20px_1px] bg-repeat-x bg-[linear-gradient(to_right,_var(--color-dark)_10px,_transparent_10px)]" />
      <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-[length:1px_20px] bg-repeat-y bg-[linear-gradient(to_bottom,_var(--color-dark)_10px,_transparent_10px)]" />
      <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-[length:1px_20px] bg-repeat-y bg-[linear-gradient(to_bottom,_var(--color-dark)_10px,_transparent_10px)]" />
    </div>
    <div className="relative z-10">{children}</div>
  </div>
);

const FeatureCard = ({ image, title, description }: FeatureCardProps) => {
  return (
    <DashedBorderBox>
      <div className="space-y-4 text-left">
        <div className="flex justify-center mb-4">
          <img src={image} alt={title} className="w-full h-full object-contain" />
        </div>
        <h3 className="text-2xl font-bold text-[var(--color-dark)] leading-tight">{title}</h3>
        <p className="text-[var(--color-soft-gray)] font-text text-xl mb-4 font-medium leading-tight tracking-tighter">
          {description}
        </p>
      </div>
    </DashedBorderBox>
  );
};

export default function FeatureCards() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}
