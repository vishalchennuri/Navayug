import AboutUsSection from "../components/aboutSection";
import DottedLine from "../ui/dottedline";
import HeroSection from "../components/heroSection";
import WorksSection from "../components/worksSection";
import ProcessComponent from "../components/processSection";
import ServicesSection from "../components/servicesSection";
import FeaturesSection from "../components/featuresSection";
import FadeInWhenVisible from "../utils/FadeInWhenVisible";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import ContactForm from "../components/contact";


export default function LandingPage() {
  return (
    <>
      <FadeInWhenVisible><HeroSection /></FadeInWhenVisible>
      <DottedLine className="my-4" />
      <FadeInWhenVisible delay={0.2}><AboutUsSection /></FadeInWhenVisible>
      <DottedLine className="my-4" />
      <FadeInWhenVisible delay={0.3}><ServicesSection /></FadeInWhenVisible>
      <DottedLine className="my-4" />
      <FadeInWhenVisible delay={0.4}><FeaturesSection /></FadeInWhenVisible>
      <DottedLine className="my-4" />
      <FadeInWhenVisible delay={0.5}><WorksSection /></FadeInWhenVisible>
      <DottedLine className="my-4" />
      <FadeInWhenVisible delay={0.6}><ProcessComponent /></FadeInWhenVisible>
      
        <FadeInWhenVisible delay={0.1}>
          <DottedLine className="my-4" />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <Testimonials />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.3}>
          <DottedLine className="my-4" />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.4}>
          <Faq />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.5}>
          <ContactForm />
        </FadeInWhenVisible>
    </>
  );
}
