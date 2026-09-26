import { createContext, useContext, useState } from "react";

const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(
    () => localStorage.getItem("muha_admin") === "true"
  );

  const login = (email, password) => {
    // Demo credentials (backend baad mein connect karein)
    if (email === "admin@muha.co" && password === "admin123") {
      localStorage.setItem("muha_admin", "true");
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("muha_admin");
    setIsAdmin(false);
  };

  return (
    <AdminAuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);