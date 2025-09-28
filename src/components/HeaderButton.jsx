import React from "react";
import { useState } from "react";

function HeaderButton({ title, isActive, onClick }) {
    return (
        <button
            className={isActive ? 'active' : ''}
            onClick={onClick}
        >
            {title}
        </button>
    );
}

export default HeaderButton;