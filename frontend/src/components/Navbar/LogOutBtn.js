import React from 'react';
import axios from 'axios';
import { useAuth } from '../../context/Context';
import { useNavigate } from 'react-router-dom';

export default function LogOutBtn() {
  const { setIsAuthenticated, cartItem, setIsModalOpen, isModalOpen } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/logout`, {
        withCredentials: true,
      });

      if (res.data.success) {
        setIsAuthenticated(false);
        alert("Logout successful");
        localStorage.removeItem("userId"); 
        navigate('/login'); 
      }
    } catch (error) {
      alert("Something went wrong during logout");
    }
  };

  const cartHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button
        type="button"
        onClick={cartHandler}
        className="btn btn-outline-secondary text-white me-4 p-2 fw-semibold"
      >
        Cart {cartItem?.length || 0}
      </button>

      <button
        type="button"
        onClick={logoutHandler}
        className="btn btn-outline-secondary text-white me-4 p-2 fw-semibold"
      >
        Log Out
      </button>
    </div>
  );
}
