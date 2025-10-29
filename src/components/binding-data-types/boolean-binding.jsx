import { useEffect, useState } from "react";

export function BooleanBinding(){
    
    const [price, setprice]= useState(0);
    const [views] = useState(560000);
    const [stock] = useState(true);
    useEffect(()=>{
        setprice(45000);
    },[]);
    return(
        <div className="container-fluid">
            <h2 className="text-center text-warning p-3">Data Binding</h2>
            <dl>
                <dt>Price</dt>
                <dd>{price.toLocaleString('en-in', {style:"currency", currency:"INR"})}</dd>
                <dt>Views</dt>
                <dd>{views.toLocaleString('en-us', {notation:"compact"})}</dd>
                <dt>Stock</dt>
                <dd>{(stock===true) ? "Available" : "Out of Stock" }</dd>
            </dl>
      </div>
    )
}