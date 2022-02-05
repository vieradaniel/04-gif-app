import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp =({ defaultCategories = []})=>{


    //const [categories, setCategories] = useState(['Sailor Moon']);
    const [categories, setCategories] = useState( defaultCategories );

    // const addCatHandler= ()=>{

    //     //setCategories ([...categories,'Sailor Moon']);
    //     setCategories (cats => [...categories,'Sailor Moon']);

    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories ={ setCategories }/>
            <hr />
           
            <ol>
                { 
                    categories.map(category =>(
                        <GifGrid 
                            key={ category }
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
        
    )
}

export default GifExpertApp;