import React, { useState } from 'react';

const InputField = ({addItemProp}) => {

    // Use State hook to aid with input value referencing
    const [textValue, setTextValue] = useState("");

    // Handle item addition
    const handleSubmit = e => {
        // Prevent page reload
        e.preventDefault();
        // Exit if blank value submitted
        if (!textValue) return;
        // Call add item function from App.js
        addItemProp(textValue);
        // Reset the input field text
        setTextValue("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="enter item"
                value={textValue}
                onChange={e => setTextValue(e.target.value)}
            />
            <button 
                type="submit"
            >
                add
            </button>
    </form>
    )
}

export default InputField;