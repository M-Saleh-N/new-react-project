import React from 'react';
import './formComponent.css'

const FormComponent = () => {
    return (
        <div className="form-container">
            <h1 className="form-title">REGISTER</h1>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" type="text" placeholder="First Name" required maxLength="25" className="form-input" />

            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" type="text" placeholder="Last Name" required maxLength="25" className="form-input" />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="text" placeholder="Email" required className="form-input" />

            <label htmlFor="phoneNumber">Phone Number</label>
            <input id="phoneNumber" name="phoneNumber" type="number" placeholder="Phone Number" required className="form-input" />

            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="Password" required className="form-input" />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password" required className="form-input" />

            <button id="submitButton" className="form-button">SUBMIT</button>
        </div>
    );
};

export default FormComponent;
