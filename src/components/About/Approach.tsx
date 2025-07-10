
import SectionHeader from "../../ui/sectionHeader";
import ConnectButton from "../../ui/connectButton";

export default function MethodologySection() {
  const processes = [
    {
      id: 1,
      title: "Deconstruct",
      description:
        "We audit your current assets like forensic analysts—exposing leaks, wasted spend, and hidden opportunities.",
      icon: "/About/box.png",
    },
    {
      id: 2,
      title: "Architect",
      description:
        "Strategic blueprints built for your KPIs, not our portfolio. Every pixel and pixel has a purpose.",
      icon: "/About/architect.png",
    },
    {
      id: 3,
      title: "Execute",
      description:
        "Agile sprints deliver measurable progress weekly. No black boxes—you see builds in real-time.",
      icon: "/About/export.png",
    },
    {
      id: 4,
      title: "Compound",
      description:
        "We don't launch and leave. Monthly optimization sprints turn 10% gains into 100% growth.",
      icon: "/About/polygon.png",
    },
  ];

  return (
    <section className="px-3 md:px-10 lg:px-16 py-20 bg-white">
       <div className="max-w-7xl mx-auto">
       <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
         <div className="flex-1">
           <SectionHeader title=" OUR APPROACH" />
           <h2 className="text-2xl lg:text-3xl font-text font-semibold text-[var(--color-dark)] mt-2 leading-tight tracking-tight">
             How we Guarantee Results
           </h2>
           <p className="mt-2 text-base lg:text-xl font-text text-[var(--color-soft-gray)] tracking-tighter leading-snug font-medium">
            No Theory.No Fluff. Just A Battle-Tested Process That Delivers.
           </p>
         </div>
         <div className="w-full lg:w-auto">
           <ConnectButton label="KNOW MORE" to="/contact" />
         </div>
       </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {/* Text-Only Box */}
          <div className="relative aspect-auto sm:aspect-square h-fit bg-transparent flex items-start p-4 rounded-none border border-transparent">
            <p className="font-text text-[var(--color-soft-gray)] text-sm lg:text-base leading-snug font-medium tracking-tight">
              We don't do guesswork. NAVAYUG's approach is surgical—diagnosing weaknesses, building conversion-focused solutions, and scaling what works.
            </p>
          </div>

          {/* Process Cards */}
          {processes.map(({ id, title, description, icon }) => (
            <div
              key={id}
              className="relative aspect-square bg-[var(--color-light)] overflow-hidden rounded-none border border-gray-200 p-6"
            >
              {/* Icon */}
              <div className="absolute top-4 right-4 w-20 h-20 md:w-24 md:h-24">
                <img
                  src={icon}
                  alt={title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text */}
              <div className="absolute bottom-4 left-6 right-6">
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-[var(--color-dark)] mb-2">
                  {title}
                </h3>
                <p className="font-text text-sm lg:text-base text-[var(--color-soft-gray)] leading-snug font-medium tracking-tight">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
}
