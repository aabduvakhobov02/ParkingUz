import { useContext } from "react";
import { StatusContext } from "../contexts/statusContext";

const useStatusContext = () => useContext(StatusContext);

export { useStatusContext };
