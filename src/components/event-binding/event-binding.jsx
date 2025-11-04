import { useState } from "react";

export function EventBinding(){
    const [msg, setMsg] = useState(null);

    function handleInsertClick(){
        setMsg("Inserted Successfully");
    }
    return(
        <div className="container-fluid p-4">
            <button onClick={handleInsertClick} className="btn btn-warning bi bi-pen-fill"> Insert</button>
            <p className="text-success my-4">{msg}</p>
        </div>
    )
}