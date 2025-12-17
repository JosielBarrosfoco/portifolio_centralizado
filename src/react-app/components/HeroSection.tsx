import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  
  // Tenta carregar a imagem em diferentes formatos
  useEffect(() => {
    const formats = [
      '/foto01.webp', '/foto01.jpg', '/foto01.jpeg', '/foto01.png',
      '/profile.webp', '/profile.jpg', '/profile.jpeg', '/profile.png'
    ];
    let currentIndex = 0;
    
    const tryNextImage = () => {
      if (currentIndex >= formats.length) {
        setImageError(true);
        return;
      }
      
      const img = new Image();
      img.onload = () => {
        setImageSrc(formats[currentIndex]);
        setImageError(false);
      };
      img.onerror = () => {
        currentIndex++;
        tryNextImage();
      };
      img.src = formats[currentIndex];
    };
    
    tryNextImage();
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Background Paths - apenas os caminhos animados, sem o conteúdo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0">
          <svg
            className="w-full h-full text-slate-950 dark:text-white opacity-20"
            viewBox="0 0 696 316"
            fill="none"
          >
            {Array.from({ length: 36 }, (_, i) => {
              const position = i % 2 === 0 ? 1 : -1;
              return {
                id: i,
                d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
                  380 - i * 5 * position
                } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
                  152 - i * 5 * position
                } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
                  684 - i * 5 * position
                } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
                width: 0.5 + i * 0.03,
              };
            }).map((path) => (
              <motion.path
                key={path.id}
                d={path.d}
                stroke="currentColor"
                strokeWidth={path.width}
                strokeOpacity={0.1 + path.id * 0.03}
                initial={{ pathLength: 0.3, opacity: 0.6 }}
                animate={{
                  pathLength: 1,
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 20 + Math.random() * 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ))}
          </svg>
        </div>
      </div>
      
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Profile Image */}
        <div className="relative inline-block">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
              {imageSrc && !imageError ? (
                <img
                  src={imageSrc}
                  alt="Foto de Josiel Barros"
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <span className="text-5xl font-light text-blue-900">JB</span>
              )}
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-light text-slate-900 dark:text-white tracking-tight">
          Josiel Barros
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light">
          Python / HTML / CSS / Javascript
        </p>

        {/* Bio */}
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
          Desenvolvedor profissional capaz de criar soluções de software para atender às necessidades de empresas e clientes. 
          Responsável por desenvolver, testar e implementar programas, aplicativos e sistemas computacionais.
        </p>

        {/* Portfolio Link */}
        <a
          href="https://josielbarros.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
        >
          Ver Portfólio
        </a>

        {/* CTA Button */}
        <a
          href="#contato"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 dark:bg-blue-700 text-white rounded-full font-medium text-lg hover:bg-blue-800 dark:hover:bg-blue-600 transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
        >
          Fale comigo
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
