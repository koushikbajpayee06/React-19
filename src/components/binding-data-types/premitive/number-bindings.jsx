import { useEffect, useState } from "react";

export function NumberBinding(){
    
    const [price, setprice]= useState(0);
    const [views] = useState(560000)
    useEffect(()=>{
        setprice(46000);
    },[]);
    return(
        <div className="container-fluid">
            <h2 className="text-center text-warning p-3">Data Binding</h2>
            <dl>
                <dt>Price</dt>
                <dd>{price.toLocaleString('en-in', {style:"currency", currency:"INR"})}</dd>
                <dt>Views</dt>
                <dd>{views.toLocaleString('en-us', {notation:"compact"})}</dd>
            </dl>
      </div>
    )
}