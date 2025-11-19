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

export function Child1({onChildClick}){
    let context = useContext(userContext);

    function handleButtonClick(){
        var data = {Name:"TV", Rating:4.2};
        onChildClick(data)
    }
    return(
        <div className=" m-4 bg-warning text-danger p-4">
            <h2>Child-1 -  {context}</h2>
            <button onClick={handleButtonClick} className="btn btn-light">Send Data to Parent</button>
            <Child2/>
        </div>
    )
}

export function ContextDemo(){
    const [msg , setMsg] = useState("Welcome")
    const [msgFromChild,setMsgFromChild] = useState(null)
    function handleNameChange(e){
        setMsg(e.target.value)
    }
    function handleChildClick(e){
        setMsgFromChild(e)
    }
    return (
        <div className="container-fluid mx-4 bg-dark text-white p-4">
            <div>
                <input type="text" placeholder="User Name" onChange={handleNameChange} />
            </div>
            <h2>Parent  - {msg}<span className="mx-3">{msgFromChild.Rating}</span></h2>
            <userContext.Provider value={msg} >
                <Child1 onChildClick={handleChildClick}/>
            </userContext.Provider>
        </div>
    );
}