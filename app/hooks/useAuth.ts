import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
};

export default useAuth;
