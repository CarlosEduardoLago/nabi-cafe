import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Gallery.css';

const galleryItems = [
  {
    id: 1,
    title: 'Matcha Art',
    category: 'Bebidas',
    size: 'large',
    accent: '美',
  },
  {
    id: 2,
    title: 'Ambiente',
    category: 'Espaço',
    size: 'small',
    accent: '空',
  },
  {
    id: 3,
    title: 'Latte Art',
    category: 'Bebidas',
    size: 'small',
    accent: '花',
  },
  {
    id: 4,
    title: 'Detalhes',
    category: 'Decoração',
    size: 'medium',
    accent: '和',
  },
  {
    id: 5,
    title: 'Preparo',
    category: 'Processo',
    size: 'medium',
    accent: '技',
  },
  {
    id: 6,
    title: 'Momentos',
    category: 'Experiência',
    size: 'large',
    accent: '時',
  },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="gallery" className="gallery section">
      <div className="gallery__container container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="gallery__accent japanese-accent">写真</span>
          <h2 className="section-title">Galeria</h2>
          <p className="section-subtitle">Momentos capturados no Nabi</p>
        </motion.div>

        <motion.div
          ref={ref}
          className="gallery__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {galleryItems.map((item) => (
            <motion.article
              key={item.id}
              className={`gallery__item gallery__item--${item.size}`}
              variants={itemVariants}
            >
              <div className="gallery__item-inner">
                <div className="gallery__item-bg">
                  <div className="gallery__item-pattern"></div>
                  <span className="gallery__item-character">{item.accent}</span>
                </div>
                
                <div className="gallery__item-overlay">
                  <span className="gallery__item-category">{item.category}</span>
                  <h3 className="gallery__item-title">{item.title}</h3>
                  <div className="gallery__item-line"></div>
                </div>

                {/* Corner accents */}
                <div className="gallery__corner gallery__corner--tl"></div>
                <div className="gallery__corner gallery__corner--br"></div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          className="gallery__instagram"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="gallery__instagram-text">
            Siga-nos para mais momentos
          </p>
          <a 
            href="https://instagram.com/nabicafe.slz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="gallery__instagram-link"
          >
            <svg 
              className="gallery__instagram-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="18" cy="6" r="1" fill="currentColor" />
            </svg>
            @nabicafe.slz
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
