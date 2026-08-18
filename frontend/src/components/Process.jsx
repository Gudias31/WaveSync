/* Como trabalhamos.
 *
 * Cada etapa termina num "Resultado": algo concreto que o cliente recebe. É o
 * tipo de prova que não depende de citar cliente nenhum — descreve o método, e o
 * método é verificável na prática.
 */

const steps = [
  {
    title: 'Descoberta',
    description:
      'Conversamos sobre objetivo, público e conteúdo. Definimos escopo, prazo e o que entra — e o que não entra — no projeto.',
    result: 'escopo e proposta por escrito.',
  },
  {
    title: 'Design',
    description:
      'Estrutura das páginas, hierarquia de conteúdo e interface aprovados antes de qualquer linha de código.',
    result: 'layout aprovado das telas principais.',
  },
  {
    title: 'Desenvolvimento',
    description:
      'Implementação responsiva e semântica, com um ambiente de pré-visualização para você acompanhar a evolução.',
    result: 'link de preview atualizado a cada entrega.',
  },
  {
    title: 'Publicação',
    description:
      'Domínio, HTTPS, analytics e SEO técnico configurados. Revisão final em celular, tablet e desktop.',
    result: 'site no ar, no seu domínio.',
  },
  {
    title: 'Suporte',
    description: 'Ajustes pós-lançamento, monitoramento e evolução conforme combinado.',
    result: 'canal direto para mudanças e melhorias.',
  },
]

function Process() {
  return (
    <section id="processo" className="section section--process" aria-labelledby="process-title">
      <div className="container">
        <header className="section__header reveal" data-reveal>
          <span className="section__label">Processo</span>
          <h2 id="process-title" className="section__title">
            Como trabalhamos
          </h2>
          <p className="section__lead">
            Um caminho previsível, com pontos de aprovação claros — você sempre sabe em que etapa o
            projeto está e o que vem a seguir.
          </p>
        </header>
        <ol className="process__list">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="process-step reveal"
              data-reveal
              style={{ '--i': index }}
            >
              <span className="process-step__num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="process-step__body">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <span className="process-step__result">
                  <strong>Resultado:</strong> {step.result}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
