import { useEffect, useState } from "react";
import {
    getControllers,
    deleteController,
} from "../services/controllerServices";
import Controller from "./Controller";
import Cookies from "universal-cookie";

function ControllerCard() {
    const cookie = new Cookies();

    const [controllers, setControllers] = useState([]);

    async function handleDelete(id) {
        const newControllers = controllers.filter((c) => c.id !== id);
        setControllers(newControllers);

        await deleteController(id);
    }

    // async function handleEdit(controller) {
    //     const newControllers = controllers.filter(
    //         (c) => c.id !== controller.id
    //     );
    //     setControllers(newControllers);
    //     editController(controller);
    // }

    // async function editController(controller) {
    //     const res = await getControllers(controller.id, controller.ip, controller.password);
    //     if(res.status === 200) {
    //         const updatedController = {
    //             id: res.data.id,
    //             ip: res.data.ip,
    //             password: res.data.password,
    //         }
    //         setControllers([...controllers, res.data]);
    //     }
    // }

    useEffect(() => {
        async function getControllersList() {
            const res = await getControllers(cookie.get("email"));
            setControllers(res.data);
        }
        getControllersList();
        // eslint-disable-next-line
    }, []);

    return typeof controllers === "undefined" || controllers.length === 0 ? (
        <p className="no-items">No Controllers Found!</p>
    ) : (
        <div className="controllers">
            {controllers.map((controller, i) => (
                <Controller
                    key={controller.id}
                    idx={i}
                    controller={controller}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
}

export default ControllerCard;
