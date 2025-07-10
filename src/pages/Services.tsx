import HeroSectionAbout from "../components/Services/Hero";
import ServicesComp from "../components/Services/Services";
import FadeInWhenVisible from "../utils/FadeInWhenVisible";
import DottedLine from "../ui/dottedline";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import ContactForm from "../components/contact";


export default function Services() {
  return (
    <>
      <FadeInWhenVisible>
        <HeroSectionAbout />
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <ServicesComp />
      </FadeInWhenVisible>

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
