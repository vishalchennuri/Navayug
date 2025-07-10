import Approach from "../components/About/Approach";
import CoreValuesSection from "../components/About/CoreValues";
import HeroSectionAbout from "../components/About/Hero";
import OurStorySection from "../components/About/OurStory";
import DottedLine from "../ui/dottedline";
import FadeInWhenVisible from "../utils/FadeInWhenVisible";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import ContactForm from "../components/contact";


export default function About() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        <FadeInWhenVisible><HeroSectionAbout /></FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}><OurStorySection /></FadeInWhenVisible>
        <DottedLine />
        <FadeInWhenVisible delay={0.3}><CoreValuesSection /></FadeInWhenVisible>
        <DottedLine />
        <FadeInWhenVisible delay={0.4}><Approach /></FadeInWhenVisible>
        
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
      </div>
    </section>
  );
}
