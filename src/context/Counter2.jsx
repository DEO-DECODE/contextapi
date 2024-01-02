import { useState, useEffect, useContext, createContext } from "react";
/*
Here, the code imports necessary functions and libraries from React and Axios. useState, useEffect, and useContext are React hooks, and createContext is a function for creating a context in React.
*/
const AuthContext = createContext();
/*
The createContext function is used to create a context named AuthContext. This context will be used to share the authentication state across the components of the application.
*/
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
  /*
  The AuthProvider component is a higher-order component (HOC) that wraps its children with the AuthContext.Provider. It uses the useState hook to maintain the authentication state (user and token). The state and a function to update the state (setAuth) are passed as a value to the context provider.
  */
};
const useAuth = () => useContext(AuthContext);
/*
The useAuth hook is a custom hook that utilizes the useContext hook to access the current value of the AuthContext. This hook will be used in other components to access the authentication state.
*/
export { useAuth, AuthProvider };
