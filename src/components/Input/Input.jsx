import React, { useState } from "react";

const Input = () => {
    const [value, setValue] = useState('')
    const handleChange = (event) => {
        let value = event.target.value;
        console.log(value);
        setValue(value)

    }
    return (
        <input
            value={value}
            onChange={(event) => handleChange(event)}
            placeholder="Ваш email"
            className="form-modal__input"
            type="text"
        />
    );
};

export default Input;
