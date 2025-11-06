import { useState,useRef } from "react";


export function Stopwatch(){
    const [hrs, setHrs] = useState(0);
    const [mins, setmin] = useState(0);
    const [sec, setSec] = useState(0);
    const [milliSec, setMilliSec] = useState(0);
    let thread = useRef(null)

    var ms = 0;
    var s = 0;
    var m = 0;
    var h = 0;
    function  StartTimer(){
        ms++;
        setMilliSec(ms);
        if(ms===999){
            ms = 0;
            s++;
            setSec(s);
            if(s===60){
                s=0;
                m++;
                setmin(m);
                if(m===60){
                    m=0;
                    h++;
                    setHrs(h);
                }
            }
        }
    }
    function handleStartClick(){
        thread.current = setInterval(StartTimer,1);
    }
    function handleClearClick(){
        clearInterval(thread.current);
        setMilliSec(0);
        setSec(0);
        setmin(0);
        setHrs(0);
    }
    return(
        <div className="container-fluid p-4">
            <div className="d-flex justify-content-center">
                <div className="w-50 fs-5">
                   <div className="row">
                        <div className="col  p-3 border border-2">
                            <span>{hrs} h</span>
                        </div>
                        <div className="col p-3 border border-2">
                            <span>{mins} m</span>
                        </div>
                        <div className="col p-3 border border-2">
                            <span>{sec} s</span>
                        </div>
                        <div className="col p-3 border border-2">
                            <span>{milliSec} ms</span>
                        </div>
                   </div>
                    <div className="my-3">
                        <button className="btn btn-primary" onClick={handleStartClick}>Start</button>
                        <button className="btn btn-secondary ms-2" onClick={handleClearClick}>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}