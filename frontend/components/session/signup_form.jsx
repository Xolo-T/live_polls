import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
            .then(() => this.props.history.push('/polls'));
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <header className='header'>
                    <div className='header-logo-nav'>
                        <Link className='logo' to='/'>
                            <h1 className='header-logo'>Live Polls</h1>
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
                <main className='session-form-main'>
                    <section className='session-form-div'>
                            <h1>Welcome to LivePolls!</h1>
                            <br />
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            {/* Please {this.props.formType} or {this.props.navLink} */}
                            {this.renderErrors()}
                            <div className="login-form">
                                <br />
                                <label>Username:
                                    <input type="text"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                        className="login-input"
                                    />
                                </label>
                                <br/>
                                <label>Email:
                                    <input type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        className="login-input"
                                    />
                                </label>
                                <br />
                                <label>Password:
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="login-input"
                                    />
                                </label>
                                <br />
                                <input className="session-submit"
                                    type="submit"
                                    value={this.props.formType}
                                />
                            </div>
                        </form>
                    </section>
                    <section className='session-side-div'>
                        <img className='sign-up-div-img' src={window.signUpUrl} />
                    </section>
                </main>
            </div>
        );
    }
}

export default SignupForm;