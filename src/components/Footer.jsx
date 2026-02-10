import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navegacao: [
      { label: 'Início', href: '#home' },
      { label: 'Sobre', href: '#about' },
      { label: 'Menu', href: '#menu' },
      { label: 'Galeria', href: '#gallery' },
      { label: 'Localização', href: '#location' },
      { label: 'Contato', href: '#contact' },
    ],
    social: [
      { label: 'Instagram', href: 'https://instagram.com/nabicafe.slz' },
      { label: 'WhatsApp', href: '#' },
    ],
  };

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      {/* Wave pattern at top */}
      <div className="footer__wave">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,80 L0,80 Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="footer__container container">
        <div className="footer__content">
          {/* Brand Section */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-img" role="img" aria-label="Nabi"></span>
              <span className="footer__logo-accent">蝶</span>
            </div>
            <p className="footer__tagline">
              special asian coffee shop
            </p>
            <p className="footer__description">
              Cafeteria com influência asiática, onde cada xícara conta uma história.
            </p>

            {/* Decorative element */}
            <div className="footer__enso">
              <svg viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4"/>
              </svg>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer__links-section">
            <h4 className="footer__links-title">Navegação</h4>
            <ul className="footer__links">
              {footerLinks.navegacao.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="footer__link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer__links-section">
            <h4 className="footer__links-title">Redes Sociais</h4>
            <ul className="footer__links">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Location info */}
            <div className="footer__location">
              <span className="footer__location-icon">📍</span>
              <span>São Luís, MA</span>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="footer__newsletter">
            <h4 className="footer__links-title">Em breve</h4>
            <p className="footer__newsletter-text">
              Estamos preparando algo especial para você. Siga-nos no Instagram para 
              acompanhar as novidades.
            </p>
            <a 
              href="https://instagram.com/nabicafe.slz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer__instagram-btn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="1" fill="currentColor" />
              </svg>
              Seguir no Instagram
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__bottom-line"></div>
          
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} Nabi Café. Todos os direitos reservados.
            </p>
            
            <p className="footer__made-with">
              Feito com <span className="footer__heart">♥</span> em São Luís
            </p>
          </div>

          {/* Decorative characters */}
          <div className="footer__characters">
            <span>珈</span>
            <span>琲</span>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        className="footer__scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Voltar ao topo"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
