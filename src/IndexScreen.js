import { Fragment } from 'react';

function IndexScreen() {

    const colbugfix = {
      width: "230px",
      marginTop: "50px"
    };

  return (   
    <Fragment>
              <div className="container-fluid home-container">
              <div className="row">
                  <div className="col-lg-5">
                      <h1 className="welcome">Mr. Hitesh Uchil<br /> 
                      Welcome to the Hilton Astrolabs Hotel
                      </h1>
                      <div className="welcome_standfirst">We hope you enjoy your stay at our hotel. Feel free to explore our facilities for activities and relaxation.</div>
                  </div>
                  <div className="col-lg-7 d-none d-lg-block d-md-none">
                      <div className="container">
                          <div className="row justify-content-end">
                              <div className="col-6 homepage-box-col" style={colbugfix}>
                                  <a className="homepage-box homepage-box1" href="healthclub.html">Health Club</a>
                              </div>
                              <div className="col-6 homepage-box-col" style={colbugfix}>
                                  <a className="homepage-box homepage-box4" href="specialoffers.html">Spa</a>
                              </div>    
                          </div>
                          <div className="row justify-content-end">
                              <div className="col-6 homepage-box-col" style={colbugfix}>
                                  <a className="homepage-box homepage-box2" href="specialoffers.html">Room Service</a>
                                  
                              </div>
                              <div className="col-6 homepage-box-col" style={colbugfix}>
                                  <a className="homepage-box homepage-box3" href="specialoffers.html">Wifi</a>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
              
              </div>
    </Fragment>




  );
}


export default IndexScreen;
