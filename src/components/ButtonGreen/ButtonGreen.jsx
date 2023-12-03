import React from "react";

const ButtonGreen = ({children, ...arg}) => {
    return (
        <button {...arg} className="text-content__btn">
            {children}
        </button>
    );
};

export default ButtonGreen;
