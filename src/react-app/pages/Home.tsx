import { useEffect } from 'react';
import HeroSection from '@/react-app/components/HeroSection';
import ProjectsSection from '@/react-app/components/ProjectsSection';
import ServicesSection from '@/react-app/components/ServicesSection';
import SocialLinks from '@/react-app/components/SocialLinks';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <SocialLinks />
      <Footer />
    </div>
  );
}
