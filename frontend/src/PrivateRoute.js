import { Navigate } from "react-router-dom";
import { useAuth } from "./context/Context";
import Login from "./components/Login/Login";

export default function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Login />;
}
