// src/components/OrganizerLogin.js
import React, { useState } from 'react';
import './OrganizerLogin.css';

function OrganizerLogin() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: '',
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
            <h1>Organizer Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <select name="role" onChange={handleChange} required>
                    <option value="">Select Role</option>
                    <option value="security">Security Officer</option>
                    <option value="manager">Entrance Manager</option>
                    <option value="admin">Administrator</option>
                    <option value="agent">Field Agent</option>
                    <option value="analyst">Analyst/Observer</option>
                </select>
                <button type="submit">Login</button>
                <p>Forgot your password? <a href="/forgot-password">Reset</a></p>
            </form>
        </div>
    );
}

export default OrganizerLogin;
