import { useState } from "react";

export function EventArgument(){
    const [msg, setMsg] = useState(null);

    function handleInsertClick(e){
        setMsg("succesfully inserted");
        console.log(`Button Value:${e.target.value}\nButton Id:${e.target.id}\nX Position:${e.clientX}`)
    }

    return(
        <div className="container-fluid p-4">
            <button value="Insert" id="btnInsert" onClick={handleInsertClick} className="btn btn-warning bi bi-pen-fill"> Insert</button>
            <p>{msg}</p>
        </div>
    )
}