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
                        <a className='header-nav-link' href='https://www.polleverywhere.com/' target="_blank">Real site</a>
                        <a className='header-nav-link' href='https://github.com/Solomon-T/live_polls' target="_blank">Github repo</a>
                        <a className='header-nav-link' href="https://www.linkedin.com/in/solomon-timothy-manyaga-305a51b4/" target="_blank">LinkedIn</a>
                        <a className='header-nav-link' href="https://solomon-t.github.io/" target="_blank">Developer</a>
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
                        <Link to='/text/vote'>
                            <button className='home-main-body-nav-button'> 
                                Vote 
                            </button>
                        </Link>
                        {/* <hr/> */}
                          
                            <a href="https://solomon-t.github.io/" target="_blank">
                                <button className='home-main-body-extra-button'> About the developer</button>
                            </a>
                        <a href="https://www.linkedin.com/in/solomon-timothy-manyaga-305a51b4/" target="_blank"> 
                            <button className='home-main-body-extra-button'>
                                LinkedIn 
                            </button>
                        </a>
                        <a href="https://github.com/Solomon-T/live_polls" target="_blank"> 
                            <button className='home-main-body-extra-button'> 
                                Project repo 
                            </button>
                        </a>
                        
                        <div id='home-main-nav-footer'>
                            <h3><strong>Instructions</strong></h3>
                            <p><strong>-</strong> Click the create button to create a new poll on submission
                                 your latest poll withh be on top of the list</p>
                            <p><strong>-</strong> To view the poll just click on it</p>
                            <p><strong>-</strong> To vote click the link on the poll show and choose an answer</p>
                            <p><strong>-</strong> To vote by id just visit the link and put in the id next to the option</p>
                        </div>
                    </nav>

                    <section className='home-main-content'>
                        <UserPollsContainer/>
                    </section>

                </div>
                
                
                {/* <div className='home-the-rest-div'>
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
                </div> */}
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