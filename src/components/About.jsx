import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="about section">
      <div className="about__container container">
        <motion.div
          ref={ref}
          className="about__content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left Column - Text */}
          <motion.div className="about__text" variants={itemVariants}>
            <div className="section-header about__header">
              <span className="about__accent japanese-accent">物語</span>
              <h2 className="section-title">Nossa História</h2>
              <p className="section-subtitle">A origem do Nabi Café</p>
            </div>

            <div className="about__description">
              <p>
                O Nabi Café nasceu da paixão por café especial e pela rica cultura asiática. 
                <strong> "Nabi" (나비)</strong> significa "borboleta" em coreano — símbolo de 
                transformação, delicadeza e beleza efêmera.
              </p>
              
              <p>
                Aqui, cada xícara é preparada com a mesma dedicação e atenção aos detalhes 
                que caracteriza a arte oriental. Unimos técnicas tradicionais de preparo 
                com grãos selecionados de origem única, criando experiências sensoriais únicas.
              </p>

              <p>
                Nosso espaço foi pensado para ser um refúgio — um momento de pausa na 
                rotina agitada, onde você pode saborear não apenas um café excepcional, 
                mas também a tranquilidade que a estética asiática proporciona.
              </p>
            </div>

            <div className="about__features">
              <div className="about__feature">
                <span className="about__feature-icon">☕</span>
                <div>
                  <h4>Café Especial</h4>
                  <p>Grãos selecionados de origem única</p>
                </div>
              </div>
              <div className="about__feature">
                <span className="about__feature-icon">🌸</span>
                <div>
                  <h4>Influência Asiática</h4>
                  <p>Sabores e estética oriental</p>
                </div>
              </div>
              <div className="about__feature">
                <span className="about__feature-icon">✨</span>
                <div>
                  <h4>Ambiente Acolhedor</h4>
                  <p>Espaço pensado para relaxar</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div className="about__visual" variants={itemVariants}>
            <div className="about__image-frame">
              <div className="about__image-placeholder">
                <div className="about__image-pattern"></div>
                <div className="about__image-content">
                  <span className="about__image-character">蝶</span>
                  <span className="about__image-text">Nabi Café</span>
                </div>
              </div>
              
              {/* Decorative corner elements */}
              <div className="about__corner about__corner--tl"></div>
              <div className="about__corner about__corner--tr"></div>
              <div className="about__corner about__corner--bl"></div>
              <div className="about__corner about__corner--br"></div>
            </div>

            {/* Quote */}
            <blockquote className="about__quote">
              <p>"Na simplicidade de uma xícara de café, encontramos a essência da vida."</p>
              <cite>— Filosofia Nabi</cite>
            </blockquote>
          </motion.div>
        </motion.div>

        {/* Decorative Wave */}
        <div className="about__wave">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,30 Q150,0 300,30 T600,30 T900,30 T1200,30" fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default About;
