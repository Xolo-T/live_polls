import React from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => (
    <div>

        <header className='header'>
            <div className='header-logo-nav'>
                <Link className='logo' to='/'>
                    <h1 >Live Polls</h1>
                </Link>
                <div className='header-nav'>
                    <a className='header-nav-link'>How it works</a>
                    <a className='header-nav-link'>Real site</a>
                    <a className='header-nav-link'>Stack</a>
                    <a className='header-nav-link'>Github repo</a>
                    <a className='header-nav-link'>Developer</a>
                </div>
            </div>
            <nav className="login-signup-nav">
                <button className="demo-login">Demo User</button>
                <Link className='nav-session-link' to="/signup">Sign up</Link>
                <Link className='nav-session-link' to="/login">Login</Link>
            </nav>
        </header>
        
        <main>

        </main>
    </div>

    
);


export default LandingPage;
