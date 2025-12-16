import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);
  
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Profile Image */}
        <div className="relative inline-block">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
              {!imageError ? (
                <img
                  src="/profile.jpg"
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
        <h1 className="text-5xl md:text-6xl font-light text-slate-900 tracking-tight">
          Josiel Barros
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-slate-600 font-light">
          Python / HTML / CSS / Javascript
        </p>

        {/* Bio */}
        <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
          Desenvolvedor profissional capaz de criar soluções de software para atender às necessidades de empresas e clientes. 
          Responsável por desenvolver, testar e implementar programas, aplicativos e sistemas computacionais.
        </p>

        {/* Portfolio Link */}
        <a
          href="https://terminal-portifolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-full font-medium hover:bg-slate-200 transition-all duration-300"
        >
          Ver Portfólio Terminal
        </a>

        {/* CTA Button */}
        <a
          href="#contato"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white rounded-full font-medium text-lg hover:bg-blue-800 transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
        >
          Fale comigo
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
