import { createContext, useContext, useState } from "react";

let userContext = createContext(null);


export function Child2(){
    let context = useContext(userContext)
    return(
        <div className=" m-4 bg-danger text-warning p-4">
            <h2>Child-2 - {context}</h2>
        </div>
    )
}

export function Child1(){
    let context = useContext(userContext);
    return(
        <div className=" m-4 bg-warning text-danger p-4">
            <h2>Child-1 -  {context}</h2>
            <Child2/>
        </div>
    )
}

export function ContextDemo(){
    const [msg , setMsg] = useState("Welcome")
    function handleNameChange(e){
        setMsg(e.target.value)
    }
    return (
        <div className="container-fluid mx-4 bg-dark text-white p-4">
            <div>
                <input type="text" placeholder="User Name" onChange={handleNameChange} />
            </div>
            <h2>Parent  - {msg}</h2>
            <userContext.Provider value={msg}>
                <Child1/>
            </userContext.Provider>
        </div>
    );
}