import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import useSectionNavigation from "../../../hooks/useSectionNavigation";
import EducationSection from "./sections/EducationSection";

export function Home() {
    useSectionNavigation('home');

    return (
        <>
            <HeroSection />
            <AboutSection />
            <EducationSection />
        </>
    );
}

export default Home;