import SectionHeader from "../../ui/sectionHeader";
import servicesData from "../../data/services.json"; 
import ServiceCard from "./ServiceCards";

export default function ServicesComp() {
  return (
    <section className="px-3 md:px-10 lg:px-16 py-20 w-full max-w-7xl mx-auto bg-white">
      <div>
        <SectionHeader title="SERVICES " circleColor="var(--color-soft-gray)" />
        
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            points={service.points}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
}
