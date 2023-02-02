import { useAuth } from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = 'home',
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
