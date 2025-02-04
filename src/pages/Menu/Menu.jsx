import React from 'react';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import { motion } from 'framer-motion';
import LunchImg from '../../utils/images/lunch-img.jpg';
import BurgerImg from '../../utils/images/burger.jpg';
import Pizzaimg from '../../utils/images/pizza.jpg';
import DessertImg from '../../utils/images/dessert-img.jpg';
import DrinksImg from '../../utils/images/drinks-img.jpg';
import snacks from '../../utils/snacks';
import burger from '../../utils/burger';
import salad_bar from '../../utils/salad_bar';
import pizza from '../../utils/pizza';
import pasta from '../../utils/pasta';
import dessert from '../../utils/dessert';
import drink from '../../utils/drink';
import IndianCuisine from './dishes/indian_cuisine.component';
import TacoComponent from './dishes/taco.component';
import TurkishSpecialitiesComponent from './dishes/turkish_specialties';
import TanduriBrotComponent from './dishes/tandoori_brot_spezialitaeten';

function Menu() {
  return (
    <div className='menu-page'>
      <header className='height-50 mt-5'>
        <motion.div 
          className='container h-100 d-flex align-items-center justify-content-center'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-light'>Menü</h1>
        </motion.div>
      </header>

      <div className='breakfast my-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Snacks</h2>
          <div className='row flex-column-reverse flex-lg-row w-full'>

            <motion.div 
              className=' w-full d-flex flex-column justify-content-around'
              initial={{ opacity: 0, x: 350 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {snacks.length > 8 ? (
                <div className="row">
                  <div className="col-4">
                    {snacks.slice(0, Math.ceil(snacks.length/3)).map((snack) => (
                      <div key={snack.id}>
                        <Card className='border-0'>
                          <CardBody>
                            <CardTitle className='text-center fs-3 text-capitalize'>
                              {snack.name}
                            </CardTitle>
                            <CardText className='text-center fs-5'>
                              {snack.description}
                            </CardText>
                            <CardText className='text-center fs-3 fw-bold text-success'>
                              {snack.price} €
                            </CardText>
                          </CardBody>
                        </Card>
                      </div>
                    ))}
                  </div>
                  <div className="col-4">
                    {snacks.slice(Math.ceil(snacks.length/3), Math.ceil(2*snacks.length/3)).map((snack) => (
                      <div key={snack.id}>
                        <Card className='border-0'>
                          <CardBody>
                            <CardTitle className='text-center fs-3 text-capitalize'>
                              {snack.name}
                            </CardTitle>
                            <CardText className='text-center fs-5'>
                              {snack.description}
                            </CardText>
                            <CardText className='text-center fs-3 fw-bold text-success'>
                              {snack.price} €
                            </CardText>
                          </CardBody>
                        </Card>
                      </div>
                    ))}
                  </div>
                  <div className="col-4">
                    {snacks.slice(Math.ceil(2*snacks.length/3)).map((snack) => (
                      <div key={snack.id}>
                        <Card className='border-0'>
                          <CardBody>
                            <CardTitle className='text-center fs-3 text-capitalize'>
                              {snack.name}
                            </CardTitle>
                            <CardText className='text-center fs-5'>
                              {snack.description}
                            </CardText>
                            <CardText className='text-center fs-3 fw-bold text-success'>
                              {snack.price} €
                            </CardText>
                          </CardBody>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              ) : snacks.length > 4 ? (
                <div className="row">
                  <div className="col-6">
                    {snacks.slice(0, 4).map((snack) => (
                      <div key={snack.id}>
                        <Card className='border-0'>
                          <CardBody>
                            <CardTitle className='text-center fs-3 text-capitalize'>
                              {snack.name}
                            </CardTitle>
                            <CardText className='text-center fs-5'>
                              {snack.description}
                            </CardText>
                            <CardText className='text-center fs-3 fw-bold text-success'>
                              {snack.price} €
                            </CardText>
                          </CardBody>
                        </Card>
                      </div>
                    ))}
                  </div>
                  <div className="col-6">
                    {snacks.slice(4).map((snack) => (
                      <div key={snack.id}>
                        <Card className='border-0'>
                          <CardBody>
                            <CardTitle className='text-center fs-3 text-capitalize'>
                              {snack.name}
                            </CardTitle>
                            <CardText className='text-center fs-5'>
                              {snack.description}
                            </CardText>
                            <CardText className='text-center fs-3 fw-bold text-success'>
                              {snack.price} €
                            </CardText>
                          </CardBody>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                snacks.map((snack) => (
                  <div key={snack.id}>
                    <Card className='border-0'>
                      <CardBody>
                        <CardTitle className='text-center fs-3 text-capitalize'>
                          {snack.name}
                        </CardTitle>
                        <CardText className='text-center fs-5'>
                          {snack.description}
                        </CardText>
                        <CardText className='text-center fs-3 fw-bold text-success'>
                          {snack.price} €
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                ))
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <div className='lunch bg-dark text-light py-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Salat Bar</h2>
          <div className='row'>
            <motion.div 
              className='col-lg-6 d-flex flex-column justify-content-around'
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {salad_bar.map((salad_bar) => (
                <div key={salad_bar.id}>
                  <Card className='border-0 bg-dark text-light'>
                    <CardBody>
                      <CardTitle className='text-center fs-3 text-capitalize'>
                        {salad_bar.name}
                      </CardTitle>
                      <CardText className='text-center fs-5'>
                        {salad_bar.description}
                      </CardText>
                      <CardText className='text-center fs-3 fw-bold text-success'>
                        {salad_bar.price} €
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </motion.div>
            <motion.div 
              className='col-lg-6 d-flex justify-content-center'
              initial={{ opacity: 0, x: 350 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={LunchImg} className='img-fluid w-75 h-75 mt-4 mt-lg-0' alt="" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className='pizza my-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Pizza (a,i) </h2>
          <div className='row flex-column-reverse flex-lg-row'>
            <motion.div 
              className='col-lg-6 d-flex justify-content-center'
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={Pizzaimg} className='img-fluid w-75 h-50 mt-4 mt-lg-0' alt="" />
            </motion.div>
            <motion.div 
              className='col-lg-6 d-flex flex-column justify-content-around'
              initial={{ opacity: 0, x: 350 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="row">
                <div className="col-6">
                  {pizza.slice(0, pizza.length-6).map((pizza) => (
                    <div key={pizza.id}>
                      <Card className='border-0'>
                        <CardBody>
                          <CardTitle className='text-center fs-3 text-capitalize'>
                            {pizza.name}
                          </CardTitle>
                          <CardText className='text-center fs-5'>
                            {pizza.description}
                          </CardText>
                          <CardText className='text-center fs-3 fw-bold text-success'>
                            {pizza.price} €
                          </CardText>
                        </CardBody>
                      </Card>
                    </div>
                  ))}
                </div>
                <div className="col-6">
                  {pizza.slice(-6).map((pizza) => (
                    <div key={pizza.id}>
                      <Card className='border-0'>
                        <CardBody>
                          <CardTitle className='text-center fs-3 text-capitalize'>
                            {pizza.name}
                          </CardTitle>
                          <CardText className='text-center fs-5'>
                            {pizza.description}
                          </CardText>
                          <CardText className='text-center fs-3 fw-bold text-success'>
                            {pizza.price} €
                          </CardText>
                        </CardBody>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className='pasta bg-dark text-light py-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Pasta (a)</h2>
          <div className='row'>
            <motion.div 
              className='col-lg-6 d-flex flex-column justify-content-around'
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {pasta.map((pasta) => (
                <div key={pasta.id}>
                  <Card className='border-0 bg-dark text-light'>
                    <CardBody>
                      <CardTitle className='text-center fs-3 text-capitalize'>
                        {pasta.name}
                      </CardTitle>
                      <CardText className='text-center fs-5'>
                        {pasta.description}
                      </CardText>
                      <CardText className='text-center fs-3 fw-bold text-success'>
                        {pasta.price} €
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </motion.div>
            <motion.div 
              className='col-lg-6 d-flex justify-content-center'
              initial={{ opacity: 0, x: 350 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={LunchImg} className='img-fluid w-75 h-75 mt-4 mt-lg-0' alt="" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className='burger my-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Burger (a) </h2>
          <div className='row flex-column-reverse flex-lg-row'>
            <motion.div 
              className='col-lg-6 d-flex justify-content-center'
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={BurgerImg} className='img-fluid w-75 h-25 mt-4 mt-lg-0' alt="" />
            </motion.div>
            <motion.div 
              className='col-lg-6 d-flex flex-column justify-content-around'
              initial={{ opacity: 0, x: 350 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="row">
                <div className="col-6">
                    {burger.slice(0, burger.length-6).map((burger) => (
                    <div key={burger.id}>
                      <Card className='border-0'>
                        <CardBody>
                          <CardTitle className='text-center fs-3 text-capitalize'>
                            {burger.name}
                          </CardTitle>
                          <CardText className='text-center fs-5'>
                            {burger.description}
                          </CardText>
                          <CardText className='text-center fs-3 fw-bold text-success'>
                            {burger.price} €
                          </CardText>
                        </CardBody>
                      </Card>
                    </div>
                  ))}
                </div>
                <div className="col-6">
                  {burger.slice(-6).map((burger) => (
                    <div key={burger.id}>
                      <Card className='border-0'>
                        <CardBody>
                          <CardTitle className='text-center fs-3 text-capitalize'>
                            {burger.name}
                          </CardTitle>
                          <CardText className='text-center fs-5'>
                            {burger.description}
                          </CardText>
                          <CardText className='text-center fs-3 fw-bold text-success'>
                            {burger.price} €
                          </CardText>
                        </CardBody>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
        
      <IndianCuisine />
      <TacoComponent />
      <TurkishSpecialitiesComponent />
      <TanduriBrotComponent />


      <div className='dessert bg-dark text-light py-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dessert</h2>
          <div className='row'>
            <motion.div 
              className='col-lg-6 d-flex flex-column justify-content-around'
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {dessert.map((dessert) => (
                <div key={dessert.id}>
                  <Card className='border-0 bg-dark text-light'>
                    <CardBody>
                      <CardTitle className='text-center fs-3 text-capitalize'>
                        {dessert.name}
                      </CardTitle>
                      <CardText className='text-center fs-5'>
                        {dessert.description}
                      </CardText>
                      <CardText className='text-center fs-3 fw-bold text-success'>
                        {dessert.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </motion.div>
            <motion.div 
              className='col-lg-6 d-flex justify-content-center'
              initial={{ opacity: 0, x: 350 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={DessertImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className='drinks my-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Getränke</h2>
          <div className='row flex-column-reverse flex-lg-row'>
            <motion.div 
              className='col-lg-6 d-flex justify-content-center'
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={DrinksImg} className='img-fluid w-75 h-60 mt-4 mt-lg-0' alt="" />
            </motion.div>
            <motion.div 
              className='col-lg-6 d-flex flex-column justify-content-around'
              initial={{ opacity: 0, x: 350 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {drink.map((drink) => (
                <div key={drink.id}>
                  <Card className='border-0'>
                    <CardBody>
                      <CardTitle className='text-center fs-3 text-capitalize'>
                        {drink.name}
                      </CardTitle>
                      <CardText className='text-center fs-3 fw-bold text-success'>
                        {drink.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div 
        className="container my-5 pt-5 d-flex justify-content-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="allergens-section">
          <h3 className="text-center fs-4 mb-3 text-warning">Allergene</h3>
          <div className="row g-8">
            <div className="col-md-4">
              <p className="mb-2"><span className="fw-bold">A.</span> Glutenhaltiges</p>
              <p className="mb-2"><span className="fw-bold">B.</span> Sellerie</p>
              <p className="mb-2"><span className="fw-bold">C.</span> Krebstiere</p>
              <p className="mb-2"><span className="fw-bold">D.</span> Lupinen</p>
            </div>
            <div className="col-md-4">
              <p className="mb-2"><span className="fw-bold">E.</span> Sesamsamen</p>
              <p className="mb-2"><span className="fw-bold">F.</span> Fisch</p>
              <p className="mb-2"><span className="fw-bold">G.</span> Senf</p>
              <p className="mb-2"><span className="fw-bold">H.</span> Erdnüsse</p>
            </div>
            <div className="col-md-4">
              <p className="mb-2"><span className="fw-bold">I.</span> Milch</p>
              <p className="mb-2"><span className="fw-bold">J.</span> Schwefeldioxid</p>
              <p className="mb-2"><span className="fw-bold">K.</span> Sojabohnen</p>
              <p className="mb-2"><span className="fw-bold">L.</span> Schalenfrüchte</p>
            </div>
            <div className="col-md-4">
              <p className="mb-2"><span className="fw-bold">M.</span> Eier</p>
              <p className="mb-2"><span className="fw-bold">N.</span> Weichtiere</p>
            </div>
          </div>
        </div>
        {/* <Link to='/contact'>
          <button type='button' className='btn btn-success btn-lg rounded-0 text-capitalize mx-2 shadow'>Book your table</button>
        </Link> */}
      </motion.div>
    </div>
  )
}

export default Menu;