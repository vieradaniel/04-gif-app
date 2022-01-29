import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp =()=>{


    const [categories, setCategories] = useState(['One Punch','Samurai X', 'Dragon Ball']);

    // const addCatHandler= ()=>{

    //     //setCategories ([...categories,'Sailor Moon']);
    //     setCategories (cats => [...categories,'Sailor Moon']);

    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />
            
            <ol>
                { 
                    categories.map(category =>{
                        return <li key={ category }>{category}</li>
                    })
                }
            </ol>
        </>
        
    )
}

export default GifExpertApp;