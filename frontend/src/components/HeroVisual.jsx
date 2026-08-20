/* Visual do hero: um campo de ondas animado, emoldurado como superfície de
 * produto. A marca é literalmente uma onda, então o visual é uma interpretação
 * dela — não uma tela de cliente inventada.
 *
 * A barra de janela mostra o próprio domínio do site: comunica "fazemos web"
 * sem afirmar nada que não seja verdade.
 *
 * Custo: zero bytes de rede, ~20 nós, duas propriedades animadas
 * (stroke-dashoffset na entrada e um transform em loop). Nenhum filter ou
 * backdrop-filter em movimento.
 */

/* Cada segmento `q 80 ∓2A 160 0` produz amplitude A no seu ponto médio, com
 * meio-período de 80. Os paths têm 1280 de largura (dois períodos completos num
 * viewBox de 640), e o grupo desliza -640 — exatamente um período — para o loop
 * fechar sem costura. */
const wave = (baseline, amplitude, startUp = true) => {
  const segments = []
  for (let i = 0; i < 8; i += 1) {
    const up = startUp ? i % 2 === 0 : i % 2 === 1
    segments.push(`q 80 ${up ? -2 * amplitude : 2 * amplitude} 160 0`)
  }
  return `M-40 ${baseline} ${segments.join(' ')}`
}

const waves = [
  { d: wave(190, 40), width: 2.25, gradient: 'wsWave' },
  { d: wave(222, 30, false), width: 1.75, gradient: 'wsWave' },
  { d: wave(256, 22), width: 1.25, gradient: 'wsWaveSoft' },
  { d: wave(286, 14, false), width: 1, gradient: 'wsWaveSoft' },
]

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-visual__glow" aria-hidden="true"></div>
      <div className="hero-visual__frame">
        <div className="hero-visual__chrome" aria-hidden="true">
          <div className="hero-visual__dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="hero-visual__url">wavesynctech.com.br</div>
        </div>
        <div className="hero-visual__stage">
          <svg
            className="hero-visual__waves"
            viewBox="0 0 640 400"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <linearGradient id="wsWave" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#3d9dff" stopOpacity="0" />
                <stop offset="0.25" stopColor="#3d9dff" stopOpacity="0.9" />
                <stop offset="0.6" stopColor="#8ecbff" stopOpacity="0.75" />
                <stop offset="1" stopColor="#6450ff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="wsWaveSoft" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#3d9dff" stopOpacity="0" />
                <stop offset="0.5" stopColor="#5cb0ff" stopOpacity="0.35" />
                <stop offset="1" stopColor="#3d9dff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <g className="hero-visual__wave-scroll">
              {waves.map((w, i) => (
                <path
                  key={w.d}
                  className={`hero-visual__wave hero-visual__wave--${i + 1}`}
                  d={w.d}
                  pathLength="1"
                  stroke={`url(#${w.gradient})`}
                  strokeWidth={w.width}
                  fill="none"
                />
              ))}
            </g>
          </svg>
        </div>
      </div>
      <div className="hero-visual__chips" aria-hidden="true">
        <span className="hero-visual__chip">React + Vite</span>
        <span className="hero-visual__chip">Deploy em CDN</span>
      </div>
    </div>
  )
}

export default HeroVisual
