import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routers";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  );
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
