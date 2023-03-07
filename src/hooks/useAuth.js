import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useLocalStorage("authToken", null);
  const [email, setEmail] = useLocalStorage("email", null);
  const navigate = useNavigate();

  const login = async (data) => {
    console.log("login", data);
    setAuthToken(data["authentication_token"]);
    setEmail(data["email"]);
    navigate("/splash");
  };

  const logout = () => {
    console.log("logout");
    setAuthToken(null);
    setEmail(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      authToken,
      email,
      login,
      logout,
    }),
    [authToken]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
