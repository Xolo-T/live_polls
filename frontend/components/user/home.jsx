import React from 'react';
import { Link } from 'react-router-dom';

const UserHomePage = ({ currentUser, logout }) => {
    return (
        <div className='landing-page-full'>

            <header className='header'>
                <div className='header-logo-nav'>
                    <div className='header-logo-div'>
                        <div className='logo'>
                            <Link to='/'>
                                <h1 >Live Polls</h1>
                            </Link>
                        </div>
                    </div>
                    <div className='header-nav'>
                        <Link to='/polls' className='header-nav-link'>Polls</Link>
                        <Link to='/polls' className='header-nav-link'>Participants</Link>
                        <Link to='/polls' className='header-nav-link'>Reports</Link>
                        <Link to='/polls' className='header-nav-link'>More</Link>
                    </div>
                </div>
                <nav className="logout-nav">
                    <button className="header-button" onClick={logout}>Log Out</button>
                    <Link className='nav-session-link' to="/signup">{currentUser.username}!</Link>
                </nav>
            </header>

            <main>
                <div className='home-main-div'>
                    {/* <h1 className="header-name">Hi, {currentUser.username}!</h1> */}

                    <nav className='home-main-body-nav'>

                    </nav>

                    <section className='home-main-content'>

                    </section>

                </div>
                
                
                <div className='the-rest-div'>
                    <div className='last-logo'>
                        <h1> Live Polls </h1>
                    </div>
                    <div className='last-section'>
                        <div className='last-section-divs'>
                            <h4>Presentation apps</h4>
                            <p>PowerPoint</p>
                            <p>Keynote</p>
                            <p>Google Slides</p>
                        </div>
                        <div className='last-section-divs'>
                            <h4>Mobile apps</h4>
                            <p>iOS</p>
                            <p>Android</p>
                        </div>
                        <div className='last-section-divs'>
                            <h4>Supprot</h4>
                            <p>Plans {"&"} pricing</p>
                            <p>Premium features</p>
                            <p>How it works</p>
                            <p>Support</p>
                            <p>Case studies</p>
                            <p>Guides</p>
                            <p>Video guide</p>
                            <p>Webinars</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className='footer'>
                <div>

                </div>
                <div>

                </div>
            </footer>
        </div>
    )
}

export default UserHomePage;