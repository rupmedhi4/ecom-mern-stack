import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/Context';

export default function Login3() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { setIsAuthenticated } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/login`,
                { email, password },
                { withCredentials: true }
            );
            localStorage.setItem("userId",res.data.user._id)
            alert("Login successful");
            setIsAuthenticated(true);
            navigate("/store");
        } catch (error) {
            alert("Login failed, please try again");
        }
    };

    return (
        <div
            className="shadow mx-auto rounded-2 my-5 py-5"
            style={{ maxWidth: '30%', backgroundColor: '#f2f2f2' }}
        >
            <div className="mx-3">
                <span className='text-center mb-3 custom-form-color fs-3 fw-bold d-flex justify-content-center'>Login</span>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="mt-3 custom-form-color fw-semibold">
                            Email
                        </label>
                        <input
                            className="form-control form-control-md"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="mt-3 custom-form-color fw-semibold">
                            Password
                        </label>
                        <input
                            className="form-control form-control-md"
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-info w-100 mt-4">
                        Login
                    </button>
                </form>

                <span
                    className="btn btn-outline-warning mt-4 d-inline-block w-100 text-dark"
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate("/signup")}
                >
                    Do not have an account? Signup
                </span>
            </div>
        </div>
    );
}
