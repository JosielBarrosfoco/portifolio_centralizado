import GlassFolder, { type FolderFile, type FolderArt } from '@/react-app/components/ui/glass-folder-cards';
import TechStackBento from '@/react-app/components/ui/interactive-tech-stack-bento-grid-with-hover-effects';

type Area = { title: string; description: string; art: FolderArt; seed: number; files: FolderFile[] };

const areas: Area[] = [
  {
    title: 'Sistemas',
    description: 'Produtos, ERP e aplicações empresariais.',
    art: 'verdant',
    seed: 5,
    files: [
      { name: 'PLAGE SYSTEM', meta: 'Empresa', href: 'https://plagesystem.com.br/' },
      { name: 'PLAGE ERP', meta: 'Gestão', href: 'https://www.plageerp.com.br/' },
      { name: 'Portal do Empresário', meta: 'Aplicação', href: 'https://portal-do-empresario.vercel.app/' },
    ],
  },
  {
    title: 'Automação',
    description: 'Integrações e organização de fluxos.',
    art: 'glacier',
    seed: 6,
    files: [
      { name: 'PLAGE Licita', meta: 'Licitações', href: 'https://www.plagelicita.com.br/' },
      { name: 'Diagnóstico Licita', meta: 'Ferramenta', href: 'https://diagnostico.plagelicita.com.br/' },
      { name: 'GitHub', meta: 'Código', href: 'https://github.com/JosielBarrosfoco' },
    ],
  },
  {
    title: 'Soluções Web',
    description: 'Sites, interfaces e experiências digitais.',
    art: 'aurora',
    seed: 8,
    files: [
      { name: 'Notícias', meta: 'Portal', href: 'https://noticias.plagesystem.com.br/' },
      { name: 'Loja Infantil', meta: 'E-commerce', href: 'https://lojabebe.plagesystem.com.br/' },
      { name: 'Portfólio anterior', meta: 'Acervo', href: 'https://josielbarros.dev/' },
    ],
  },
  {
    title: 'Dados & Gestão',
    description: 'Finanças, operações e decisões.',
    art: 'dusk',
    seed: 11,
    files: [
      { name: 'Cálculo Claro', meta: 'Web App', href: 'https://calculo-claro.vercel.app/' },
      { name: 'Portal Empresário', meta: 'Gestão', href: 'https://portal-do-empresario.vercel.app/' },
      { name: 'Calcula Minha Operação', meta: 'Em desenvolvimento' },
    ],
  },
];

export function AreasSection() {
  return (
    <section className="section areas-section" id="areas" aria-labelledby="areas-title">
      <div className="site-container">
        <p className="section-kicker">02 / ÁREAS DE ATUAÇÃO</p>
        <h2 className="section-title" id="areas-title">Onde conecto <span>tecnologia e negócio.</span></h2>
        <p className="section-lead">Explore as pastas interativas para conhecer exemplos reais das diferentes frentes em que atuo. Abra uma pasta e selecione um projeto.</p>
        <div className="areas-grid">
          {areas.map((area, index) => (
            <article className="area-card" key={area.title}>
              <div className="area-folder">
                <GlassFolder
                  label={area.title}
                  meta="Clique para explorar"
                  tone="dark"
                  art={area.art}
                  seed={area.seed}
                  action="none"
                  width={245}
                  appearDelay={index * 85}
                  files={area.files}
                  onFileSelect={(file) => {
                    if (file.href) window.open(file.href, '_blank', 'noopener,noreferrer');
                  }}
                />
              </div>
              <p className="area-description">{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechSection() {
  return (
    <section id="stack" aria-label="Tecnologias e exemplos interativos" className="stack-section">
      <TechStackBento />
    </section>
  );
}
