import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); 
  const [cartItem, setCartItem] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);  

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/check-cookie`, {
          withCredentials: true,
        });
        if (res.data.success) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          return;
        }

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/cart/user/${userId}`);
        console.log("API RESPONSE", response.data.cartItems);

        if (response.status === 200 && response.data.cartItems) {
          setCartItem(response.data.cartItems);
        } else {
          console.warn("Cart not found or invalid data format");
        }

      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, cartItem, setCartItem, isModalOpen, setIsModalOpen }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
