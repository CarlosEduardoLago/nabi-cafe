import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Menu.css';

const menuItems = [
  {
    id: 1,
    name: 'Matcha Latte',
    description: 'Matcha cerimonial japonês com leite vaporizado e um toque de mel',
    price: 'R$ 18',
    category: 'Especial',
    accent: '抹茶',
  },
  {
    id: 2,
    name: 'Drip Coffee',
    description: 'Café coado à mão com grãos de origem única, preparado com técnica pour-over',
    price: 'R$ 14',
    category: 'Clássico',
    accent: 'コーヒー',
  },
  {
    id: 3,
    name: 'Hojicha Tonic',
    description: 'Chá verde torrado japonês servido com água tônica e laranja',
    price: 'R$ 16',
    category: 'Refrescante',
    accent: 'ほうじ茶',
  },
  {
    id: 4,
    name: 'Cappuccino Artesanal',
    description: 'Espresso duplo com leite vaporizado e arte latte delicada',
    price: 'R$ 15',
    category: 'Clássico',
    accent: 'カプチーノ',
  },
  {
    id: 5,
    name: 'Yuzu Espresso',
    description: 'Espresso com toque cítrico de yuzu japonês e mel de flores',
    price: 'R$ 19',
    category: 'Especial',
    accent: '柚子',
  },
  {
    id: 6,
    name: 'Affogato Sakura',
    description: 'Sorvete de baunilha com espresso e calda de flor de cerejeira',
    price: 'R$ 22',
    category: 'Sobremesa',
    accent: '桜',
  },
];

const Menu = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="menu" className="menu section">
      <div className="menu__container container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="menu__accent japanese-accent">品書</span>
          <h2 className="section-title">Menu em Destaque</h2>
          <p className="section-subtitle">Nossas criações especiais</p>
        </motion.div>

        <motion.div
          ref={ref}
          className="menu__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {menuItems.map((item) => (
            <motion.article
              key={item.id}
              className="menu__card"
              variants={cardVariants}
            >
              <div className="menu__card-image">
                <div className="menu__card-pattern"></div>
                <span className="menu__card-accent">{item.accent}</span>
              </div>
              
              <div className="menu__card-content">
                <span className="menu__card-category">{item.category}</span>
                <h3 className="menu__card-title">{item.name}</h3>
                <p className="menu__card-description">{item.description}</p>
                <span className="menu__card-price">{item.price}</span>
              </div>

              <div className="menu__card-line"></div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="menu__cta"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="menu__cta-text">
            Visite-nos para conhecer nosso cardápio completo
          </p>
          <div className="menu__cta-divider">
            <span></span>
            <span className="japanese-accent">蝶</span>
            <span></span>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="menu__decoration menu__decoration--left">
        <svg viewBox="0 0 100 300" fill="none">
          <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.3"/>
          <circle cx="50" cy="100" r="2" fill="currentColor" opacity="0.3"/>
          <circle cx="50" cy="150" r="2" fill="currentColor" opacity="0.3"/>
          <circle cx="50" cy="200" r="2" fill="currentColor" opacity="0.3"/>
          <circle cx="50" cy="250" r="2" fill="currentColor" opacity="0.3"/>
          <path d="M50 50 L50 250" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
        </svg>
      </div>
      <div className="menu__decoration menu__decoration--right">
        <svg viewBox="0 0 100 300" fill="none">
          <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.3"/>
          <circle cx="50" cy="100" r="2" fill="currentColor" opacity="0.3"/>
          <circle cx="50" cy="150" r="2" fill="currentColor" opacity="0.3"/>
          <circle cx="50" cy="200" r="2" fill="currentColor" opacity="0.3"/>
          <circle cx="50" cy="250" r="2" fill="currentColor" opacity="0.3"/>
          <path d="M50 50 L50 250" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
        </svg>
      </div>
    </section>
  );
};

export default Menu;
