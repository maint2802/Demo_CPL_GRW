import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routers";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// useEffect
// useCallback
// IIFE:

// React.memo -> HOC -> higher order component
// HOF: higher order function
// router -> react-router-dom

// Home, Login, Users

// params url
// private router

// api vs global state: contextAPI, lib(zustand)
