import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div
            className="home">
                <div className="home_container">
                   <img  className="home_image "  
                         src="https://www.reviewnung.com/wp-content/uploads/2020/10/The-Lie.jpg" 
                         alt=""
                    />

                   <div className="home_row">
                       
                       <Product
                       id="234567"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                        price={55.00}
                         image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
                          rating={5}
                          />
                       <Product
                       id="1234"
                       title="d.light PB20 Pro 20000 mAh Made in India Power Bank, Black for Heavy Duty Usage "
                       price={599.0}
                       rating={4}
                       image="https://images-na.ssl-images-amazon.com/images/I/91dnoTa0WsL._SL1500_.jpg"

                       />
                       
                       
                   </div>
                   <div className="home_row">
                      <Product
                      id="2345"
                       title="DAMDAM (Pack Of 2 Pc)Back camera lens protector anti shock/anti-scratch/clear/camera tempered glass for Mi Xiaomi Redmi Note 10 Pro"
                      price={399.00}
                      rating={3}
                      image="https://images-na.ssl-images-amazon.com/images/I/61fMYCQzcnL._SL1100_.jpg" 
                      />
                      <Product
                      id="7899" 
                      title="New Apple iPhone 12 (64GB) - White"
                      price={70000.00} 
                      rating={5}
                      image="https://images-na.ssl-images-amazon.com/images/I/711wsjBtWeL._SL1500_.jpg"
                      />
                      <Product
                      id="234456"
                      title="Lip Mask For Pink Lips Moisturizing Cheery hydrating Anti Drying Lightening Skin Care Lip Treatment "
                      price={599.00}
                      rating={4}
                      image="https://images-na.ssl-images-amazon.com/images/I/61QQdzkoutL._SL1280_.jpg"

                       />
                   </div>
                   <div className="home_row">
                       <Product id="9885775"
                       title="Lioncrown Faux Leather Slim 14 inches Laptop Sleeve Messenger Bag (Tan)"
                       price={1889.00}
                       rating={5}
                       image="https://images-na.ssl-images-amazon.com/images/I/812kiRiKtjL._SL1500_.jpg"

                       />
                   </div>
                   
            </div>

        </div>
    )    
    
}

export default Home
