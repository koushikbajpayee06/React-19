import { useState } from "react";

function ArrayBinding(){
    const [catagories] = useState(['All','Electronics','Fashion','Footware']);

    return(
        <div className="container-fluid">
            <header className="mt-4 p-4 border d-flex justify-content-between border-2">
                <header className="h3">Amazon</header>
                <nav>
                    {
                        catagories.map((item)=><span className="mx-4"><a href="#">{item}</a></span>)
                    }
                </nav>
                <div>
                    <span className="bi bi-heart"></span>
                    <span className="bi bi-cart4 mx-2"></span>
  
                </div>
            </header>
            <ol>
                {
                    catagories.map((item,index)=><li key={index}>{item}</li>)
                }
            </ol>
            <select name="" id="">
                {
                    catagories.map((item,index)=><option key={index}>{item}</option>)
                }
            </select>
        </div>
    )
}

export default ArrayBinding;