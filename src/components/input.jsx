import React from "react";

export function Input({ type, name, classname }) {
    return <input className={classname} type={type} name={name} />;
}
