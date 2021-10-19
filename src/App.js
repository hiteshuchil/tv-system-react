import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutRoute from "./LayoutRoute.js";
import IndexScreen from './IndexScreen.js';
import HotelOffersScreen from "./HotelOffersScreen.js";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact={true} component={IndexScreen} />
                <LayoutRoute path="/hotel-offers" exact={true} component={HotelOffersScreen} />
            </Switch>
        </BrowserRouter>
    )
};

export default App;