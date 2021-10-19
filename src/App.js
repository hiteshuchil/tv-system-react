import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutRoute from "./LayoutRoute.js";
import IndexScreen from './IndexScreen.js';
import HotelOffersScreen from "./HotelOffersScreen.js";
import FacilitiesScreen from "./FacilitiesScreen.js";
import EntertainmentScreen from "./EntertainmentScreen.js";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact={true} component={IndexScreen} />
                <LayoutRoute path="/hotel-offers" exact={true} component={HotelOffersScreen} />
                <LayoutRoute path="/facilities" exact={true} component={FacilitiesScreen} />
                <LayoutRoute path="/entertainment" exact={true} component={EntertainmentScreen} />
            </Switch>
        </BrowserRouter>
    )
};

export default App;