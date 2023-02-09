import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth1 = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        
      localStorage.getItem('jwt1')=="versatiles geeks"?<Outlet />
               
                : <Navigate to="/signin" state={{ from: location }} replace />
    );
}

export default RequireAuth1;