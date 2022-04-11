import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext };
