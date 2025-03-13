import './LogInComponent.css'

const LoginComponent = () => {
    return (
        <div className="login-container">
            <h1 className="login-title">LOGIN</h1>
            <label htmlFor="email">Email</label>
            <input id="email" name="email"type="text"placeholder="Email" required className="login-input"  />
            <label htmlFor="password">Password</label>
            <input id="password" name="password"type="password"placeholder="Password" required className="login-input"  />
            <button id="submitButton" className="login-button">LOGIN</button>
        </div>
    );
};

export default LoginComponent;