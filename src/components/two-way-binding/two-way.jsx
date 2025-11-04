import { useState } from "react"

export function TwoWayBinding(){

    const [uname,setUname] = useState('John');
    const [msg, setMsg] = useState(null);

    function NameChange(e){
        setUname(e.target.value)
    }
    function VerifyName(e){
        if(e.target.value === "John"){
            setMsg("Name Taken - Try Another")
        }else{
            setMsg("Name Available")
        }
    }
    return (
        <div className="container-fluid">
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onKeyUp={VerifyName} onChange={NameChange} value={uname}/></dd>
                <dd>{msg}</dd>
            </dl>
            <h2>Hello! {uname}</h2>
        </div>
    )
}
