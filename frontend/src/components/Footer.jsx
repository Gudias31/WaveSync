import { InstagramIcon } from './Icons'

const EMAIL = 'contato@wavesynctech.com.br'

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#processo', label: 'Processo' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#contato', label: 'Contato' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt=""
              className="footer__logo-img"
              width="128"
              height="108"
              loading="lazy"
            />
            <span className="footer__name">WaveSync Technology</span>
          </div>
          <nav className="footer__nav" aria-label="Rodapé">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer__bottom">
          {/* Ano renderizado direto no JSX. Antes era injetado por
              getElementById num <span> vazio, então ficava em branco no
              primeiro paint. */}
          <p className="footer__rights">
            &copy; {new Date().getFullYear()} WaveSync Technology. Todos os direitos reservados.
          </p>
          <a className="footer__contact" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <ul className="footer__social" aria-label="Redes sociais">
            <li>
              <a
                href="https://www.instagram.com/wavesync.tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da WaveSync"
              >
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
