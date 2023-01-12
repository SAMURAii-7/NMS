import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { verify } from "../services/authServices";
import Cookies from "universal-cookie";

function Verify() {
    let location = useLocation();
    const cookies = new Cookies();
    let navigate = useNavigate();
    let date = new Date();
    date.setDate(date.getDate() + 30);

    const [code, setCode] = useState("");

    async function handleCodeChange(e) {
        setCode(e.target.value);
    }

    async function handleCodeSubmit(e) {
        e.preventDefault();
        try {
            const isLoggedIn = await verify(location.state.email, code);
            if (isLoggedIn.status >= 200 && isLoggedIn.status < 300) {
                cookies.set("auth-token", isLoggedIn.data.token, {
                    expires: date,
                });
                navigate("/dashboard");
            }
        } catch (err) {
            alert("Code incorrect! Please try again.");
        }
        setCode("");
    }

    return (
        <div className="loginDiv">
            <form className="loginForm" onSubmit={(e) => handleCodeSubmit(e)}>
                <p>Enter Code from your Authenticator app</p>
                <input
                    placeholder="Code"
                    onChange={(e) => handleCodeChange(e)}
                    type="text"
                    id="code"
                    value={code}
                />
                <button className="btn" type="submit">
                    Log In
                </button>
            </form>
        </div>
    );
}

export default Verify;
