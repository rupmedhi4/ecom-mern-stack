import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function NavBtn() {
    const navigate = useNavigate()
    return (
        <div>
            <button type="button" onClick={()=>navigate("/signup")}  className="btn btn-outline-secondary text-white me-4 p-2 fw-semibold">
                Sign Up
            </button>
            <button type="button"  onClick={()=>navigate("/login")}  className="btn btn-outline-secondary text-white fw-semibold p-2">
                Login
            </button>
        </div>

    )
}
