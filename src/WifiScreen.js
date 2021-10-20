import { Fragment } from 'react';
import WifiImage from './assets/images/wifi.png';


function WifiScreen() {

    const colbugfix = {
      width: "230px",
      marginTop: "50px"
    };

  return (   
    <Fragment>

<div className="container-fluid home-container">
    <div className="row">
        <div className="col-lg-5">
            <h1 className="welcome">Free Wifi
            </h1>
            <div className="welcome_standfirst">Blazing fast internet connection, throttled to give you a true slow hotel wifi experience.</div>
        </div>
        <div className="col-lg-7 p-5">
                <img src={WifiImage} className="img-fluid border" />

        </div>

    </div>
    
    </div>
              
    </Fragment>




  );
}


export default WifiScreen;
