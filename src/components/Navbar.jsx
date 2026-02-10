import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#menu', label: 'Menu' },
    { href: '#gallery', label: 'Galeria' },
    { href: '#location', label: 'Localização' },
    { href: '#contact', label: 'Contato' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar__container">
        <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, '#home')}>
          <span className="navbar__logo-img" role="img" aria-label="Nabi"></span>
          <span className="navbar__logo-accent">蝶</span>
        </a>

        <div className={`navbar__menu ${isMobileMenuOpen ? 'navbar__menu--open' : ''}`}>
          <ul className="navbar__links">
            {navLinks.map((link, index) => (
              <motion.li 
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <a 
                  href={link.href} 
                  className="navbar__link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        <button 
          className={`navbar__toggle ${isMobileMenuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
