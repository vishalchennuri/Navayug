
import type React from "react";
import { Search, Target, Zap } from "lucide-react";
import SectionHeader from "../ui/sectionHeader";
import ConnectButton from "../ui/connectButton";

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    id: "001",
    number: "/001",
    title: "Discover",
    description:
      "We audit your current digital presence, interview stakeholders, and identify growth levers—no assumptions, just data.",
    icon: <Search className="w-8 h-8 text-gray-700" />,
  },
  {
    id: "002",
    number: "/002",
    title: "Define",
    description:
      "Clear objectives, KPIs, and timelines are locked in. You approve every milestone before we move forward.",
    icon: <Target className="w-8 h-8 text-gray-700" />,
  },
  {
    id: "003",
    number: "/003",
    title: "Execute",
    description:
      "Our specialists build in sprints, delivering tangible progress at each checkpoint. No black-box workflows.",
    icon: <Zap className="w-8 h-8 text-gray-700" />,
  },
];

const ProcessCard = ({ step }: { step: ProcessStep }) => (
  <div className="w-full sm:w-80 bg-white border border-gray-200 rounded-lg p-6 mb-6 sm:mb-0 sm:mr-6 hover:shadow-lg transition-shadow duration-300 flex-shrink-0">
    <div className="mb-4">
      <span className="text-sm text-gray-500 font-mono">{step.number}</span>
    </div>
    <div className="mb-4">{step.icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
    <p className="text-[var(--color-soft-gray)] font-text text-base sm:text-lg font-medium leading-tight tracking-tighter">
      {step.description}
    </p>
  </div>
);

export default function ProcessComponent() {
  const duplicatedSteps = [...processSteps, ...processSteps];

  return (
    <div className="py-16 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
          <div className="flex-1">
            <SectionHeader title="PROCESS" />
            <h2 className="text-3xl lg:text-4xl font-display font-text text-[var(--color-dark)] mt-2 leading-tight tracking-tight">
              How We Deliver Guaranteed Outcomes
            </h2>
            <p className="mt-2 text-base lg:text-2xl font-text text-[var(--color-soft-gray)] tracking-tight leading-snug font-medium">
              A Transparent Process Designed For Scalability
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <ConnectButton label="LETS CONNECT" to="/services" />
          </div>
        </div>

        <div className="flex flex-col sm:hidden">
          {processSteps.map((step) => (
            <ProcessCard key={step.id} step={step} />
          ))}
        </div>

        <div className="hidden sm:block relative overflow-x-auto scrollbar-hide">
          <div className="flex animate-scroll">
            {duplicatedSteps.map((step, index) => (
              <ProcessCard key={`${step.id}-${index}`} step={step} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
