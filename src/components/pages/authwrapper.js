import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthWrapper = () => {

  const location = useLocation(); // current location

  const userLogged = JSON.parse(localStorage.getItem("userid"));
  
  return userLogged
    ? <Outlet />
    : (
      <Navigate
        to="/login"
        replace
        state={{ from: location }} // <-- pass location in route state
      />
    );
};

export default AuthWrapper;
