import React from 'react';
import { GiTriangleTarget } from 'react-icons/gi';
import './Home.css'

export default function Hero() {
    return (
        <div className='custom-bg  text-center py-2'>
            <h1 className="py-5 text-white custom-font custom-bg " style={{ fontSize: '6rem' }}>The Generics</h1>
            <span className='fs-5 text-white fw-bold custom-border  py-3 px-4'  >Get our Latest Album</span>
            <div className='custom-border-music-player rounded-circle d-flex justify-content-center align-items-center mx-auto my-5' style={{ width: "80px", height: "80px" }}>
                <GiTriangleTarget className="fw-bold text-white fs-2 " />
            </div>

        </div>
    )
}
