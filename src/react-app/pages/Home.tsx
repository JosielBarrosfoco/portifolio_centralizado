import { useState } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness,
  Code2, Database, ExternalLink, Github, Globe2, Instagram, Layers3,
  Linkedin, Mail, Menu, Sparkles, Workflow, X
} from 'lucide-react';

type Category = 'produto' | 'site';
type Filter = 'todos' | Category;
type Project = {
  title: string;
  subtitle: string;
  description: string;
  category: Category;
  stack: string[];
  url?: string;
  source?: string;
  label: string;
  highlight?: boolean;
  hue: 'cyan' | 'blue' | 'violet' | 'amber';
};

const projects: Project[] = [
  {
    title: 'PLAGE SYSTEM',
    subtitle: 'Software house e soluções B2B',
    description: 'Site institucional da empresa de tecnologia que estou construindo: sistemas sob medida, ERP, automação e integrações.',
    category: 'produto', stack: ['React', 'TypeScript', 'Vite'], url: 'https://plagesystem.com.br/',
    label: 'Empresa fundada', highlight: true, hue: 'cyan'
  },
  {
    title: 'PLAGE ERP',
    subtitle: 'Gestão empresarial',
    description: 'Presença digital de uma solução ERP voltada à organização e integração das operações empresariais.',
    category: 'produto', stack: ['React', 'ERP', 'Web'], url: 'https://www.plageerp.com.br/',
    label: 'Produto', highlight: true, hue: 'blue'
  },
  {
    title: 'PLAGE Licita',
    subtitle: 'Tecnologia para compras públicas',
    description: 'Projeto de plataforma para apoiar fluxos de licitações, organização das oportunidades e análise documental.',
    category: 'produto', stack: ['Next.js', 'Licitações', 'Automação'],
    url: 'https://www.plagelicita.com.br/', source: 'https://github.com/JosielBarrosfoco/PLAGE-Licita-VSCode',
    label: 'Produto em evolução', highlight: true, hue: 'violet'
  },
  {
    title: 'Diagnóstico PLAGE Licita',
    subtitle: 'Aplicação de diagnóstico',
    description: 'Aplicação web específica do ecossistema PLAGE Licita, publicada separadamente para facilitar o acesso.',
    category: 'produto', stack: ['Next.js', 'Web'], url: 'https://diagnostico.plagelicita.com.br/',
    label: 'Aplicação', hue: 'violet'
  },
  {
    title: 'Cálculo Claro',
    subtitle: 'Ferramenta digital',
    description: 'Projeto web independente, com foco em transformar cálculos e informações em uma experiência mais acessível.',
    category: 'produto', stack: ['Web App', 'TypeScript'], url: 'https://calculo-claro.vercel.app/',
    label: 'Aplicação', hue: 'amber'
  },
  {
    title: 'Portal do Empresário',
    subtitle: 'Solução para negócios',
    description: 'Projeto de aplicação voltada ao universo da gestão empresarial, disponibilizado para demonstração.',
    category: 'produto', stack: ['Next.js', 'Web App'], url: 'https://portal-do-empresario.vercel.app/',
    label: 'Projeto', hue: 'blue'
  },
  {
    title: 'Calcula Minha Operação',
    subtitle: 'Análise de viabilidade de negócios',
    description: 'Produto em desenvolvimento para apoiar micro e pequenas empresas na avaliação de custos, preços e viabilidade financeira.',
    category: 'produto', stack: ['SaaS', 'Finanças', 'Dados'],
    label: 'Em desenvolvimento · sem demo pública', hue: 'amber'
  },
  {
    title: 'Portal de Notícias',
    subtitle: 'Publicação e conteúdo',
    description: 'Projeto de portal de notícias e organização de conteúdo editorial em ambiente web.',
    category: 'site', stack: ['WordPress', 'CMS'], url: 'https://noticias.plagesystem.com.br/',
    label: 'Site / demonstração', hue: 'cyan'
  },
  {
    title: 'Loja Infantil',
    subtitle: 'E-commerce',
    description: 'Vitrine de comércio eletrônico voltada ao segmento infantil.',
    category: 'site', stack: ['WordPress', 'E-commerce'], url: 'https://lojabebe.plagesystem.com.br/',
    label: 'Site / demonstração', hue: 'violet'
  },
  {
    title: 'Portal Imobiliário',
    subtitle: 'Site de imóveis',
    description: 'Projeto digital para apresentação de imóveis e experiências de navegação do setor imobiliário.',
    category: 'site', stack: ['WordPress', 'Web'], url: 'https://imobiliaria.plagesystem.com.br/',
    label: 'Site / demonstração', hue: 'blue'
  },
  {
    title: 'Site Jurídico',
    subtitle: 'Presença digital profissional',
    description: 'Demonstração de site institucional para atuação na área jurídica.',
    category: 'site', stack: ['WordPress', 'Web'], url: 'https://advogado.plagesystem.com.br/',
    label: 'Site / demonstração', hue: 'amber'
  },
  {
    title: 'Delivery',
    subtitle: 'Vitrine para pedidos',
    description: 'Projeto de presença digital para negócios de alimentação e entrega.',
    category: 'site', stack: ['WordPress', 'Web'], url: 'https://delivery.plagesystem.com.br/',
    label: 'Site / demonstração', hue: 'cyan'
  },
  {
    title: 'Ambiente EAD',
    subtitle: 'Educação online',
    description: 'Demonstração de ambiente digital voltado à aprendizagem e apresentação de cursos.',
    category: 'site', stack: ['WordPress', 'E-learning'], url: 'https://siteead.plagesystem.com.br/',
    label: 'Site / demonstração', hue: 'blue'
  },
  {
    title: 'Portal de Veículos',
    subtitle: 'Catálogo automotivo',
    description: 'Projeto de site para apresentação e navegação por veículos.',
    category: 'site', stack: ['WordPress', 'Catálogo'], url: 'https://veiculo.plagesystem.com.br/',
    label: 'Site / demonstração', hue: 'violet'
  },
  {
    title: 'Loja de Café',
    subtitle: 'Comércio eletrônico',
    description: 'Experiência de loja virtual para o segmento de café e produtos relacionados.',
    category: 'site', stack: ['WordPress', 'WooCommerce'],
    url: 'https://lojacafe.plagesystem.com.br/loja/', label: 'Site / demonstração', hue: 'amber'
  }
];

