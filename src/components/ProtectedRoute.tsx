import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';
type ProtectedProps = {
  children: React.ReactNode; // 👈️ type children
};

const ProtectedRoute = ({ children }: ProtectedProps) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? children : <Navigate to='/login' replace />;
};

export default ProtectedRoute;
