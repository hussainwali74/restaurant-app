import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AboutChef1Img from '../../utils/images/about-chef1-img.jpg';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Reviews from '../../components/Reviews/Reviews';

function About() {
  return (
    <div className='about-page'>
      <header className='height-50 mt-5'>
        <motion.div 
          className="container h-100 d-flex align-items-center justify-content-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-light'>Über Uns</h1>
        </motion.div>
      </header>

      <div className="container my-5">
        <div className="row">
          <motion.div 
            className="col-lg-6 d-flex flex-column justify-content-center mb-5 mb-lg-0"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2>Pizzeria La Locanta</h2>
            <p>Eine fusion von Aromen aus Ost und West</p>
            <p>Besuchen Sie uns in der Senserstr. 4, 82140 Olching. Wir bieten Ihnen eine einzigartige Kombination aus traditioneller und moderner Küche.</p>
            <div className="opening-hours mt-3">
              <h3>Öffnungszeiten:</h3>
              <p>Montag: Geschlossen</p>
              <p>Dienstag-Donnerstag: 12:00-22:00</p>
              <p>Freitag-Sonntag: 12:00-22:30</p>
            </div>
            <div className="contact-info mt-3">
              <p>Telefon: 08142-4443484</p>
              <p>Mobil: +4917622237996, +4917632058606</p>
            </div>
            <Link to='/contact'>
              <button type='button' className='btn btn-success btn-lg rounded-0 text-capitalize mt-3 shadow'>Kontaktieren Sie uns</button>
            </Link>
          </motion.div>
          <motion.div 
            className="col-lg-6"
            initial={{ opacity: 0, x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={AboutChef1Img} className='img-fluid' alt="Unser Team" />
          </motion.div>
        </div>
      </div>

      <div className="bg-dark text-light py-1">
        <ImageGallery />
      </div>

      <div className="my-5">
        <Reviews />
      </div>
    </div>
  )
}

export default About;