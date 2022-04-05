import { useState } from "react";
import Modal from "./Modal";

const Todo = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const onHandleClick = () => {
        setModalVisible(true);
    }

    const onDismissModal = () => {
        setModalVisible(false);
    }

    return (
        <div className="card">
            <div className="card-content">
                <h2>Learn React</h2>
                <button onClick={onHandleClick} className="btn">Done</button>
            </div>
            {}
            {isModalVisible && <Modal dismissModal={onDismissModal}/>}
        </div>
    )
};

export default Todo;