// src/components/SpectatorLogin.js
import React, { useState } from 'react';
import './SpectatorLogin.css';

function SpectatorLogin() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        ticketNumber: '',
        seatNumber: '',
        entryGate: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission here
    };

    return (
        <div className="container">
            <h1>Spectator Registration</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                <select name="country" onChange={handleChange} required>
                    <option value="">Select Country</option>
                    {/* Add countries here */}
                </select>
                <input type="text" name="ticketNumber" placeholder="Ticket Number" onChange={handleChange} required />
                <input type="text" name="seatNumber" placeholder="Seat Number" onChange={handleChange} required />
                <input type="text" name="entryGate" placeholder="Entry Gate" onChange={handleChange} required />
                <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Create Password" onChange={handleChange} required />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
                <button type="submit">Register</button>
                <p>Already have an account? <a href="/spectator-login">Login</a></p>
            </form>
        </div>
    );
}

export default SpectatorLogin;

