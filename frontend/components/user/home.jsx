import React from 'react';
import { Link } from 'react-router-dom';

import UserPollsContainer from './user_polls_container'


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
                        <a className='header-nav-link' href='https://www.polleverywhere.com/' >Real site</a>
                        <a className='header-nav-link' href='https://github.com/Solomon-T/live_polls/wiki' >Github repo</a>
                        <a className='header-nav-link' >Stack</a>
                        <a className='header-nav-link'>Developer</a>
                    </div>
                </div>
                <nav className="logout-nav">
                    <button className="header-button" onClick={logout}>Log Out</button>
                    <Link className='nav-session-link' to="/signup">{currentUser.username}</Link>
                </nav>
            </header>

            <main>
                <div className='home-main-div'>
                    {/* <h1 className="header-name">Hi, {currentUser.username}!</h1> */}

                    <nav className='home-main-body-nav'>
                        <Link to='/create/poll' className=''>
                            <button 
                                className='home-main-body-nav-button' 
                                id='create-poll'
                                >
                                Create
                            </button>
                        </Link>
                        <button className='home-main-body-nav-button'> Edit </button>
                        <hr/>
                        <button className='home-main-body-extra-button'> Groups </button>
                        <button className='home-main-body-extra-button'>Trash</button>
                        <button className='home-main-body-extra-button'> 
                            <Link to='/text/vote'> Vote </Link> 
                        </button>
                        
                        <div id='home-main-nav-footer'>
                            <p><strong>Download the app</strong></p>
                            <p> Use the app to embed polls in your slides. </p>
                            <p> Select your presentation software to start the download </p>
                            <ul>
                                <li>PowerPoint</li>
                                <li>Keynote</li>
                                <li>Google Slides</li>
                            </ul>
                        </div>
                    </nav>

                    <section className='home-main-content'>
                        <UserPollsContainer/>
                    </section>

                </div>
                
                
                <div className='home-the-rest-div'>
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