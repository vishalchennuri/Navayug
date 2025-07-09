

import ConnectButton from "../../ui/connectButton";
import SectionHeader from "../../ui/sectionHeader";
import { Zap, BarChart3, Target, TrendingUp } from "lucide-react";

export default function CoreValuesSection() {
  return (
    <section className="px-6 md:px-10 lg:px-10 py-20 bg-white">
         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-12">
        <div className="flex-1">
          <SectionHeader title="OUR CORE VALUES" />
          <h2 className="text-2xl lg:text-3xl font-text font-semibold text-[var(--color-dark)] mt-2 leading-tight tracking-tight">
            4 Uncompromising Principles
          </h2>
        
        </div>

        <div className="w-full lg:w-auto">
          <ConnectButton label="LETS CONNECT" to="/contact" />
        </div>
      </div>

        <div className="flex flex-col md:flex-row gap-6 lg:gap-6">
          <div className="w-full md:w-[70%] flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 h-full p-8 lg:p-10 bg-[var(--color-primary)] text-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between rounded-none">
                <Zap size={32} className="text-white mb-10" />
                <div>
                  <h3 className="font-display text-xl lg:text-2xl font-semibold mb-4 leading-tight">
                    Speak Less, Deliver More
                  </h3>
                  <p className="font-text text-sm lg:text-base leading-relaxed text-white/90">
                    No jargon-filled reports. Just clear results, on time, every time.
                  </p>
                </div>
              </div>

              <div className="flex-1 h-full p-8 lg:p-10 bg-[var(--color-light)] text-[var(--color-dark)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between rounded-none">
                <BarChart3 size={32} className="text-[var(--color-primary)]" />
                <div>
                  <h3 className="font-display text-xl lg:text-2xl font-semibold mb-4 leading-tight">
                    Data is Creative Fuel
                  </h3>
                  <p className="font-text text-sm lg:text-base leading-relaxed text-[var(--color-soft-gray)]">
                    Intuition starts the engine—analytics steers. We test, track, and iterate until it works.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-full p-8 lg:p-10 bg-[var(--color-light)] text-[var(--color-dark)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between rounded-none">
              <Target size={32} className="text-[var(--color-primary)] mb-10" />
              <div>
                <h3 className="font-display text-xl lg:text-2xl font-semibold mb-4 leading-tight">
                  Precision Over Presets
                </h3>
                <p className="font-text text-sm lg:text-base leading-relaxed text-[var(--color-soft-gray)]">
                  We balance analytics with artistry—every creative decision is backed by insights, and every insight is
                  brought to life creatively.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card (30%) */}
          <div className="w-full md:w-[30%] flex items-stretch">
            <div className="flex-1 h-full p-8 lg:p-10 bg-[var(--color-primary)] text-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between rounded-none">
              <TrendingUp size={32} className="text-white" />
              <div>
                <h3 className="font-display text-xl lg:text-2xl font-semibold mb-4 leading-tight">
                  Growth Without Compromise
                </h3>
                <p className="font-text text-sm lg:text-base leading-relaxed text-white/90">
                  We scale your business, not our egos. If it doesn't move the needle, we won't sell it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Button */}
        <div className="flex justify-center mt-12 md:hidden">
          <ConnectButton to="/contact" label="LET'S CONNECT" />
        </div>
    </section>
  );
}
