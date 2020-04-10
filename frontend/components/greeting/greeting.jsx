import React from 'react';
import { Link } from 'react-router-dom';

import LandingPage from "../landing_page/landing_page";
import UserHomePage from "../user/home";

const Greeting = ({ currentUser, logout, login }) => {
    const sessionLinks = () => (
        // <nav className="login-signup">
        //     <Link to="/login">Login</Link>
        //         &nbsp;or&nbsp;
        //     <Link to="/signup">Sign up!</Link>
        // </nav>
        <LandingPage login={login}/>

    );
    const personalGreeting = () => (
        // <hgroup className="header-group">
        //     <h2 className="header-name">Hi, {currentUser.username}!</h2>
        //     <h5>You can check out anytime but, you can never leave!</h5>
        //     <button className="header-button" onClick={logout}>Log Out</button>
        // </hgroup>
        <UserHomePage currentUser={currentUser} logout={logout}/>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
