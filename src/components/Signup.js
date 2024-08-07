import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        // Here you would normally send data to a server
        localStorage.setItem('isAuthenticated', 'true');
        history('/dashboard');
    };

    return (
        <div className="auth-form">
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <br />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
