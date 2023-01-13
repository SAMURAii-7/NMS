import { FaTrash } from "react-icons/fa";

function Controller({ idx, controller, handleDelete }) {
    return (
        <div className="controller">
            <h3>Controller {idx + 1}</h3>
            <p>IP: {controller.ip}</p>
            <div className="icons">
                <button
                    onClick={() => handleDelete(controller.id)}
                    className="delete"
                >
                    <FaTrash color="rgb(10, 16, 133)" />
                </button>
                {/* <button onClick={() => handleEdit(controller)} className="edit">
                    <FaPen color="rgb(10, 16, 133)" />
                </button> */}
            </div>
        </div>
    );
}

export default Controller;
