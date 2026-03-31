import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { useContext } from "react";
import type { AuthContextType } from "../types/types";
const Header = () => {
  const { authUser, setAuthUser } = useContext<AuthContextType>(AuthContext);

  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default Header;

// element -> HTML, component -> React
// a -> re-load

// context

// global state: localstorage, contextAPI, lib(zustand, redux)
