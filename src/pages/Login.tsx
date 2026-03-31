import { postLogin } from "../services/auth";

const Login = () => {
  const handleLogin = () => {
    postLogin().then((res) => {
      console.log(res.data.user);
      const user = res.data.user;
      localStorage.setItem("token", user.token);
    });
  };

  return (
    <div>
      Login
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

// localstorage
// useState global
// http cookie only: token
