import React, { useState } from 'react'
import axios from 'axios';
import './SignUp.css'
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/Context';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate()

    const { setIsAuthenticated } = useAuth()

    const api = process.env.REACT_APP_API_URL

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${api}/signup`, {
                fullName: name,
                email,
                password
            },
                {
                    withCredentials: true
                }
            );
            alert("signup success")
            setIsAuthenticated(true)
            navigate("/store")


        } catch (error) {
            console.error("Signup Error:", error);
        }
    }

    return (
        <div className='shadow mx-auto rounded-2 my-5 py-4' style={{ maxWidth: "35%", backgroundColor: "#f2f2f2" }}>
            <div className='mx-3'>
                <span className='fw-bold d-flex justify-content-center text-center mb-3 custom-form-color fs-3'>Sign Up</span>
                <form onSubmit={submitHandler} className="needs-validation" noValidate >

                    <div >
                        <label htmlFor="name" className="mt-3 custom-form-color fw-semibold">Name</label>
                        <input
                            className='form-control form-control-md'
                            id="name"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="mt-3 custom-form-color fw-semibold">Email</label>
                        <input
                            className='form-control form-control-md'
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="mt-3 custom-form-color fw-semibold">Password</label>
                        <input
                            className='form-control form-control-md'
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="mt-3 custom-form-color fw-semibold">Confirm Password</label>
                        <input
                            className='form-control form-control-md'
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" class="btn btn-info w-100 mt-4">Submit</button>

                </form>


                <span
                    className="btn btn-outline-warning mt-4 d-inline-block w-100 text-dark "
                    style={{ cursor: "pointer" }}
                >
                    Have an account? Login
                </span>
            </div>


        </div>
    )
}
