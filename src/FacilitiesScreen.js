import { Fragment } from 'react';
import CarouselImage1 from './assets/images/facilities-gym.jpg';
import CarouselImage2 from "./assets/images/facilities-library.png";
import CarouselImage3 from "./assets/images/facilities-pool.jpg";

function FacilitiesScreen() {

    const colbugfix = {
      width: "230px",
      marginTop: "50px"
    };

  return (   
    <Fragment>

<div className="container-fluid home-container">
    <div className="row">
        <div className="col-lg-5">
            <h1 className="welcome">Facilities
            </h1>
            <div className="welcome_standfirst">Here are some of our state of the art facilities to try.</div>
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
                      <h5>Dany's Powerlifting Gym</h5>
                      <p>Best Gym in Dubai with up to 1000kg weights.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={CarouselImage2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>The Library</h5>
                      <p>Discover amazing books in our world class libraries. Also includes Javascript for Dummies.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={CarouselImage3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Olympic Size Swimming Pool</h5>
                      <p>Michael Phelps's endorsed pool for the optimimum swimming experience.</p>
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


export default FacilitiesScreen;
