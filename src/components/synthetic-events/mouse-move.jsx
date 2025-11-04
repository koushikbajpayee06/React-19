import { useState } from "react";


export function MouseMove(){
    const [imgPos, setImgPos] = useState({position:null, top:null,left:null});

    function handleMouseMove(e){
        setImgPos({position:'fixed',left:e.clientX+"px",top:e.clientY+"px"})
    }
    return(
        <div onMouseMove={handleMouseMove} >
            <div style={{height:'1000px'}}></div>
            <h1>Move Your mouse Pointer to test</h1>
            <img  width="50px" height="50px" src="flag.gif" style={imgPos}></img>
        </div>
    )
}