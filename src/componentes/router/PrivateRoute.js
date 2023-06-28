import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export { PrivateRoute };


function PrivateRoute({ children }) {

    const location = useLocation()
    const { state } = location


    if (!state?.logged) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/" state={{ from: location }} />
    }

    // authorized so return child components
    return children;
}
