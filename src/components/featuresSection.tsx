import SectionHeader from "../ui/sectionHeader";
import ConnectButton from "../ui/connectButton";
import FeatureCards from "../ui/featuresCard";


export default function FeaturesSection() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-20">
      <SectionHeader title="FEATURES" />

      {/* Header and CTA */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
        <div className="flex-1">
          <h2 className="text-3xl lg:text-4xl font-display font-text text-[var(--color-dark)] mt-2 leading-tight tracking-tight">
            Why Partner With Us?
          </h2>
          <p className="mt-2 text-base lg:text-2xl font-text text-[var(--color-soft-gray)] tracking-tight leading-snug font-medium">
            Three principles that define our work
          </p>
        </div>

        <div className="w-full lg:w-auto">
          <ConnectButton label="LET'S CONNECT" to="/services" />
        </div>
      </div>

     <FeatureCards/>
    </section>
  );
}
