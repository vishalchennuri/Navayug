import ConnectButton from "../ui/connectButton";

export default function HeroSection() {
  return (
    <section className="pt-45 md:pt-0 md:min-h-screen px-4 md:px-10 lg:px-16 flex flex-col bg-[url('/gridimg.png')] bg-cover bg-center">
      <div className="flex-1 flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
        <h1 className="leading-tight text-[var(--color-dark)]">
          <img
            src="/Transform.png"
            alt="Transform Your"
            className="w-full max-w-md sm:max-w-xl mb-2"
          />
          <img
            src="/digital.png"
            alt="Digital Presence"
            className="w-full max-w-md sm:max-w-xl"
          />
        </h1>

        <p className="mt-6 text-[var(--color-gray)] max-w-xl">
          <img src="/herosubtitle.png" alt="Hero Subtitle" />
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <ConnectButton to="/contact" label="LETS CONNECT" />
          {/* <button className="bg-[var(--color-dark)] text-white px-5 py-2.5 rounded-full shadow-sm">
            PLANS & PRICING
          </button> */}
        </div>
      </div>
    </section>
  );
}
