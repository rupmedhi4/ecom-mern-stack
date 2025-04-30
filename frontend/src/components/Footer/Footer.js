import React from 'react';
import './Footer.css';
import { SiYoutube } from 'react-icons/si';
import { BsSpotify } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

export default function Footer() {
    return (
        <div className="custom-color py-4">
            <div className="container d-flex justify-content-between align-items-center">
                <span className="text-white fw-bold" style={{ fontSize: "3rem" }}>
                    The Generics
                </span>

                <ul className="d-flex list-unstyled  align-items-center gap-5">
                    <li className="text-dark fs-2 cursor-pointer ">
                        <SiYoutube />
                    </li>
                    <li className="text-dark fs-2 cursor-pointer ">
                        <BsSpotify />
                    </li>
                    <li className="text-dark fs-2 cursor-pointer ">
                        <BsFacebook />
                    </li>
                </ul>
            </div>
        </div>
    );
}
