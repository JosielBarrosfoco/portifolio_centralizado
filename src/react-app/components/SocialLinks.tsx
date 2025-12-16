import { Linkedin, Instagram, Mail, MessageCircle, Briefcase } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  url: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <Briefcase className="w-6 h-6" />,
    label: 'Portfólio',
    url: 'https://terminal-portifolio.vercel.app/',
    color: 'hover:bg-purple-600'
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/josiel-barros/',
    color: 'hover:bg-blue-600'
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    label: 'Instagram',
    url: 'https://www.instagram.com/josiel.dev/',
    color: 'hover:bg-pink-600'
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    label: 'WhatsApp',
    url: 'https://wa.me/',
    color: 'hover:bg-green-600'
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: 'E-mail',
    url: 'mailto:contato@josielbarros.com',
    color: 'hover:bg-blue-900'
  }
];

export default function SocialLinks() {
  return (
    <section id="contato" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Vamos Conectar
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 px-6 py-4 bg-slate-100 rounded-full border border-slate-200 transition-all duration-300 hover:text-white hover:border-transparent hover:shadow-lg ${link.color}`}
            >
              <span className="transition-transform group-hover:scale-110">
                {link.icon}
              </span>
              <span className="font-medium">{link.label}</span>
            </a>
          ))}
        </div>

        {/* CTA Card */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-light mb-4">
            Pronto para desenvolver seus projetos?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato e vamos conversar sobre como posso ajudar a criar soluções de software para atender às suas necessidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-full font-medium text-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Vamos conversar
            </a>
            <a
              href="https://linktr.ee/josielbarr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-800 text-white rounded-full font-medium text-lg hover:bg-blue-700 transition-all duration-300 border-2 border-white/20"
            >
              Links Rápidos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
