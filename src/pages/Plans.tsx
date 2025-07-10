import PlansComp from "../components/Plan-Pricing/Plan-pricing";
import FadeInWhenVisible from "../utils/FadeInWhenVisible";

export default function PlansAndPricing() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        <FadeInWhenVisible><PlansComp /></FadeInWhenVisible>
      </div>
    </section>
  );
}
