import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
