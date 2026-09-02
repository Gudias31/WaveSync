/* Fonte única dos dados de contato.
 *
 * O número e a mensagem do WhatsApp estavam escritos direto no Contact.jsx,
 * numa URL já percent-encoded à mão — ilegível para revisar e fácil de deixar
 * desatualizada em um lugar só. Aqui o texto fica em português legível e a
 * codificação é feita em runtime. */

export const WHATSAPP_NUMBER = '5511967259314'
export const EMAIL = 'contato@wavesynctech.com.br'

/* Chega no WhatsApp já com os três dados que o estúdio precisa para responder
 * com escopo, prazo e valor (é o mesmo pedido do texto da seção de contato).
 * Deixar os campos em branco custa menos que um formulário e a pessoa apaga o
 * que não quiser antes de enviar. */
export const WHATSAPP_MESSAGE = [
  'Olá, WaveSync!',
  '',
  'Vim pelo site e gostaria de solicitar um orçamento.',
  '',
  'Objetivo do site: ',
  'Prazo desejado: ',
  'Referências que eu gosto: ',
].join('\n')

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
