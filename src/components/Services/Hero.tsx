import ConnectButton from "../../ui/connectButton";

export default function HeroSectionAbout() {
  return (
    <section className="min-h-[calc(100vh-80px)] px-6 md:px-10 lg:px-16 bg-[url('/gridimg.png')] bg-cover bg-center flex items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row-reverse items-center justify-between gap-16">
        
        <div className="flex-1 text-left">
          <h1 className="leading-tight text-[var(--color-dark)] mb-4">
            <img
              src="/Services/Precision-Led.png"
              alt="Precision Led"
              className="w-full max-w-sm sm:max-w-md mb-2"
            />
            <img
              src="/Services/DigitalText.png"
              alt="Digital Scaling"
              className="w-full max-w-sm sm:max-w-md"
            />
          </h1>

          <p className="text-base sm:text-lg text-[var(--color-soft-gray)] mt-2 mb-6 tracking-tight leading-snug font-text max-w-xl">
            We architect always-on systems—not one-off projects.
          </p>

          <div className="flex flex-row gap-4 flex-wrap justify-center lg:justify-start">
            <ConnectButton to="/contact" label="LETS CONNECT" />
            <button
              className="inline-flex items-center justify-center bg-[var(--color-dark)] text-white text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm hover:bg-black transition whitespace-nowrap min-w-0 max-w-full"
            >
              PLANS & PRICING
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-end mt-10 lg:mt-0">
          <img
            src="/Services/servicesHero.png"
            alt="Hero Visual"
            className="h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
