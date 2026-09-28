import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import useSectionNavigation from "../../../hooks/useSectionNavigation";
import EducationSection from "./sections/EducationSection";
import WorkSection from "./sections/WorkSection";
import ProjectsSection from "./sections/ProjectsSection";
import CertificatesSection from "./sections/CertificatesSection";

export function Home() {
    useSectionNavigation('home');

    return (
        <>
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <WorkSection />
            <ProjectsSection />
            <CertificatesSection />
        </>
    );
}

export default Home;