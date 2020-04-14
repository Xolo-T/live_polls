import React from "react";
import { Route, Switch,} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import Polls  from './polls/polls_index';
import CreatePoll from './polls/create_poll_container';
import PollShowContainer from './user/polls_show_container';

import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div className='rendered-body'>
        <Route exact path="/" component={GreetingContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/my/polls" component={Polls} />
        <ProtectedRoute path="/create/poll" component={CreatePoll} />
        <Route path="/polls/:pollId" component={PollShowContainer} />
    </div>
);

export default App;