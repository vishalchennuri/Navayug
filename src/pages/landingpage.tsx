import AboutUsSection from "../components/aboutSection";
import DottedLine from "../ui/dottedline";
import HeroSection from "../components/heroSection";

import WorksSection from "../components/worksSection";
import ProcessComponent from "../components/processSection";
import ServicesSection from "../components/servicesSection";
import FeaturesSection from "../components/featuresSection";
import PricingSection from "../components/plans-pricing";

export default function LandingPage() {
  return (
    <>
<HeroSection/>
   <DottedLine className="my-4" />
   <AboutUsSection/>
      <DottedLine className="my-4" />
      <ServicesSection/>
      <DottedLine className="my-4" />
      <FeaturesSection/>
      <DottedLine className="my-4" />
      <WorksSection/>
      <DottedLine className="my-4" />
      <ProcessComponent/>
      {/* <PricingSection/> */}

    </>
  );
}
