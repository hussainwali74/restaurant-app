import React from 'react';
import { motion } from 'framer-motion';

function ContactInfo() {
  return (
    <motion.div 
      className='d-flex flex-column align-items-center text-center'
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
        <h2 className='fs-1 mb-3 text-uppercase fw-bold'>Wo Sie uns finden</h2>
        <p className='mb-3'>Senserstr. 4, 82140 Olching</p>
        <p className='mb-3'>Tel: 08142-4443484</p>
        <p className='mb-4'>Mobil: +4917622237996 / +4917632058606</p>
        
        <h3 className='text-capitalize mb-3'>Öffnungszeiten</h3>
        <p className="m-0">Montag: Ruhetag</p>
        <p className="m-0">Dienstag - Donnerstag: 12:00 - 22:00 Uhr</p>
        <p className='mb-4'>Freitag - Sonntag: 12:00 - 22:30 Uhr</p>

        <div className='bg-success bg-opacity-10 p-4 rounded'>
          <h4 className='text-success mb-3'>Eröffnungsangebot! (Nur Abholung)</h4>
          <p className='mb-2'>Feiern Sie mit uns und genießen Sie 20% Rabatt auf Ihr Essen – nur an unseren ersten 3 Tagen!</p>
          <p className='mb-0'>Gültig von: 01.02.2025 bis 03.02.2025</p>
        </div>
    </motion.div>
  )
}

export default ContactInfo;