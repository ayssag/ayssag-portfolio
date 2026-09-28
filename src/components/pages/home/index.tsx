import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import useSectionNavigation from "../../../hooks/useSectionNavigation";
import EducationSection from "./sections/EducationSection";
import WorkSection from "./sections/WorkSection";
import ProjectsSection from "./sections/ProjectsSection";

export function Home() {
    useSectionNavigation('home');

    return (
        <>
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <WorkSection />
            <ProjectsSection />
        </>
    );
}

export default Home;