import { useRef, useState } from "react";

export function Debounce(){
    
    const [msg, setMsg] = useState(null);
    let thread = useRef(null);

    function v1(){
        setMsg("volume up by 30%");
    }
    function v2(){
        setMsg("volume up by 60%");
    }
    function v3(){
        setMsg("volume full");
    }  

    function handleBtnClk(){
        setTimeout(v1,4000);
        thread.current = setTimeout(v2,8000);
        setTimeout(v3,10000)
    }

    function handleCancelClick(){
        clearTimeout(thread.current)
    }

    return(
        <div className="container-fluid">
            <div className="mt-3">
                <button onClick={handleBtnClk} className="bi bi-volume-up btn btn-success"></button>
                <button onClick={handleCancelClick} className="btn btn-danger mx-2">Cancle V2</button>
            </div>
            <h2>{msg}</h2>
        </div>
    )
}