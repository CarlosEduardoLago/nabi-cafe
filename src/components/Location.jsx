import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Location.css';

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const hours = [
    { day: 'Segunda', time: 'Fechado' },
    { day: 'Terça - Sexta', time: '08:00 - 19:00' },
    { day: 'Sábado', time: '09:00 - 20:00' },
    { day: 'Domingo', time: '09:00 - 17:00' },
  ];

  return (
    <section id="location" className="location section">
      <div className="location__container container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="location__accent japanese-accent">場所</span>
          <h2 className="section-title">Localização</h2>
          <p className="section-subtitle">Venha nos visitar</p>
        </motion.div>

        <motion.div
          ref={ref}
          className="location__content"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Map */}
          <div className="location__map">
            <div className="location__map-frame">
              <div className="location__map-placeholder">
                <div className="location__map-pattern"></div>
                <div className="location__map-content">
                  <svg 
                    className="location__map-icon" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="location__map-city">São Luís</span>
                  <span className="location__map-state">Maranhão</span>
                </div>
              </div>
              
              {/* Corner decorations */}
              <div className="location__corner location__corner--tl"></div>
              <div className="location__corner location__corner--tr"></div>
              <div className="location__corner location__corner--bl"></div>
              <div className="location__corner location__corner--br"></div>
            </div>

            <a 
              href="https://maps.google.com/?q=São+Luís,+MA,+Brazil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="location__map-link"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Ver no Google Maps
            </a>
          </div>

          {/* Info Cards */}
          <div className="location__info">
            {/* Address Card */}
            <div className="location__card">
              <div className="location__card-header">
                <span className="location__card-icon">📍</span>
                <h3 className="location__card-title">Endereço</h3>
              </div>
              <div className="location__card-content">
                <p>São Luís, Maranhão</p>
                <p className="location__card-note">
                  <em>Em breve - Endereço completo</em>
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="location__card location__card--hours">
              <div className="location__card-header">
                <span className="location__card-icon">🕐</span>
                <h3 className="location__card-title">Horários</h3>
              </div>
              <div className="location__card-content">
                <ul className="location__hours">
                  {hours.map((item, index) => (
                    <li key={index} className="location__hours-item">
                      <span className="location__hours-day">{item.day}</span>
                      <span className="location__hours-line"></span>
                      <span className={`location__hours-time ${item.time === 'Fechado' ? 'location__hours-time--closed' : ''}`}>
                        {item.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Quick */}
            <div className="location__card location__card--contact">
              <div className="location__card-header">
                <span className="location__card-icon">💬</span>
                <h3 className="location__card-title">Contato Rápido</h3>
              </div>
              <div className="location__card-content">
                <a 
                  href="https://instagram.com/nabicafe.slz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="location__social-link"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1" fill="currentColor" />
                  </svg>
                  @nabicafe.slz
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          className="location__status"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <span className="location__status-badge">
            <span className="location__status-dot"></span>
            Em breve em São Luís
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
