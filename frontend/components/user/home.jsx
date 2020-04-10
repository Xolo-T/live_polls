import React from 'react';
import { Link } from 'react-router-dom';

const UserHomePage = ({ currentUser, logout }) => {
    return (
        <div className="login-form-container">
            <header className='header'>
                <div className='header-logo-nav'>
                    <Link className='logo' to='/'>
                        <h1 className='logo'>Live Polls</h1>
                    </Link>
                    <div className='header-nav'>
                        <Link to='/polls' className='header-nav-link'>Polls</Link>
                        <Link to='/polls' className='header-nav-link'>Participants</Link>
                        <Link to='/polls' className='header-nav-link'>Reports</Link>
                        <Link to='/polls' className='header-nav-link'>More</Link>
                    </div>
                </div>
                <nav className="login-signup-nav">
                    <button className="header-button" onClick={logout}>Log Out</button>
                    <Link className='nav-session-link' to="/signup">{currentUser.username}!</Link>
                    {/* <Link className='nav-session-link' to="/login">Login</Link> */}
                </nav>
            </header>
            <main className='home-main-div'>
                    <h1 className="header-name">Hi, {currentUser.username}!</h1>
                    <h3>You can check out anytime but, you can never leave!</h3>
                {/* <section className='session-form-div'>
                    
                </section> */}
            </main>
        </div>
    );
}

export default UserHomePage;