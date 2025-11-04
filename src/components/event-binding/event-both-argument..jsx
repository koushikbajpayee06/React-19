import { useState } from "react";

export function EventBothArgument(){
    const [msg, setMsg] = useState(null);

    function handleInsertClick(e,...product){
        setMsg("succesfully inserted");
        let [id,name,stock,cities,rating] = product;
        console.log(`Id=${id}\nName=${name}\nStock=${stock}\nCities=${cities}\nRating=${rating.Rate}`);
        console.log(`Button Value:${e.target.value}\nButton Id:${e.target.id}\nX Position:${e.clientX}`)
    }

    return(
        <div className="container-fluid p-4">
            <button value="Insert" id="btnInsert" onClick={(e)=>handleInsertClick(e,1,"TV",true,["Delhi","Kolkata"],{Rate:4.2})} className="btn btn-warning bi bi-pen-fill"> Insert</button>
            <p>{msg}</p>
        </div>
    )
}