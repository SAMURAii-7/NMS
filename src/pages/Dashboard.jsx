import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Restricted from "../components/Restricted";

const Dashboard = ({ handleValidation }) => {
    const navigate = useNavigate();
    const cookies = new Cookies();

    const handleLogout = () => {
        cookies.remove("auth-token");
        navigate("/");
    };

    return typeof cookies.get("auth-token") != "undefined" ? (
        handleValidation() ? (
            <div className="dashboard-div">
                <h1>Dashboard</h1>
                <button className="btn" onClick={() => handleLogout()}>
                    Logout
                </button>
            </div>
        ) : (
            <Navigate to="/" />
        )
    ) : (
        <Restricted />
    );
};

export default Dashboard;
