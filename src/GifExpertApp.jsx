import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = ( {title} ) => {

    const [ categories, setCategories ] = useState([ 'Dragon ball' ]);

    const onAddCategory = (value) => {
        
        if( categories.includes( value ) ) return;

        setCategories([value, ...categories]);
    }

    const onRemoveItem = (index) => {
        console.log(index);
    }

    return (

        <>
            <h1>Gif expert app</h1>
            <h4> This is the title: { title }</h4>

            <AddCategory 
                onNewCategory = { onAddCategory }
            />

                { categories.map( (item) => (
                    <GifGrid 
                        category={ item } 
                        key={ item }
                    />
                ))
                }
        </>
    );
}