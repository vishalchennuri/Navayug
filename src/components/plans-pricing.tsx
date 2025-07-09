import ConnectButton from "../ui/connectButton";
import PricingCard from "../ui/PricingCards";
import SectionHeader from "../ui/sectionHeader";
import pricingPlans from "../data/plans-pricing.json";

export default function PricingSection() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-20">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
        <div className="flex-1">
          <SectionHeader title="PLANS & PRICING" />
          <h2 className="text-xl lg:text-3xl font-display font-semibold text-[var(--color-dark)] mt-2 leading-tight tracking-tight">
            Plans That Scale With Your Ambition
          </h2>
          <p className="mt-2 text-base lg:text-xl font-text text-[var(--color-soft-gray)] tracking-tight leading-snug font-medium">
            Transparent Pricing For Measurable Results—No Hidden Fees, No Fluff
          </p>
        </div>

        <div className="w-full lg:w-auto">
          <ConnectButton label="KNOW MORE" to="/pricing" />
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pricingPlans.slice(0, 4).map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="flex justify-center flex-wrap gap-4">
          {pricingPlans.slice(4, 7).map((plan, index) => (
            <div className="w-full sm:w-[300px] lg:w-[280px]" key={index + 4}>
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
