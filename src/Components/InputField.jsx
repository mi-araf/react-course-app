import React from 'react';
import { useState } from 'react';

const InputField = () => {
    const [name, setName] = useState('');
    
    function handleChange() {
        const value = event.target.value;
        setName(value);
    }

    return (
        <div>
            {/* onChange={() => handleChange()} or onChange={handleChange} */}
            <input onChange={handleChange} type="text" name="" id="" placeholder='Name...' /> 
			<div>this change on writing in the input field: <h3>{name}</h3></div>
        </div>
    );
};

export default InputField;