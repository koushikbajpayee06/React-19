import axios from "axios";
import { useEffect, useState } from "react"
import './mouse-demo.css' 


export function MouseDemo(){
    const [mobiles, setMobiles] = useState([{img_src:null}]);
    const [previewSrc, setPreviewSrc] = useState('p1.png');

    useEffect(()=>{
        axios.get('mobiles.json').then(response=>{
            setMobiles(response.data);
        })
    })

    function handleMouseHover(e){
        setPreviewSrc(e.target.src);
    }
    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-1">
                    {
                        mobiles.map(mobile=><div className="container-style my-4">
                            <img onMouseOver={handleMouseHover} src={mobile.img_src} key={mobile.img_src} width='50px' height='50px'></img>
                        </div>)
                    }
                </div>
                <div className="col-11">
                    <img  width="500" height="500" src={previewSrc}/>
                </div>
            </div>
        </div>
    )
}