import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); 
  const [cartItem, setCartItem] = useState(null);  
  const [isModalOpen, setIsModalOpen] = useState(false);  

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/check-cookie`, {
          withCredentials: true,
        });
        if(res.data.success){
            setIsAuthenticated(true)
        }
        } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
    return ()=>checkAuth
  }, [isAuthenticated,setIsAuthenticated]);

  useEffect(() => {
    const fetchCartData = () => {
      try {
        const data = localStorage.getItem("cartItem");
        const parsedData = data ? JSON.parse(data) : [];
        setCartItem(parsedData);
        console.log(parsedData);
      } catch (error) {
        console.log("Error reading cart from localStorage:", error);
      }
    };
  
    fetchCartData();
  }, []);  // safe to add setCartItem in dependency
  
  return (
    <AuthContext.Provider value={{ isAuthenticated,setIsAuthenticated,cartItem, setCartItem,isModalOpen, setIsModalOpen }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
