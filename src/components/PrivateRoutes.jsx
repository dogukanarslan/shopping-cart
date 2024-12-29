import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export const PrivateRoutes = (props) => {
  const { isAuthenticated } = props;

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/signin' }} />;
  }

  return (
    <>
      <Sidebar />
      <div className="ml-56 p-4">
        <Outlet />
      </div>
    </>
  );
};
