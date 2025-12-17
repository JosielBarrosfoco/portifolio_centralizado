import { Code2, Globe, Smartphone, Package } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'WordPress',
    description: 'Criação e personalização de sites WordPress profissionais, temas customizados e otimização de performance.'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'HTML e CSS3',
    description: 'Desenvolvimento web com as mais modernas tecnologias, design responsivo e interfaces atraentes.'
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: 'Software',
    description: 'Desenvolvimento de software sob medida para automatizar processos e resolver problemas específicos do seu negócio.'
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Aplicativos',
    description: 'Criação de aplicativos mobile e web apps para oferecer a melhor experiência aos seus usuários.'
  }
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-24 px-6 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 dark:text-white mb-4">
            Serviços
          </h2>
          <div className="w-20 h-1 bg-blue-900 dark:bg-blue-700 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 hover:shadow-xl hover:border-blue-900/20 dark:hover:border-blue-700/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-900/5 dark:bg-blue-700/10 rounded-2xl flex items-center justify-center text-blue-900 dark:text-blue-400 mb-6 group-hover:bg-blue-900 dark:group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
