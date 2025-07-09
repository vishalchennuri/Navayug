

import pricingData from "../../data/pricing.json";
import SectionHeader from "../../ui/sectionHeader";
import ConnectButton from "../../ui/connectButton";
import PricingCard from "./PricingCard";

export default function PlansComp() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-20 w-full max-w-7xl mx-auto bg-white">
      <SectionHeader title="PLANS & PRICING" circleColor="var(--color-soft-gray)" />

      {pricingData.map((category) => (
        <div
          key={category.id}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-gray-200 last:border-none"
        >
          <div className="block md:hidden">
            <div className="text-[var(--color-soft-gray)] font-semibold text-md mb-2">
              /{category.id}
            </div>
            <h2 className="text-xl font-semibold text-[var(--color-dark)] mb-4">
              {category.title}
            </h2>
            <div className="space-y-1 text-sm leading-relaxed font-medium font-text text-[var(--color-soft-gray)]">
              {category.descriptionPoints.map((point, idx) => (
                <p key={idx}>{point}</p>
              ))}
            </div>
          </div>

          <div className="hidden md:block col-span-1">
            <div className="text-[var(--color-soft-gray)] font-semibold text-md mt-1">
              /{category.id}
            </div>
          </div>

          <div className="hidden md:block col-span-3">
            <h2 className="text-2xl font-semibold text-[var(--color-dark)] mb-4">
              {category.title}
            </h2>
            <div className="space-y-1 text-sm leading-relaxed font-medium font-text text-[var(--color-soft-gray)]">
              {category.descriptionPoints.map((point, idx) => (
                <p key={idx}>{point}</p>
              ))}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="col-span-1 md:col-span-8">
            <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-2 px-2">
              {category.plans.map((plan) => (
                <div key={plan.name} className="snap-start shrink-0 w-[85%] sm:w-[300px] md:w-auto">
                  <PricingCard
                    id={category.id}
                    plan={plan.name}
                    description=""
                    features={plan.features}
                    price={plan.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-gray-200">
        <div className="block md:hidden">
          <div className="text-[var(--color-soft-gray)] font-semibold text-md mb-2">
            /007
          </div>
          <h2 className="text-xl font-semibold text-[var(--color-dark)] mb-4">
            Website & App Development (Optional Add-On)
          </h2>
          <div className="space-y-1 text-sm leading-relaxed font-medium font-text text-[var(--color-soft-gray)]">
            {[
              "Landing pages (via Webflow/Wix)",
              "Full websites (Wix, Webflow, WordPress)",
              "E-commerce or portfolio sites",
              "Basic app development based on budget.",
              "Google Maps + SEO setup",
              "UI/UX Designing",
              "Development Packages Based On Requirement",
            ].map((point, idx) => (
              <p key={idx}>{point}</p>
            ))}
          </div>
        </div>

        <div className="hidden md:block col-span-1">
          <div className="text-[var(--color-soft-gray)] font-semibold text-md mt-1">
            /007
          </div>
        </div>

        <div className="hidden md:block col-span-5">
          <h2 className="text-2xl font-semibold text-[var(--color-dark)] mb-4">
            Website & App Development (Optional Add-On)
          </h2>
          <div className="space-y-1 text-sm leading-relaxed font-medium font-text text-[var(--color-soft-gray)]">
            {[
              "Landing pages (via Webflow/Wix)",
              "Full websites (Wix, Webflow, WordPress)",
              "E-commerce or portfolio sites",
              "Basic app development based on budget.",
              "Google Maps + SEO setup",
              "UI/UX Designing",
              "Development Packages Based On Requirement",
            ].map((point, idx) => (
              <p key={idx}>{point}</p>
            ))}
          </div>
        </div>

       <div className="col-span-1 md:col-span-6 flex items-center justify-start md:justify-end">
  <ConnectButton label="GET STARTED" to="/contact" />
</div>

      </div>
    </section>
  );
}
