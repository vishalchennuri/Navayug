
"use client";

import { ArrowRight } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  currency: string;
  period: string;
  features: string[];
  buttonText: string;
  onButtonClick?: () => void;
}

export default function PricingCard({
  title,
  price,
  currency,
  period,
  features,
  buttonText,
  onButtonClick,
}: PricingCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl py-4 px-6 min-h-[460px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Title */}
      <h3 className="font-display text-xl font-semibold text-[var(--color-dark)] mb-3">
        {title}
      </h3>

      {/* Pricing */}
      <div className="mb-3">
        <p className="font-text text-sm text-[var(--color-soft-gray)] mb-1">
          Starting at
        </p>
        <div className="flex items-baseline gap-1">
          <span className="font-display text-2xl font-semibold text-[var(--color-primary)]">
            {currency}
          </span>
          <span className="font-display text-2xl font-semibold text-[var(--color-primary)]">
            {price}
          </span>
          <span className="font-text text-sm text-[var(--color-primary)]">
            /{period}
          </span>
        </div>
        <hr className="mt-3 border-t border-gray-200 mx-2" />
      </div>

      {/* Features List */}
      <div className="mb-10">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-green-600 font-bold text-sm mt-[2px]">✓</span>
              <span className="font-text text-sm text-[var(--color-dark)]">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <button
        onClick={onButtonClick}
        className="mt-auto w-full bg-[var(--color-light)] hover:bg-gray-200 text-[var(--color-dark)] font-display font-semibold text-sm py-3 px-6 rounded-full transition-colors duration-200 flex items-center justify-center gap-2 group"
      >
        {buttonText}
        <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center group-hover:bg-[var(--color-secondary)] transition-colors duration-200">
          <ArrowRight size={16} className="text-white" />
        </div>
      </button>
    </div>
  );
}
