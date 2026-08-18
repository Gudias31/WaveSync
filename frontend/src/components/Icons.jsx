/* Ícones inline.
 *
 * Normalizados: todo ícone é decorativo (aria-hidden + focusable="false", este
 * último porque o IE/Edge legado torna SVG focável), aceita `size` em vez de
 * ter o tamanho fixo no path, e usa três tamanhos — 16 junto ao texto, 20 em
 * UI, 24 em cabeçalho de card. Antes eram seis tamanhos diferentes (16/18/20/
 * 22/26/28) e faltava stroke-linecap/linejoin em todos, o que deixava as pontas
 * das linhas quadradas e o conjunto com cara de rascunho.
 */

const outline = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

/** Props comuns a todo ícone: decorativo e dimensionável. */
const base = (size) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  'aria-hidden': 'true',
  focusable: 'false',
})

/* ---------- Marca ---------- */

/** Onda da marca WaveSync, mesma silhueta do símbolo do logotipo. */
export const WaveMark = ({ size = 24 }) => (
  <svg {...base(size)} {...outline} strokeWidth="1.5">
    <path d="M1.5 14c2.2-5 4.4-5 6.6 0s4.4 5 6.6 0 4.4-5 6.6 0" />
    <path d="M1.5 9c2.2-4 4.4-4 6.6 0s4.4 4 6.6 0 4.4-4 6.6 0" opacity=".45" />
  </svg>
)

/* ---------- UI ---------- */

export const Layers = ({ size = 16 }) => (
  <svg {...base(size)} {...outline}>
    <path d="M12 2 2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
)

export const ArrowRight = ({ size = 16 }) => (
  <svg {...base(size)} {...outline}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

export const CheckIcon = ({ size = 16 }) => (
  <svg {...base(size)} {...outline} strokeWidth="2">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export const MailIcon = ({ size = 20 }) => (
  <svg {...base(size)} {...outline}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
)

/* ---------- Sobre ---------- */

export const InnovationIcon = ({ size = 24 }) => (
  <svg {...base(size)} {...outline}>
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    <circle cx="12" cy="12" r="4" />
  </svg>
)

export const PerformanceIcon = ({ size = 24 }) => (
  <svg {...base(size)} {...outline}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

export const DesignIcon = ({ size = 24 }) => (
  <svg {...base(size)} {...outline}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
)

/* ---------- Serviços ---------- */

export const GlobeIcon = ({ size = 24 }) => (
  <svg {...base(size)} {...outline}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

export const FileTextIcon = ({ size = 24 }) => (
  <svg {...base(size)} {...outline}>
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h7" />
  </svg>
)

export const MonitorIcon = ({ size = 24 }) => (
  <svg {...base(size)} {...outline}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
)

export const CpuIcon = ({ size = 24 }) => (
  <svg {...base(size)} {...outline}>
    <path d="M12 8V4H8" />
    <rect x="4" y="8" width="16" height="12" rx="2" />
    <path d="M2 14h2M20 14h2M15 13v2M9 13v2" />
  </svg>
)

export const WrenchIcon = ({ size = 24 }) => (
  <svg {...base(size)} {...outline}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94L14.7 6.3z" />
  </svg>
)

/* ---------- Marcas (preenchidas) ---------- */

export const WhatsAppIcon = ({ size = 20 }) => (
  <svg {...base(size)} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
)

export const InstagramIcon = ({ size = 20 }) => (
  <svg {...base(size)} fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)
