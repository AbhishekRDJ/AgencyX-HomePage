import React from "react";
import Header from "./components/Header/Header";
import HeroSection from "./Pages/Home/HeroSection";
import HeroSectionAbout from "./Pages/Home/AboutHeroSection";
import ServicesSection from "./Pages/Home/ServicesSection";
import MobileAppsSection from "./Pages/Home/MobileAppsSection";
import ProjectHeroSection from "./Pages/Home/ProjectSection";
import LeadershipSection from "./Pages/Home/TeamMemberSection";
import TestimonialSection from "./Pages/Home/testimonialSection";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <HeroSectionAbout/>
      <ServicesSection/>
      <MobileAppsSection/>
      <ProjectHeroSection/>
      <LeadershipSection/>
      <TestimonialSection/>
      <Footer/>
      

      <main className="p-6"></main>
    </div>
  );
}

export default App;
