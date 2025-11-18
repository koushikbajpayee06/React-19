import { useEffect, useState } from "react"

const ConditionDemo2 = () => {

    const [userName,setUserName] = useState(null);

    function SessionTimeout(){
        alert("Your session Timed OUT")
        window.sessionStorage.removeItem("uname");
        location.reload();
    }

    function handleNameChange(e){
        setUserName(e.target.value);
    }

    function handleSigninClick(){
        window.sessionStorage.setItem("uname",userName);
        location.reload();

    }

    function handleSignOutClick(){
        window.sessionStorage.removeItem("uname");
        location.reload()
    }

    useEffect(()=>{
                setTimeout(SessionTimeout,5000)
    },[])

  return (
    <div className='container-fluid'>
        <header className='m-2 p-2 d-flex align-items-center justify-content-between border border-1'>
            <div className='fs-5 fw-bold'>Amazon</div>
            <nav>
                <span>Home</span>
                <span className="mx-4">Shop</span>
                <span>Contact</span>
            </nav>
            <div>
               {
                (window.sessionStorage.getItem('uname')===null)
                ?
                <div className="input-group">
                     <input type='text' className="form-control" onChange={handleNameChange} placeholder="User Name"/> <button onClick={handleSigninClick} className="btn btn-danger" >Signin</button>
               </div>
               :
               <div className="fw-bold">
                    {
                        window.sessionStorage.getItem("uname")
                    }
                    <button onClick={handleSignOutClick} className="btn btn-danger mx-2"> Signout</button>
               </div>
               }
            </div>
        </header>
    </div>
  )
}

export default ConditionDemo2
