import { Navigate } from "react-router-dom";
import { useAuth } from "./context/Context";
import Card from '../src/components/Card/Card'

export default function AuthProtectRoute({ children }) {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? <Card/> : children;
}
