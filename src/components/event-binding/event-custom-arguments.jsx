import { useState } from "react";

export function EventCustomArgument(){
    const [msg, setMsg] = useState(null);

    function handleInsertClick(...product){
        setMsg("succesfully inserted");
        let [id,name,stock,cities,rating] = product;
        console.log(`Id=${id}\nName=${name}\nStock=${stock}\nCities=${cities}\nRating=${rating.Rate}`);
    }

    return(
        <div className="container-fluid p-4">
            <button value="Insert" id="btnInsert" onClick={()=>handleInsertClick(1,"TV",true,["Delhi","Kolkata"],{Rate:4.2})} className="btn btn-warning bi bi-pen-fill"> Insert</button>
            <p>{msg}</p>
        </div>
    )
}