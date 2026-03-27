import { Link } from "react-router-dom";
const Header = () => {
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
