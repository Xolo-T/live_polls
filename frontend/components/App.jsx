import React from "react";
import { Route } from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import Polls  from './polls/polls_index';

import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div>
        <header>
            <h1 className='header'>Welcome to LivePolls</h1>
            <GreetingContainer />
        </header>
        {/* <Route path="/login" component={LoginFormContainer} /> */}
        {/* <Route path="/signup" component={SignupFormContainer} /> */}
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/polls" component={Polls} />
        {/* <Route path="/polls" component={Polls} /> */}
    </div>
);

export default App;

{/* <p>I am from App.jsx</p> */}