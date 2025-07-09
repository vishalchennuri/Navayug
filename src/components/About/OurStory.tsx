

import ConnectButton from "../../ui/connectButton";
import SectionHeader from "../../ui/sectionHeader";


export default function OurStorySection() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="hidden md:flex items-start gap-16 lg:gap-20">
          <div className="flex-1 max-w-md">
            <SectionHeader title="OUR STORY" circleColor="var(--color-soft-gray)" />
            <p className="text-[var(--color-soft-gray)] text-xl font-medium leading-relaxed mt-6">
              Our approach is simple: fewer promises, more proof. We measure success in revenue spikes, not retweets. In
              customer retention, not fleeting likes. Every pixel, post, and line of code serves a purpose—yours. This
              isn't just work. It's a rejection of complacency. A commitment to building digital solutions that don't
              just look good, but work. Relentlessly.
            </p>
          </div>
          <div className="flex-1">
            <p className="text-gray-900 text-xl lg:text-2xl font-text leading-tight tracking-tight mb-8">
              NAVAYUG wasn't built to follow the agency playbook. We saw an industry obsessed with vanity metrics—
              <span className=""> beautiful websites that didn't convert</span>, viral posts that didn't sell,
              <span className=""> "branding" without strategy</span>. So we rewrote the rules.
            </p>
            <ConnectButton to="/contact" label="LETS CONNECT" />
          </div>
        </div>

        <div className="md:hidden">
          <div className="text-center mb-6">
            <SectionHeader title="Our Story" circleColor="var(--color-soft-gray)" />
          </div>

          <div className="mb-8">
            <p className="text-gray-900 text-lg font-semibold leading-tight tracking-tight mb-6">
              NAVAYUG wasn't built to follow the agency playbook. We saw an industry obsessed with vanity metrics—
              <span className="font-bold"> beautiful websites that didn't convert</span>, viral posts that didn't sell,
              <span className="font-bold"> "branding" without strategy</span>. So we rewrote the rules.
            </p>
          </div>

          <div className="">
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Our approach is simple: fewer promises, more proof. We measure success in revenue spikes, not retweets. In
              customer retention, not fleeting likes. Every pixel, post, and line of code serves a purpose—yours. This
              isn't just work. It's a rejection of complacency. A commitment to building digital solutions that don't
              just look good, but work. Relentlessly.
            </p>
            <div className="">
              <ConnectButton to="/contact" label="LETS CONNECT" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
