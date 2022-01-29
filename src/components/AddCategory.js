import React, { useState } from 'react';

export const AddCategory = () => {

    const [InputValue, setInputValue] = useState("Hola Mundo");
    const handleInputChange = (e)=>{
        console.log(e.target.value);
        setInputValue(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Submit hecho');
    }

  return (
        
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value = { InputValue }
                onChange = { handleInputChange }
            />
        </form>
        
        );
};
