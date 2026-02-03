import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Mensagem enviada! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/nabicafe.slz',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="18" cy="6" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      url: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:contato@nabicafe.com.br',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="contact__container container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="contact__accent japanese-accent">連絡</span>
          <h2 className="section-title">Contato</h2>
          <p className="section-subtitle">Estamos aqui para você</p>
        </motion.div>

        <motion.div
          ref={ref}
          className="contact__content"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Social Links */}
          <div className="contact__social">
            <h3 className="contact__social-title">Conecte-se conosco</h3>
            <p className="contact__social-text">
              Siga-nos nas redes sociais para novidades, promoções e momentos 
              especiais do Nabi Café.
            </p>

            <div className="contact__social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                >
                  <span className="contact__social-icon">{social.icon}</span>
                  <span className="contact__social-name">{social.name}</span>
                </a>
              ))}
            </div>

            {/* Decorative element */}
            <div className="contact__social-decoration">
              <span className="japanese-accent">蝶</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact__form-wrapper">
            <h3 className="contact__form-title">Envie uma mensagem</h3>
            
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__label">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact__input"
                  placeholder="Seu nome"
                  required
                />
                <span className="contact__input-line"></span>
              </div>

              <div className="contact__form-group">
                <label htmlFor="email" className="contact__label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact__input"
                  placeholder="seu@email.com"
                  required
                />
                <span className="contact__input-line"></span>
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__label">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact__textarea"
                  placeholder="Como podemos ajudar?"
                  rows="4"
                  required
                ></textarea>
                <span className="contact__input-line"></span>
              </div>

              <button type="submit" className="btn btn-primary contact__submit">
                Enviar mensagem
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="contact__wave">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,30 Q150,0 300,30 T600,30 T900,30 T1200,30" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>
    </section>
  );
};

export default Contact;
