import services from "../data/servicecards.json";
import ConnectButton from "../ui/connectButton";
import SectionHeader from "../ui/sectionHeader";
import ServiceCard from "../ui/serviceCard";

export default function ServicesSection() {
  return (
    <section className="px-4 md:px-10 lg:px-16 py-20">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
        <div className="flex-1">
          <SectionHeader title="SERVICES" />
          <h2 className="text-[28px] lg:text-3xl font-text text-[var(--color-dark)] mt-2 leading-tight tracking-tight">
            Precision–Crafted Digital Services
          </h2>
          <p className="mt-2 text-base lg:text-xl font-text text-[var(--color-soft-gray)] tracking-tight leading-snug font-medium">
            We Deliver Specialized Solutions, Not Templates. Every Strategy<br className="hidden sm:block" />
            Is Built For Your Brand&apos;s Unique Needs
          </p>
        </div>

        <div className="w-full lg:w-auto">
          <ConnectButton label="KNOW MORE" to="/services" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            id={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
}
