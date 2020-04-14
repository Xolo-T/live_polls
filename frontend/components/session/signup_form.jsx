import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            usernameError: '',
            emailError: '',
            passwordError: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    demoLogin(e) {
        e.preventDefault();
        const guestUser = {
            username: 'Guest',
            password: 'password'
        }
        this.props.login(guestUser);
    }

    validate() {
        let usernameError = ''
        let passwordError = ''
        let emailError = ''

        if (this.state.username.length == 0) {
            usernameError = "Username can't be empty"
        }

        if (this.state.email.length == 0) {
            emailError = "Email can't be empty"
        }

        if (this.state.password.length == 0) {
            passwordError = "Password can't be empty"
        }
        if (usernameError) {
            this.setState({ usernameError })
            this.setState({ emailError })
            this.setState({ passwordError })
            return false
        }

        if (emailError) {
            this.setState({ usernameError })
            this.setState({ emailError })
            this.setState({ passwordError })
            return false
        }

        if (passwordError) {
            this.setState({ passwordError })
            this.setState({ usernameError })
            this.setState({ emailError })
            return false
        }
        return true;
    };

    handleSubmit(e) {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid){
            this.props.processForm(this.state)
                .then(() => this.props.history.push('/'));
        }
    }

    renderErrors() {
        return (
            <ul className='session-input-errors'>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} >
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
                            <a className='header-nav-link'>Developer</a>
                        </div>
                    </div>
                    <nav className="login-signup-nav">
                        <button className="demo-login" onClick={this.demoLogin}>Demo User</button>
                        <Link className='nav-session-link' to="/signup">Sign up</Link>
                        <Link className='nav-session-link' to="/login">Login</Link>
                    </nav>
                </header>
                <main className='session-form-main'>
                    <section className='session-form-div'>
                            <h1>You wont regret this!</h1>
                            <br />
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            {/* Please {this.props.formType} or {this.props.navLink} */}
                            {this.renderErrors()}
                            <div className="login-form">
                                <br />
                                <label>
                                    <input type="text"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                        className="login-input "
                                        placeholder="Username"
                                    />
                                    <div>{this.state.usernameError}</div>
                                </label>
                                <br/>
                                <label>
                                    <input type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        className="login-input"
                                        placeholder="Email"
                                    />
                                    <div>{this.state.emailError}</div>
                                </label>
                                <br />
                                <label>
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="login-input"
                                        placeholder="Password"
                                    />
                                    <div>{this.state.passwordError}</div>
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