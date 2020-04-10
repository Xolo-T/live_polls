import React from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => (
    <div className='landing-page-full'>

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
            <div className='intro-div'>
                <div className='intro-div-text-content-div'>
                    <h1>Your remote audience engagement tool</h1>
                    <p>Live polling for virtual meetings, events,
                        classes, and conferences
                    </p>
                    <Link className='into-signup' to="/signup">Get Started
                    </Link>
                </div>
                <img className='computer-img' src={window.computerUrl} alt="try"/>
            </div>
            <div className='blue-band'>
                <p>
                    We are offering a complimentary 90-day premium plan for
                    educators affected by COVID-19.
                </p>
                <Link className='blue-band-signup' to="/signup">
                    Sign up for free
                </Link>
            </div>
            <div className='seond-intro-div'>
                <div className='second-intro-div-content'>
                    <img className='remote-img' src={window.remoterUrl} alt="interactive remote" />
                    <h4>Interactive remote meetings</h4>
                    <p>Collect and visualize audience feedback in real time with
                         a variety of activity types including multiple choice, 
                         word clouds, and Q/As.</p>
                </div>
                <div className='second-intro-div-content'>
                    <img className='remote-img' src={window.presentationUrl} alt="interactive remote" />
                    <h4>Engaging distance learning</h4>
                    <p>Use Poll Everywhere activities to take attendance, 
                        give quizzes, and gauge understanding whether your
                        students are near or far.</p>
                </div>
                <div className='second-intro-div-content'>
                    <img className='remote-img' src={window.distanceUrl} alt="interactive remote"/>
                    <h4>Apps that work where you do</h4>
                    <p>Download the Poll Everywhere app for PowerPoint, Keynote,
                         or Google Slides and add polls to your existing 
                         presentation decks in just a few clicks.</p>
                </div>
            </div>
            <div className='media-div'> 
                {/* <iframe width="628" height="426" src="https://www.youtube.com/embed/ARe9FupzuOA" frameBorder="0" allowFullScreen></iframe> */}
                {/* <iframe width="628" height="426" src={`https://www.youtube.com/embed/dT3aZ5Ph8e8&t=4s`} frameBorder="10" allowFullScreen></iframe> */}
                <iframe width="628" height="426" src={`https://www.youtube.com/embed/dT3aZ5Ph8e8`} frameBorder="10" allowFullScreen></iframe>  
            </div>
            <div className='who-needs-this'>
                <p>Wwho needs this</p>
            </div>
            <div className='sign-up-div'>
                <p>Sign up for your free account.</p>
            </div>
            <div className='intergration-div'>
                <h1>Poll Everywhere slideware integrations</h1>
                <p>Poll Everywhere works in PowerPoint, Keynote, and Google Slides</p>
            </div>
            <div className='intergration-div'>
                <p>Poll Everywhere works in PowerPoint, Keynote, and Google Slides</p>
            </div>
            <div className='intergration-images-div'>
                <p>Images will drop here</p>
            </div>
        </main>
        <footer>
            <div className='sign-up-div'>
                <p>Poll Everywhere works in PowerPoint, Keynote, and Google Slides</p>
            </div>
            <div className='sign-up-div'>
                <p>Poll Everywhere works in PowerPoint, Keynote, and Google Slides</p>
            </div>
        </footer>
    </div>

    
);


export default LandingPage;
