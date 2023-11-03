import { useContext } from "react";
import { AuthContext } from "./context/Auth";

const ProtectedRoutes = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (isAuthenticated) {
        return children
    }
}

export default ProtectedRoutes;