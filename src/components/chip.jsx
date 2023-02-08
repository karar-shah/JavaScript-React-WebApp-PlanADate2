import React from "react";

export function Chip({ name, classname = "bi-chip", text }) {
    return (
        <div className={classname}>
            <input type="checkbox" id={name} />
            <label htmlFor={name}>{text}</label>
        </div>
    );
}
