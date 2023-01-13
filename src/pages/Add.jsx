import NavBar from "../components/NavBar";
import { useState } from "react";
import { addController } from "../services/controllerServices";
import Cookies from "universal-cookie";

function Add() {
    const cookies = new Cookies();

    const [addData, setAddData] = useState({ ip: "", password: "" });

    function handleAddChange(e) {
        setAddData({ ...addData, [e.target.id]: e.target.value });
    }

    async function handleAddSubmit(e) {
        e.preventDefault();
        try {
            const isAdded = await addController(
                cookies.get("email"),
                addData.ip,
                addData.password
            );
            if (isAdded.status >= 200 && isAdded.status < 300) {
                alert("Controller added successfully!");
            }
        } catch (err) {
            alert("Coudn't Add Controller! Please try again.");
        }
        setAddData({ ip: "", password: "" });
    }

    return (
        <div className="dashboard-div">
            <NavBar />
            <form className="loginForm" onSubmit={(e) => handleAddSubmit(e)}>
                <p>Add Controller</p>
                <input
                    placeholder="IP"
                    onChange={(e) => handleAddChange(e)}
                    type="text"
                    id="ip"
                    value={addData.ip}
                />
                <input
                    placeholder="Password"
                    onChange={(e) => handleAddChange(e)}
                    type="password"
                    id="password"
                    value={addData.password}
                />
                <button className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Add;
