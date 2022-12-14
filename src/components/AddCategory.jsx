import { useState } from "react";

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length <=2 ) return;

        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <div>
            <form onSubmit={ onSubmit }>
                <input 
                    type="text" 
                    value={ inputValue }
                    placeholder="Search gifs"
                    onChange={ onInputChange }/>
            </form>
        </div>
    )
}