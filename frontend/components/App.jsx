import React from "react";

import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

import GreetingContainer from "./greetings/greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import SearchContainer from "./benches/search_container";


const App = () => (
    <div className="bkg-container">
        <header>
            <h1>Bench BnB</h1>
            <GreetingContainer />
        </header>
        <div className="body-container">
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>
            <Route exact path ="/" component={SearchContainer} />
        </div>
    </div>
);

export default App;