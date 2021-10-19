import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CardImage1 from './assets/images/spa1.png';
import CardImage2 from './assets/images/spa2.png';
import CardImage3 from './assets/images/spa3.png';
import CardImage4 from './assets/images/spa4.png';
import CarouselImage2 from "./assets/images/facilities-library.png";
import CarouselImage3 from "./assets/images/facilities-pool.jpg";
import reactDom from 'react-dom';

function SpaScreen() {

    const colbugfix = {
      width: "230px",
      marginTop: "50px"
    };

  return (   
    <Fragment>

            <div className="container-fluid home-container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="welcome mt-3">Welcome to the Spa
                        </h1>
                    </div>
                    <div className="col-12">
                        <div className="row ms-5 mt-5">
                                <div className="col-2">

                                <div className="card" style={{height: "350px"}}>
                                        <img className="card-img-top" src={CardImage1} alt="Card image cap" />
                                        <div className="card-body">
                                        <h5 className="card-title">1 Hour Facial Massage</h5>
                                        <p className="card-text">Enjoy a relaxing clay facial at our spa.<br />
                                        Price: AED300<br />
                                        Time: 1 hour</p>
                                        <div className="d-grid">
                                        <a href="#" className="btn btn-primary bg-purple">Book Now</a>
                                        </div>
                                        </div>
                                </div>


                                </div>
                                <div className="col-2">
                                <div className="card" style={{height: "350px"}}>
                                        <img className="card-img-top" src={CardImage2} alt="Card image cap" />
                                        <div className="card-body">
                                        <h5 className="card-title">1 Hour Nose Massage</h5>
                                        <p className="card-text">Enjoy a nose massage at our spa.<br />
                                        Price: AED200<br />
                                        Time: 1 hour</p>
                                        <div className="d-grid">
                                        <a href="#" className="btn btn-primary bg-purple">Book Now</a>
                                        </div>
                                        </div>
                                </div>
                                        
                                </div>
                                <div className="col-2">
                                <div className="card" style={{height: "350px"}}>
                                        <img className="card-img-top" src={CardImage3} alt="Card image cap" />
                                        <div className="card-body">
                                        <h5 className="card-title">30 min Hot Stone Massage</h5>
                                        <p className="card-text">Enjoy burning hot stones on your skin.<br />
                                        Price: AED500<br />
                                        Time: 30 mins</p>
                                        <div className="d-grid">
                                        <a href="#" className="btn btn-primary bg-purple">Book Now</a>
                                        </div>
                                        </div>
                                </div>
                                </div>
                                <div className="col-2">
                                <div className="card" style={{height: "350px"}}>
                                        <img className="card-img-top" src={CardImage4} alt="Card image cap" />
                                        <div className="card-body">
                                        <h5 className="card-title">Accupuncture Massage</h5>
                                        <p className="card-text">No pain, no gain. Be a man!<br />
                                        Price: AED250<br />
                                        Time: 30 mins</p>
                                        <div className="d-grid">
                                        <a href="#" className="btn btn-primary bg-purple">Book Now</a>
                                        </div>
                                        </div>
                                </div>
                                </div>

                                <div className="col-4">
                                <div className="card" style={{height: "350px"}}>
                                        <div className="card-header">
                                        <h5 className="card-title">Your Shopping Cart</h5>
                                        </div>
                                        <div className="card-body">
                                        <p className="card-text" id="cartBody">
                                        </p>
                                        <b>Total: AED </b> 
                                        </div>
                                        <div className="card-footer">
                                         
                                        <div className="d-grid">
                                        <a href="#" className="btn btn-primary bg-purple">Confirm and Order Now</a>
                                        </div>
                                        </div>
                                </div>
                                </div>



                    </div>



                    </div>
                
                </div>
            </div>  
    </Fragment>




  );
}


export default SpaScreen;
