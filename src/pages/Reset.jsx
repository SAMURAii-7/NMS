import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { reset } from "../services/authServices";

function Reset() {
    const [password, setPassword] = useState("");
    const location = useLocation();

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    async function handleResetSubmit(e) {
        e.preventDefault();
        try {
            const isSent = await reset(location.state.email, password);
            if (isSent.status >= 200 && isSent.status < 300) {
                alert("You can now log in with your new password.");
            }
        } catch (err) {
            alert("Error in Updating Password! Please try again.");
        }

        setPassword("");
    }

    return (
        <form className="loginForm" onSubmit={(e) => handleResetSubmit(e)}>
            <p>Enter the New Password</p>
            <input
                placeholder="Password"
                onChange={(e) => handlePasswordChange(e)}
                type="password"
                id="password"
                value={password}
            />
            <button className="btn" type="submit">
                Submit
            </button>
            <Link className="link" to="/">
                Go To Home
            </Link>
        </form>
    );
}

export default Reset;
