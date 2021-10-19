import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CardImage1 from './assets/images/ent-netflix.png';
import CardImage2 from './assets/images/ent-prime.png';
import CardImage3 from './assets/images/ent-osn.png';
import CardImage4 from './assets/images/ent-starz.png';
import CardImage5 from './assets/images/ent-apple.png';
import CardImage6 from './assets/images/ent-bein.png';
import CarouselImage2 from "./assets/images/facilities-library.png";
import CarouselImage3 from "./assets/images/facilities-pool.jpg";
import reactDom from 'react-dom';

function EntertainmentScreen() {

    const colbugfix = {
      width: "230px",
      marginTop: "50px"
    };

  return (   
    <Fragment>

            <div className="container-fluid home-container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="welcome mt-3">Entertainment
                        </h1>
                    </div>
                    <div className="col-12">

                    <div className="row gap-5 ps-5 mt-5">

                        <div className="col-3">
                                <div className="card">
                                <a href="https://netflix.com" target="_blank">
                                <img src={CardImage1} className="card-img-top" alt="Netflix" /></a>
                                </div>
                        </div>
                        <div className="col-3">
                                <div className="card">
                                <a href="https://www.primevideo.com/" target="_blank">
                                <img src={CardImage2} className="card-img-top" alt="Prime Video" /></a>
                                </div>
                        </div>
                        <div className="col-3">
                                <div className="card">
                                <a href="https://www.osn.com/" target="_blank">
                                <img src={CardImage3} className="card-img-top" alt="OSN" /></a>
                                </div>
                        </div>

                    </div>

                    <div className="row gap-5 ps-5 mt-5">

                        <div className="col-3">
                                <div className="card">
                                <a href="https://starzplay.com/" target="_blank">
                                <img src={CardImage4} className="card-img-top" alt="StarzPlay" /></a>
                                </div>
                        </div>
                        <div className="col-3">
                                <div className="card">
                                <a href="https://tv.apple.com/" target="_blank">
                                <img src={CardImage5} className="card-img-top" alt="Apple TV" /></a>
                                </div>
                        </div>
                        <div className="col-3">
                                <div className="card">
                                <a href="hhttps://www.beinsports.com/" target="_blank">
                                <img src={CardImage6} className="card-img-top" alt="BeIN" /></a>
                                </div>
                        </div>

                    </div>

                    </div>
                
                </div>
            </div>  
    </Fragment>




  );
}


export default EntertainmentScreen;