const networks = [
  { label: 'GitHub', href: 'https://github.com/JosielBarrosfoco', icon: Github, description: 'Código e repositórios' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/josiel-barros/', icon: Linkedin, description: 'Carreira e experiência' },
  { label: 'PLAGE no Instagram', href: 'https://www.instagram.com/plage_system/', icon: Instagram, description: 'Projetos e bastidores da empresa' },
  { label: 'Portfólio anterior', href: 'https://josielbarros.dev/', icon: Globe2, description: 'Arquivo de trabalhos e experiências' }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={'project-card project-' + project.hue + (project.highlight ? ' project-featured' : '')}>
      <div className="project-art" aria-hidden="true">
        <div className="project-art-grid" />
        <span className="project-counter">{String(index + 1).padStart(2, '0')}</span>
        <div className="project-art-icon">
          {project.category === 'produto' ? <Layers3 size={38} strokeWidth={1.3} /> : <Globe2 size={38} strokeWidth={1.3} />}
        </div>
        <span className="project-art-kind">{project.category === 'produto' ? 'PRODUTOS & SISTEMAS' : 'WEB & EXPERIÊNCIAS'}</span>
      </div>
      <div className="project-content">
        <div className="project-topline"><span className="project-status">{project.label}</span></div>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.stack.map(tag => <span key={tag}>{tag}</span>)}
        </div>
        <div className="project-actions">
          {project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-main-link">
            Abrir projeto <ArrowUpRight size={16} aria-hidden="true" />
          </a> : <span className="project-unavailable">Demonstração ainda não disponível</span>}
          {project.source && <a className="project-source-link" href={project.source} target="_blank" rel="noopener noreferrer" aria-label={'Ver código de ' + project.title} title="Ver código"><Github size={18} /></a>}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [filter, setFilter] = useState<Filter>('todos');
  const [menuOpen, setMenuOpen] = useState(false);
  const visible = projects.filter(project => filter === 'todos' || project.category === filter);

  return (
    <div className="portfolio-shell">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <header className="site-header">
        <div className="site-container header-inner">
          <a href="#inicio" className="brand" aria-label="Josiel Barros — início">
            <span className="brand-mark">JB<span className="brand-dot">.</span></span>
            <span className="brand-name">JOSIEL BARROS <small>DESENVOLVIMENTO & NEGÓCIOS</small></span>
          </a>
          <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Navegação principal">
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
            <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
            <a href="#trajetoria" onClick={() => setMenuOpen(false)}>Trajetória</a>
            <a href="#conexoes" onClick={() => setMenuOpen(false)}>Conexões</a>
          </nav>
          <a className="header-contact" href="mailto:josieljuniorfoco@gmail.com">Vamos conversar <ArrowUpRight size={15} /></a>
          <button className="mobile-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-glow" aria-hidden="true" />
          <div className="site-container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span className="pulse-dot" /> DESENVOLVEDOR FULL STACK · FOUNDER PLAGE SYSTEM</p>
              <h1>Construo tecnologia que <em>resolve problemas</em> de negócios.</h1>
              <p className="hero-description">Sou <strong>Josiel Barros</strong>. Conecto desenvolvimento de sistemas, automação, dados e experiência em gestão para transformar operações complexas em soluções digitais úteis.</p>
              <div className="hero-cta">
                <a href="#projetos" className="btn btn-primary">Explorar projetos <ArrowRight size={17} /></a>
                <a href="https://github.com/JosielBarrosfoco" target="_blank" rel="noopener noreferrer" className="btn btn-outline"><Github size={17} /> Meu GitHub</a>
              </div>
              <div className="hero-chips" aria-label="Principais áreas de atuação"><span>Python & APIs</span><span>React & TypeScript</span><span>ERP & SaaS</span><span>Dados & Automação</span></div>
            </div>
            <aside className="hero-profile" aria-label="Perfil profissional">
              <div className="profile-photo-wrap">
                <img src="/profile.webp" alt="Retrato profissional de Josiel Barros" className="profile-photo" />
              </div>
              <div className="profile-caption">
                <span className="profile-heading">TECNOLOGIA + VISÃO DE NEGÓCIO</span>
                <h2>Do problema real à solução publicada.</h2>
                <p>Software, processos e decisões melhores — do planejamento ao produto.</p>
                <div className="profile-divider" />
                <a href="https://plagesystem.com.br/" target="_blank" rel="noopener noreferrer" className="profile-company">Conheça a PLAGE SYSTEM <ArrowUpRight size={16} /></a>
              </div>
              <div className="profile-corner" aria-hidden="true"><Code2 size={22}/></div>
            </aside>
          </div>
          <a className="scroll-hint" href="#sobre">CONHEÇA MEU TRABALHO <ArrowDown size={15}/></a>
        </section>

        <section id="sobre" className="section about-section">
          <div className="site-container about-grid">
            <div>
              <p className="section-kicker">01 / SOBRE</p>
              <h2 className="section-title">Mais do que código. <span>Contexto de negócio.</span></h2>
            </div>
            <div className="about-detail">
              <p>Minha atuação reúne desenvolvimento de software, automação, análise de dados e experiência prática com processos administrativos, financeiros, logísticos e licitações públicas.</p>
              <p>Sou fundador da <a href="https://plagesystem.com.br/" target="_blank" rel="noopener noreferrer">PLAGE SYSTEM <ArrowUpRight size={14}/></a>, onde desenvolvo e estruturo soluções para empresas. Este portfólio reúne produtos próprios, aplicações, demonstrações e canais profissionais em um único lugar.</p>
              <div className="about-metrics">
                <div><Code2 size={23}/><strong>Desenvolvimento</strong><span>Front-end, back-end e integrações</span></div>
                <div><Workflow size={23}/><strong>Automação</strong><span>Fluxos, APIs e processos</span></div>
                <div><Database size={23}/><strong>Dados & gestão</strong><span>Indicadores e decisões</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="section projects-section">
          <div className="site-container">
            <div className="section-heading-row">
              <div><p className="section-kicker">02 / PORTFÓLIO</p><h2 className="section-title">Projetos com <span>endereços reais.</span></h2><p className="section-lead">Produtos, sites e experimentos publicados. Cada cartão leva ao projeto correspondente; quando não há demonstração pública, isso fica indicado.</p></div>
              <a className="subtle-link" href="https://github.com/JosielBarrosfoco" target="_blank" rel="noopener noreferrer">Ver todos os repositórios <ArrowUpRight size={16}/></a>
            </div>
            <div className="project-toolbar" role="group" aria-label="Filtrar projetos">
              {([['todos', 'Todos os projetos'], ['produto', 'Sistemas & produtos'], ['site', 'Sites & demonstrações']] as const).map(([id,label]) => (
                <button key={id} type="button" onClick={() => setFilter(id)} className={filter===id ? 'filter-btn active' : 'filter-btn'} aria-pressed={filter===id}>{label}</button>
              ))}
              <span className="project-total">{visible.length} PROJETOS</span>
            </div>
            <div className="project-grid">
              {visible.map((project, i) => <ProjectCard key={project.title} project={project} index={i}/>)}
            </div>
            <div className="archive-banner">
              <div className="archive-icon"><Globe2 size={23}/></div>
              <div><h3>Meu portfólio anterior continua disponível</h3><p>Outros trabalhos e referências históricas estão no site original, que pretendo evoluir separadamente.</p></div>
              <a href="https://josielbarros.dev/" target="_blank" rel="noopener noreferrer">Visitar josielbarros.dev <ExternalLink size={16}/></a>
            </div>
          </div>
        </section>

        <section className="section path-section" id="trajetoria">
          <div className="site-container">
            <p className="section-kicker">03 / EXPERIÊNCIA & FORMAÇÃO</p>
            <h2 className="section-title">Uma trajetória entre <span>operações e tecnologia.</span></h2>
            <div className="path-grid">
              <article className="path-card"><span className="path-icon"><BriefcaseBusiness size={23}/></span><span className="path-number">01</span><h3>PLAGE SYSTEM</h3><p className="path-label">Empreendedorismo & tecnologia</p><p>Desenvolvimento de produtos digitais, sistemas empresariais, ERP, automações e projetos web. Visão de produto e implementação técnica.</p></article>
              <article className="path-card"><span className="path-icon"><Workflow size={23}/></span><span className="path-number">02</span><h3>Gestão & operações</h3><p className="path-label">Experiência aplicada</p><p>Vivência em processos operacionais, estoque, logística, controles, finanças e análise de licitações — problemas que ajudam a orientar as soluções que construo.</p></article>
              <article className="path-card"><span className="path-icon"><Sparkles size={23}/></span><span className="path-number">03</span><h3>Aprendizado contínuo</h3><p className="path-label">Tecnologia, finanças e negócios</p><p>Formação e estudos nas áreas de desenvolvimento de sistemas, engenharia de software, Ciências Contábeis e finanças.</p></article>
            </div>
            <div className="toolkit">
              <span>TECNOLOGIAS E FERRAMENTAS</span>
              <div>{['Python', 'Django', 'FastAPI', 'JavaScript', 'TypeScript', 'React', 'SQL', 'PostgreSQL', 'Supabase', 'REST APIs', 'WordPress', 'Git / GitHub', 'Vercel'].map(x=><span key={x}>{x}</span>)}</div>
            </div>
          </div>
        </section>

        <section id="conexoes" className="section connections-section">
          <div className="site-container connections-grid">
            <div>
              <p className="section-kicker">04 / CONEXÕES</p>
              <h2 className="section-title">Tudo em <span>um só lugar.</span></h2>
              <p className="section-lead">Projetos, histórico profissional, presença digital e contato. Para conhecer meu trabalho ou discutir uma oportunidade, comece por aqui.</p>
              <a href="mailto:josieljuniorfoco@gmail.com" className="btn btn-primary">Entrar em contato <Mail size={18}/></a>
            </div>
            <div className="network-list">
              {networks.map(({label,href,icon:Icon,description})=><a key={label} href={href} target="_blank" rel="noopener noreferrer" className="network-item"><span className="network-icon"><Icon size={21}/></span><span><strong>{label}</strong><small>{description}</small></span><ArrowUpRight size={19} className="network-arrow"/></a>)}
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="site-container footer-inner"><span><strong>JB.</strong> Josiel Barros — Desenvolvedor Full Stack</span><span>Construído com propósito, código e visão de negócio.</span><a href="#inicio">Voltar ao topo ↑</a></div>
      </footer>
    </div>
  );
}
