import React from 'react';
import "./Button.css";

const Button = ({ type, children }) => {
    const baseStyle = "rounded-full text-white";
    const styles = {
        primary: `${baseStyle} bg-[#46B0E6] shadow-primary`,
        secondary: `${baseStyle} bg-[#F89D21] shadow-secondary`,
    };

    return (
        <button className={`btn ${styles[type]}`}>
            {children}
        </button>
    );
};

export default Button;
