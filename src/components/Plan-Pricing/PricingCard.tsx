import { Check } from "lucide-react";
import ConnectButton from "../../ui/connectButton";

interface PricingCardProps {
  id: string;
  plan: string;
  description: string;
  features: string[];
  price: string;
}

export default function PricingCard({
  plan,
  features,
  price,
}: PricingCardProps) {
  return (
    <div className="flex flex-col min-h-[400px] h-full border border-gray-200 p-6  hover:shadow-md transition-all duration-200 bg-white">
      
      <h3 className="text-lg font-semibold text-[var(--color-dark)]">{plan}</h3>

      <div className="mt-2 mb-3">
        <span className="text-2xl font-bold text-[var(--color-primary)]">{price}</span>
        <div className="border-t border-gray-200 mt-2"></div>
      </div>

      <div className="flex-1">
        <ul className="mt-4 space-y-3 text-sm text-[var(--color-dark)]">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-400 text-white text-xs">
                <Check size={12} />
              </span>
                <span className="font-medium text-md tracking-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-6">
        <ConnectButton label="GET STARTED" to="/contact" />
      </div>
    </div>
  );
}
