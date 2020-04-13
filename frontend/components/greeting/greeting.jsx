import React from 'react';
import { Link } from 'react-router-dom';

import LandingPage from "../landing_page/landing_page";
import UserHomePage from "../user/home";

const Greeting = ({ currentUser, logout, login }) => {
    const sessionLinks = () => (

        <LandingPage login={login}/>

    );
    const personalGreeting = () => (

        <UserHomePage currentUser={currentUser} logout={logout}/>
        
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
