import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import TacoImg from '../../../utils/images/tacos.png'
import menu_data from '../../../utils/food_cafe_menukarte'
const TacoComponent = () => {
    const { french_tacos } = menu_data.menu; // Access the tacos data from the JSON
    const { title, note, data } = french_tacos; // Destructure note and data
    console.log(french_tacos)

  return (
    <div className='taco-component bg-white text-light py-5 border-top border-success'>
      <div className='container'>
        <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>{title}</h2>
        
        <div className='row mb-5 py-4 bg-light'>
          <motion.div 
            className='col-lg-12'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className='text-center mb-4'>Tacos Auswahl</h3>
            <div className='row'>
              <motion.div 
                className='col-lg-4 mb-4 d-flex align-items-center'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <img 
                  src={TacoImg} 
                  className='img-fluid rounded-3 shadow-lg' 
                  alt={title}
                  style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
                />
              </motion.div>
              <div className='col-lg-8'>
                <div className='row'>
                  {data.map((item) => (
                    <div key={item.id} className='col-lg-6 mb-4'>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Card className='border-0 bg-light text-dark h-100 shadow'>
                          <CardBody>
                            <CardTitle className='text-center fs-4 text-capitalize fw-bold'>
                              {item.name}
                            </CardTitle>
                            <CardText className='text-center'>
                              {item.note ? `${item.note}` : 'Keine Beschreibung verfügbar.'}
                            </CardText>
                            <CardText className='text-center fs-4 fw-bold'>
                              €{item.price.toFixed(2)}
                            </CardText>
                          </CardBody>
                        </Card>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Note Section */}
        <motion.div 
          className='text-center mt-4 py-3 bg-success bg-opacity-10 rounded-3'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className='fs-5 text-success mb-0'>{note}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default TacoComponent;