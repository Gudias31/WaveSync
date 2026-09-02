const ADS_ID = 'AW-11481391026'

/**
 * Rótulos de conversão do Google Ads.
 *
 * Preencha em Ferramentas e configurações > Conversões, abrindo a ação de
 * conversão e copiando o rótulo (formato 'AbC-D_efGhIjKlMn'). Vazio = nenhuma
 * conversão é enviada ao Ads, mas os eventos genéricos abaixo continuam sendo
 * disparados, então o histórico começa a acumular desde já.
 */
export const CONVERSION_LABELS = {
  whatsapp: '',
  email: '',
}

/**
 * Registra um clique em CTA de contato.
 *
 * A tag do Ads já estava na página, mas sem nenhum evento — as duas únicas ações
 * de conversão do site (WhatsApp e e-mail) não eram medidas.
 *
 * transport_type 'beacon' importa aqui: tanto o mailto: quanto o wa.me tiram a
 * pessoa da página, e sem beacon a requisição seria cancelada no meio.
 *
 * @param {'whatsapp' | 'email'} channel
 * @param {string} [source] Onde a pessoa clicou ('secao_contato',
 *   'botao_flutuante'). O WhatsApp agora tem dois pontos de entrada, e sem
 *   isso os dois cairiam no mesmo evento, indistinguíveis no relatório.
 */
export function trackConversion(channel, source) {
  const gtag = typeof window !== 'undefined' ? window.gtag : undefined
  if (typeof gtag !== 'function') return

  gtag('event', `contato_${channel}`, {
    event_category: 'contato',
    ...(source ? { event_label: source } : null),
    transport_type: 'beacon',
  })

  const label = CONVERSION_LABELS[channel]
  if (label) {
    gtag('event', 'conversion', { send_to: `${ADS_ID}/${label}` })
  }
}
