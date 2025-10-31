import { useState,useEffect } from "react";
export function UndefinedBinding(){
    const [price, setPrice] = useState();
    useEffect(()=>{
        setPrice(50000)
    },[]);


    return(
        <div className="container-fluid">
            <p>{(price)?price:"Price not defined"}</p>
        </div>
    )
}