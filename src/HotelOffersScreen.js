import { Fragment } from 'react';
import CarouselImage1 from './assets/images/hotelinfo-beds.jpg';
import CarouselImage2 from "./assets/images/hotelinfo-pool.jpg";
import CarouselImage3 from "./assets/images/hotelinfo-banana.jpg";

function HotelOffersScreen() {

    const colbugfix = {
      width: "230px",
      marginTop: "50px"
    };

  return (   
    <Fragment>

<div className="container-fluid home-container">
    <div className="row">
        <div className="col-lg-5">
            <h1 className="welcome">Hotel Offers
            </h1>
            <div className="welcome_standfirst">Enjoy some amazing offers during your stay at our hotel.</div>
        </div>
        <div className="col-lg-7 p-5">

          <div style={{width: "650px", marginTop: "2rem"}}>

            <div id="carouselExampleCaptions" className="carousel slide border" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={CarouselImage1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Buy Two Nights Stay and Get One CSS Course Free</h5>
                      <p>Relax at our hotel and upskill your CSS knowledge too.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={CarouselImage2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>20% Discount at the Pool</h5>
                      <p>Enjoy food and beverage at the pool with 20% discount.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={CarouselImage3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Banana Boat Ride for AED50</h5>
                      <p>Share a banana boat ride with friends for AED50 only.</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

          </div>

        </div>

    </div>
    
    </div>
              
    </Fragment>




  );
}


export default HotelOffersScreen;
