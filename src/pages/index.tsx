import React from "react";
import { ThemeProvider } from "../components/ThemeProvider";
import { ColorThemeProvider } from "../contexts/ColorThemeContext";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <ColorThemeProvider>
        <div className="min-h-screen">
          <Navigation />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </div>
      </ColorThemeProvider>
    </ThemeProvider>
  );
};

export default Index;
