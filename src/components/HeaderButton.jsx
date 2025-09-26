import React from "react";
import { useState } from "react";

function HeaderButton({ title }) {
    const [isActive, setIsActive] = useState(false);
    function toggleActive() {
        setIsActive(!isActive);
    }
    console.log(title);
    return (
        <button className={isActive ? 'active' : ''} onClick={toggleActive}>
            {title}
        </button>
    )
}
export default HeaderButton;