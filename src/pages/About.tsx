import Approach from "../components/About/Approach";
import CoreValuesSection from "../components/About/CoreValues";
import HeroSectionAbout from "../components/About/Hero";
import OurStorySection from "../components/About/OurStory";
import DottedLine from "../ui/dottedline";

export default function About() {
    return (
        <section className="px-6 md:px-10 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">
           <HeroSectionAbout/>
           <OurStorySection/>
           <DottedLine/>
           <CoreValuesSection/>
           <DottedLine/>

           <Approach/>
        </div>
        </section>
    );
}