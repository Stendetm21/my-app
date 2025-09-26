import React from "react";
import { useState } from "react";

function HeaderButton() {
    const [isActive, setIsActive] = useState(false);
    function toggleActive() {
        setIsActive(!isActive);
    }
    return (
        <button className={isActive ? 'active' : ''} onClick={toggleActive}>
            {isActive ? 'Active' : 'Inactive'}
        </button>
    )
}
export default HeaderButton;