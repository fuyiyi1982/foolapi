import { Navigate } from 'react-router-dom';
import { isAdmin } from 'utils/common';

const AdminRoute = ({ children }) => {
  if (!localStorage.getItem('user')) {
    return <Navigate to='/login' />;
  }
  if (!isAdmin()) {
    return <Navigate to='/panel/dashboard' replace />;
  }
  return children;
};

export default AdminRoute;
