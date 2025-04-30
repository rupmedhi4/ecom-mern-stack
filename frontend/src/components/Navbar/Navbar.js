import React, { useContext } from 'react';
import './Navbar.css';
import NavBtn from './NavBtn';
import { useAuth } from '../../context/Context';
import LogOutBtn from './LogOutBtn';

export default function Navbar() {
  const {isAuthenticated}=useAuth()
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black  px-1 ">

      <div className="collapse navbar-collapse d-flex justify-content-between ">
        <div className='mx-auto'>
          <ul className="navbar-nav mx-auto custom-gap fw-bold "   >
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/store">Store</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/aboutUs">About Us</a>
            </li>
          </ul>
        </div>
{
  isAuthenticated ?<LogOutBtn/>:<NavBtn /> 
}
        
      </div>

    </nav>
  );
}
