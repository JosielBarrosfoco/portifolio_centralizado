import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Sistema de Gestão Financeira',
    description: 'Plataforma completa para controle financeiro empresarial com dashboards analíticos e relatórios automatizados.',
    tags: ['Web', 'Sistema', 'Finanças'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Portal Institucional Premium',
    description: 'Website moderno e responsivo para empresa de consultoria, com foco em conversão e experiência do usuário.',
    tags: ['Web', 'Design', 'SEO'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Automação de Processos Contábeis',
    description: 'Sistema de automação para rotinas contábeis, reduzindo tempo operacional em 70% e eliminando erros manuais.',
    tags: ['Automação', 'Sistema', 'Contabilidade'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Projetos em Destaque
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-900/20 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-medium text-slate-900 mb-4 group-hover:text-blue-900 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-900 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver projeto
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-900 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
