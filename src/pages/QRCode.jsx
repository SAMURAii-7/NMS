import { Link, useLocation } from "react-router-dom";

function QRCode() {
    let location = useLocation();

    return (
        <div className="home-wrapper">
            <h2>
                Scan the QR Code below using any authenticator app like Google
                Authenticator
            </h2>
            <img className="qrcode" src={location.state.qrCode} alt="QR Code" />
            <Link to="/" className="link-btn">
                Go back to Login Page
            </Link>
        </div>
    );
}

export default QRCode;
