import { useEffect } from 'react';
import Header from '@/react-app/components/Header';
import HeroSection from '@/react-app/components/HeroSection';
import ProjectsSection from '@/react-app/components/ProjectsSection';
import ServicesSection from '@/react-app/components/ServicesSection';
import SocialLinks from '@/react-app/components/SocialLinks';
import Footer from '@/react-app/components/Footer';
import WhatsAppFloat from '@/react-app/components/WhatsAppFloat';

export default function Home() {
  useEffect(() => {
    // Confirma que o projeto correto está carregando
    console.log('🚀 Portfólio Josiel Barros - Desenvolvedor Full Stack');
    console.log('✅ Projeto correto carregado!');
    
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
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <SocialLinks />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
