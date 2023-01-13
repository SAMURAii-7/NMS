import axios from "axios";
// const apiUrl = "http://localhost:8080/api";
const apiUrl = "https://nms-backend-production.up.railway.app/api";

export async function addController(email, ip, password) {
    const res = await axios.post(`${apiUrl}/auth/add`, {
        email: email,
        ip: ip,
        password: password,
    });
    return res;
}

export async function getControllers(email) {
    const res = await axios.get(`${apiUrl}/auth/controllers`, {
        params: { email: email },
    });
    return res;
}

export async function deleteController(id) {
    const res = await axios.delete(`${apiUrl}/auth/delete`, {
        params: { id: id },
    });
    return res;
}

export async function editController(id, ip, password) {
    const res = await axios.put(
        `${apiUrl}/auth/edit`,
        {
            id: id,
            ip: ip,
            password: password,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    return res;
}
