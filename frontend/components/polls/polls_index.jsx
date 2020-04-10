import React from 'react';
import { Link } from 'react-router-dom';

export default ( () => {
    return (
        <div>
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
                    {/* <button className="header-button" onClick={logout}>Log Out</button> */}
                    {/* <Link className='nav-session-link' to="/signup">{currentUser.username}!</Link> */}
                    {/* <Link className='nav-session-link' to="/login">Login</Link> */}
                </nav>
            </header>
            <main className='polls-main-div'>
                {/* <h2 className="header-name">Hi, {currentUser.username}!</h2> */}
                <h1>Not too fast!</h1>
                <h3>We'll <strong>SOON</strong> drop cool polls</h3>
                {/* <p style="font-size:60px">{'&#128540;'}</p> */}
            </main>
        </div>
    );
});
