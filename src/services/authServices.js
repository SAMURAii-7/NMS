import axios from "axios";
// const apiUrl = "https://nms-production.up.railway.app/api";
const apiUrl = "http://localhost:8080/api";

export async function login(email, password) {
    const res = await axios.post(`${apiUrl}/auth/signin`, {
        email: email,
        password: password,
    });
    return res;
}

export async function signup(name, email, password, mfa) {
    const role = "ROLE_USER";
    const signUpRes = await axios.post(`${apiUrl}/auth/signup`, {
        username: name,
        email: email,
        roles: [role],
        password: password,
        mfa: mfa,
    });
    // if (signUpRes.status >= 200 && signUpRes.status < 300) {
    //     const res = await axios.post(`${apiUrl}/auth/signin`, {
    //         email: email,
    //         password: password,
    //     }); //auto login after signup
    //     return res;
    // } else return signUpRes.status;
    return signUpRes;
}

export async function validate(token) {
    const res = await axios.post(`${apiUrl}/auth/validate`, {
        token: token,
    });
    return res;
}

export async function verify(email, code) {
    const res = await axios.post(`${apiUrl}/auth/verify`, {
        email: email,
        code: code,
    });
    return res;
}
