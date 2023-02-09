import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        
      localStorage.getItem('jwt1')=="versatile geeks"?<Outlet />
               
                : <Navigate to="/signin" state={{ from: location }} replace />
    );
}

export default RequireAuth;