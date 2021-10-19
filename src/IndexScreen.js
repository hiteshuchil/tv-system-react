import { Fragment } from 'react';

function IndexScreen() {

    const colbugfix = {
      width: "230px",
      marginTop: "50px"
    };

  return (   
    <Fragment>
          <html lang="en">
          <meta charset="UTF-8" />
          <title>Hotel Smart TV System</title>
          <meta name="viewport" content="width=device-width,initial-scale=1" />

          {/* <!-- Lato Font --> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" /> 
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 
          <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />

          {/* <!-- Bootstrap --> */}
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
          <style>

              
          </style>

          <body>

              <div class="container-fluid home-container">
              <div class="row">
                  <div class="col-lg-5">
                      <h1 class="welcome">Mr. Hitesh Uchil<br /> 
                      Welcome to the Hilton Astrolabs Hotel
                      </h1>
                      <div class="welcome_standfirst">We hope you enjoy your stay at our hotel. Feel free to explore our facilities for activities and relaxation.</div>
                  </div>
                  <div class="col-lg-7 d-none d-lg-block d-md-none">
                      <div class="container">
                          <div class="row justify-content-end">
                              <div class="col-6 homepage-box-col" style={colbugfix}>
                                  <a class="homepage-box homepage-box1" href="healthclub.html">Health Club</a>
                              </div>
                              <div class="col-6 homepage-box-col" style={colbugfix}>
                                  <a class="homepage-box homepage-box4" href="specialoffers.html">Spa</a>
                              </div>    
                          </div>
                          <div class="row justify-content-end">
                              <div class="col-6 homepage-box-col" style={colbugfix}>
                                  <a class="homepage-box homepage-box2" href="specialoffers.html">Room Service</a>
                                  
                              </div>
                              <div class="col-6 homepage-box-col" style={colbugfix}>
                                  <a class="homepage-box homepage-box3" href="specialoffers.html">Wifi</a>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
              
              </div>



          </body>
          </html>


    </Fragment>




  );
}


export default IndexScreen;
