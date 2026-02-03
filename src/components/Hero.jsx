import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Background Pattern */}
      <div className="hero__pattern"></div>
      
      {/* Decorative Elements */}
      <motion.div 
        className="hero__decoration hero__decoration--left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0C50 0 80 50 80 100C80 150 50 200 50 200" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M30 20C30 20 60 70 60 120C60 170 30 200 30 200" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </motion.div>

      <motion.div 
        className="hero__decoration hero__decoration--right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0C50 0 20 50 20 100C20 150 50 200 50 200" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M70 20C70 20 40 70 40 120C40 170 70 200 70 200" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </motion.div>

      <div className="hero__container">
        {/* Logo */}
        <motion.div 
          className="hero__logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="hero__logo-circle">
            <span className="hero__logo-na">NA</span>
            <span className="hero__logo-bi">BI</span>
            <div className="hero__logo-tagline">
              <span>SPECIAL</span>
              <span>ASIAN</span>
              <span>COFFEE</span>
              <span>SHOP</span>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1 className="hero__title">
            nabi
            <span className="hero__title-accent">・</span>
            special asian coffee shop
          </h1>
          
          <p className="hero__subtitle">
            cafeteria com influência asiática
          </p>

          <div className="hero__divider">
            <span className="hero__divider-line"></span>
            <span className="hero__divider-character">蝶</span>
            <span className="hero__divider-line"></span>
          </div>

          <p className="hero__location">
            <span className="hero__location-icon">📍</span>
            São Luís, MA
          </p>

          <motion.div 
            className="hero__cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <button className="btn btn-primary" onClick={scrollToMenu}>
              Conheça nosso menu
            </button>
            <a href="#about" className="btn btn-outline">
              Nossa história
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="hero__scroll-text">Scroll</span>
          <div className="hero__scroll-line"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
