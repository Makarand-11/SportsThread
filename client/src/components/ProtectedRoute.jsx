import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContent';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  // Check if the user exists and their role is in the allowed roles
  const isAllowed = user && allowedRoles.includes(user.role);

  // If allowed, render child routes; otherwise, navigate to the login page
  return isAllowed ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
