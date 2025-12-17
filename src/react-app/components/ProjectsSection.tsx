import { HorizontalProjectStack } from './ui/horizontal-project-stack';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Sistema de Gestão Financeira',
    description: 'Plataforma completa para controle financeiro empresarial com dashboards analíticos e relatórios automatizados.',
    tags: ['Web', 'Sistema', 'Finanças'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    liveUrl: 'https://josielbarros.dev/',
    githubUrl: 'https://github.com/JosielBarrosfoco'
  },
  {
    id: 2,
    title: 'Portal Institucional Premium',
    description: 'Website moderno e responsivo para empresa de consultoria, com foco em conversão e experiência do usuário.',
    tags: ['Web', 'Design', 'SEO'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    liveUrl: 'https://josielbarros.dev/',
    githubUrl: 'https://github.com/JosielBarrosfoco'
  },
  {
    id: 3,
    title: 'Automação de Processos Contábeis',
    description: 'Sistema de automação para rotinas contábeis, reduzindo tempo operacional em 70% e eliminando erros manuais.',
    tags: ['Automação', 'Sistema', 'Contabilidade'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    liveUrl: 'https://josielbarros.dev/',
    githubUrl: 'https://github.com/JosielBarrosfoco'
  },
  {
    id: 4,
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo com visualizações de dados em tempo real, gráficos dinâmicos e métricas de performance.',
    tags: ['Dashboard', 'Analytics', 'Data'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    liveUrl: 'https://josielbarros.dev/',
    githubUrl: 'https://github.com/JosielBarrosfoco'
  },
  {
    id: 5,
    title: 'E-commerce Moderno',
    description: 'Plataforma de e-commerce completa com carrinho de compras, sistema de pagamento e gestão de produtos.',
    tags: ['E-commerce', 'Web', 'React'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    liveUrl: 'https://josielbarros.dev/',
    githubUrl: 'https://github.com/JosielBarrosfoco'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 dark:text-white mb-4">
            Projetos em Destaque
          </h2>
          <div className="w-20 h-1 bg-blue-900 dark:bg-blue-700 mx-auto rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            Explore meus principais projetos desenvolvidos com as mais modernas tecnologias
          </p>
        </div>

        <HorizontalProjectStack projects={projects} />
      </div>
    </section>
  );
}
