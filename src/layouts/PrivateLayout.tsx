import { Navigate, Outlet } from "react-router-dom";

const PrivateLayout = () => {
  let isLogin = true;

  return <div>{isLogin ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateLayout;

// useNavigate -> hook vs Navigate -> component

// cms -> admin ->
