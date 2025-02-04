import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import indian_cuisine_data from '../../../utils/indian_cuisine';
import VegFoodImg from '../../../utils/images/indian_vegetable.png';
import ChickenFoodImg from '../../../utils/images/indian_chicken.png';
import LambFoodImg from '../../../utils/images/indian_lamb.png';

const IndianCuisine = () => {
  const { vegetarian_specialties, chicken_specialties, lamb_specialties, note } = indian_cuisine_data[0];

  const sections = [
    { 
      data: vegetarian_specialties, 
      title: 'Vegetarische Spezialitäten',
      image: VegFoodImg,
      color: 'success',
      bgClass: 'bg-light'
    },
    { 
      data: chicken_specialties, 
      title: 'Hähnchen Spezialitäten',
      image: ChickenFoodImg,
      color: 'warning',
      bgClass: 'bg-light'
    },
    { 
      data: lamb_specialties, 
      title: 'Lamm Spezialitäten',
      image: LambFoodImg,
      color: 'danger',
      bgClass: 'bg-light'
    }
  ];

  return (
    <div className='indian-cuisine bg-white text-light py-5 border-top border-success'>
      <div className='container'>
        <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Indische Spezialitäten</h2>
        
        {sections.map(({ data, title, image, color, bgClass }, index) => (
          <div className={`row mb-5 py-4 ${bgClass}`} key={title}>
            <motion.div 
              className='col-lg-12'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className={`text-center mb-4 text-${color} display-4 fw-semibold`}>{title}</h3>
              <div className='row'>
                <motion.div 
                  className='col-lg-4 mb-4 d-flex align-items-center'
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <img 
                    src={image} 
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
                          <Card className={`border-0 ${bgClass} text-light h-100 shadow`}>
                            <CardBody>
                              <CardTitle className={`text-center fs-4 text-${color} text-capitalize fw-bold`}>
                                {item.name}
                              </CardTitle>
                              <CardText className='text-center'>
                                {item.description}
                              </CardText>
                              <CardText className={`text-center fs-4 fw-bold text-${color}`}>
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
        ))}

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

export default IndianCuisine;