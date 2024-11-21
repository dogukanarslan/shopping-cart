import { Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';

export const PrivateRoutes = (props) => {
  const { children, isAuthenticated } = props;

  if (!isAuthenticated) {
    return <Redirect to={{ pathname: '/signin' }} />;
  }

  return (
    <>
      <Sidebar />
      <div className="ml-56 p-4">{children}</div>
    </>
  );
};
