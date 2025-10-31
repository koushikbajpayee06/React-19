import { useState,useEffect } from "react";
export function NullBinding(){
    const [price, setPrice] = useState();
    useEffect(()=>{
        setPrice(parseInt(prompt("Enter Price")));
    },[]);


    return(
        <div className="container-fluid">
            <p>{(price === null)?"Price not defined":price}</p>
        </div>
    )
}