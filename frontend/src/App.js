import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp/SignUp";
import AboutUs from "./components/AboutUs/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AuthProtectRoute from "./AuthProtectRoute";
import ShowingCartItems from "./components/ShowingCartItems/ShowingCartItems";
import { useAuth } from "./context/Context";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  const { isModalOpen } = useAuth()
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/store" element={<PrivateRoute><Card /></PrivateRoute>} />
        <Route path="/login" element={<AuthProtectRoute><Login /></AuthProtectRoute>} />
        <Route path="/signup" element={<AuthProtectRoute><SignUp /></AuthProtectRoute>} />

      </Routes>
      {
        isModalOpen ? <ShowingCartItems /> : null
      }
      <Footer />
    </BrowserRouter>
  );
}

export default App;
