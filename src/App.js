import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutRoute from "./LayoutRoute.js";
import IndexScreen from './IndexScreen.js';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact={true} component={IndexScreen} />
            </Switch>
        </BrowserRouter>
    )
};

export default App;