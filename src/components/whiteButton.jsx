import React from "react";

export function WhiteButton({ text, classname = "white-button" }) {
    return <button className={classname}>{text}</button>;
}
