
import SectionHeader from "../ui/sectionHeader";
import ConnectButton from "../ui/connectButton";

export default function AboutUsSection() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-20">
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start max-w-7xl mx-auto">
        <div className="w-full md:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
          <SectionHeader title="ABOUT US" />
        <img
  src="/about.png"
  alt="About graphic"
  className="mt-6 w-2/3 md:w-[80%] max-w-[250px] h-auto object-contain"
/>

        </div>

        {/* Text Content */}
        <div className="w-full md:w-[65%]">
          <p className="text-2xl lg:text-3xl font-text font-medium text-[var(--color-dark)] leading-snug tracking-tight">
            NAVAYUG specializes in strategic digital solutions—from brand identity to
            performance–driven web development. We fuse{" "}
            <span className="font-[InstrumentSerifItalic] italic text-[var(--color-secondary)] font-medium">
              design, technology,
            </span>{" "}
            and{" "}
            <span className="font-[InstrumentSerifItalic] italic text-[var(--color-secondary)] font-medium">
              marketing
            </span>{" "}
            into seamless experiences that cut through the digital noise and deliver measurable results.
          </p>

          <p className="mt-6 text-xl lg:text-2xl text-[var(--color-soft-gray)] leading-snug font-medium">
            What defines us is our ruthless focus on execution. We merge analytical precision
            with creative risk-taking, balancing data with intuition to craft solutions that
            don’t just follow trends—they set them.
          </p>

          <div className="mt-8">
            <ConnectButton label="MORE ABOUT US" to="/about" />
          </div>
        </div>
      </div>
    </section>
  );
}
