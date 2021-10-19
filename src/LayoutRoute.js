import React from 'react';
import { Route } from 'react-router-dom'; 
import NavBar from './NavBar';

function LayoutRoute(props) {
    return (
        <React.Fragment>
            <Route path={props.path} exact={props.exact} component={props.component} />
            <NavBar 
                link1={{label: "Astrolabs Hotel", path: "/"}} 
                link2={{label: "Hotel Offers", path: "/hotel-offers"}} 
                link3={{label: "Entertainment", path: "/entertainment"}}
                link4={{label: "Room Service", path: "/room-service"}}
                link5={{label: "Facilities", path: "/facilities"}}
                link6={{label: "Spa", path: "/spa"}}
            ></NavBar>
        </React.Fragment>
    )
}

export default LayoutRoute;