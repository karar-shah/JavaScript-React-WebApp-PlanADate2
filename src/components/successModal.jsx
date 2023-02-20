import React from "react";
import ReactModal from "react-modal";

export const SuccessModal = ({
    icon,
    label,
    message,
    open,
    closeModel,
    style,
}) => {
    const customStyles = {
        ...style,
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            textAlign: "center",
            outline: "none",
            border: "none",
            width: "315px",
            "border-radius": "32px",
            "box-shadow": "0px 0px 60px rgba(0, 0, 0, 0.3)",
        },
    };

    return (
        <ReactModal
            isOpen={open}
            onRequestClose={closeModel}
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="success-modal">
                <h1>{label}</h1>
                <div className="success-modal_img">
                    <img src={icon} alt="check icon" className="img-fluid" />
                </div>
                <p>{message}</p>
            </div>
        </ReactModal>
    );
};
