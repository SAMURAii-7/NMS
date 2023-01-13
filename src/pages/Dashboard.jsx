import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import ControllerList from "../components/ControllerList";
import NavBar from "../components/NavBar";
import Restricted from "../components/Restricted";

const Dashboard = ({ handleValidation }) => {
    const cookies = new Cookies();

    return typeof cookies.get("auth-token") != "undefined" ? (
        handleValidation() ? (
            <div className="dashboard-div">
                <NavBar />
                <h1 className="dashboard-heading">Your Controllers</h1>
                <ControllerList />
            </div>
        ) : (
            <Navigate to="/" />
        )
    ) : (
        <Restricted />
    );
};

export default Dashboard;
