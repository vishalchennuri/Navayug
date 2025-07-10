import ConnectButton from "../../ui/connectButton";

export default function HeroSectionAbout() {
  return (
    <section className="pt-12 px-6 md:px-10 lg:px-16 bg-[url('/gridimg.png')] bg-cover bg-center flex items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LEFT: Text Content */}
        <div className="flex-1 text-left lg:text-left">
          <h1 className="leading-tight text-[var(--color-dark)] mb-4">
            <img
              src="/About/Designing-Tomorrow.png"
              alt="Designing Tomorrow"
              className="w-full max-w-md sm:max-w-xl mb-2 mx-auto lg:mx-0"
            />
            <img
              src="/About/dominance.png"
              alt="Digital Dominance"
              className="w-full max-w-md sm:max-w-xl mx-auto lg:mx-0"
            />
          </h1>

          <p className="text-base sm:text-lg text-[var(--color-soft-gray)] mt-2 mb-8 tracking-tight text-center md:text-left leading-snug font-text max-w-xl mx-auto lg:mx-0">
            In a world of noise, we build signals
          </p>

          <div className="flex flex-row justify-center lg:justify-start gap-4 flex-wrap">
            <ConnectButton to="/contact" label="LETS CONNECT" />
          </div>
        </div>

        {/* RIGHT: Hero Image */}
        <div className="flex-1 flex justify-center items-end md:mt-10 lg:mt-0">
          <img
            src="/About/hero.png"
            alt="Hero Visual"
            className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
