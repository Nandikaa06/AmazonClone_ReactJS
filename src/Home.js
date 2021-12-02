import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt=" " />
               <div className="home__row">
                   <Product 
                      id="12321341"
                      title="The Lean Startup"
                      price={60}
                      image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                      rating={4}
                   />
                   <Product 
                      id="49538094"
                      title="Harry Potter & the Philosopher's Stone"
                      price={70}
                      image="https://images-na.ssl-images-amazon.com/images/I/51ifu1aebKL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                      rating={5}
                   />
                   <Product 
                      id="64533094"
                      title="New Apple iPhone 12 (128GB) - (Product) RED"
                      price={4690}
                      image="https://m.media-amazon.com/images/I/71E5zB1qbIL._SL1500_.jpg"
                      rating={4}
                   />
                   <Product 
                      id="56432881"
                      title="Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | 24.1 MP CMOS Sensor | DIGIC 4+ Image Processor and Full HD Videos"
                      price={547.50}
                      image="https://images-na.ssl-images-amazon.com/images/I/71EWRyqzw0L.__AC_SY300_SX300_QL70_FMwebp_.jpg"
                      rating={5} 
                   />
                   
               </div>
               <div className="home__row">
                   <Product 
                      id="83213541"
                      title="Footons Women's Lightweight Breathable comfortable Leather stylish slip on casual/Party/Ethinic wear heels"
                      price={40}
                      image="https://m.media-amazon.com/images/I/71rFRf-qybL._UL1500_.jpg"
                      rating={3} 
                   />
                   <Product
                      id="56002881"
                      title="Mammon Girls 3-PCS Leather Backpack sling & purse set for Women (3bp-pista)"
                      price={100}
                      image="https://m.media-amazon.com/images/I/71vk1I0JUmL._UL1500_.jpg"
                      rating={5} 
                   />
                   <Product
                      id="43237891"
                      title="ANNI DESIGNER Women's Georgette Flower Printed Plain Weave Saree with Blouse Piece"
                      price={260}
                      image="https://m.media-amazon.com/images/I/41nwPDJDUvL.jpg"
                      rating={3} 
                   />
               </div>
               <div className="home__row">
                   <Product 
                      id="56432881"
                      title="Samsung 810 L Frost Free Side-by-Side Refrigerator(RF28N9780SG/TL, Black, Inverter Compressor)"
                      price={5000}
                      image="https://m.media-amazon.com/images/I/71O31clz6mL._SL1500_.jpg"
                      rating={5} 
                   />
                   <Product 
                      id="16749902"
                      title="iFFALCON 139 cm (55 inches) 4K Ultra HD Certified Android Smart QLED TV 55H71 (Metallic Black) (2021 Model) | Dolby Vision & Atmos"
                      price={6980}
                      image="https://m.media-amazon.com/images/I/714McYLj69L._SL1500_.jpg"
                      rating={4} 
                   />
               </div>
            </div>
        </div>
    );
}

export default Home
