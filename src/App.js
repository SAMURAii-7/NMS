import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { validate } from "./services/authServices";
import Cookies from "universal-cookie";
import QRCode from "./pages/QRCode";
import Verify from "./pages/Verify";
import Forgot from "./pages/Forgot";
import Reset from "./pages/Reset";
import Add from "./pages/Add";

function App() {
    const cookies = new Cookies();

    async function handleValidation() {
        try {
            const res = await validate(cookies.get("auth-token"));
            if (res.status >= 200 && res.status < 300) {
                return true;
            }
        } catch (err) {
            cookies.remove("auth-token");
            return false;
        }
    }

    return (
        <Router>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Home handleValidation={handleValidation} />}
                />
                <Route
                    exact
                    path="/dashboard"
                    element={<Dashboard handleValidation={handleValidation} />}
                />
                <Route exact path="/qrcode" element={<QRCode />} />
                <Route exact path="/verify" element={<Verify />} />
                <Route exact path="/forgot" element={<Forgot />} />
                <Route exact path="/reset" element={<Reset />} />
                <Route exact path="/add-controller" element={<Add />} />
                <Route exact path="/*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
