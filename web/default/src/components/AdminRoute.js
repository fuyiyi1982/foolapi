import { Navigate } from 'react-router-dom';
import { isAdmin } from '../helpers';

function AdminRoute({ children }) {
  if (!localStorage.getItem('user')) {
    return <Navigate to='/login' />;
  }
  if (!isAdmin()) {
    return <Navigate to='/dashboard' replace />;
  }
  return children;
}

export { AdminRoute };
