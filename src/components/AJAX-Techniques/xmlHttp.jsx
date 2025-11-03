import { useState, useEffect } from "react";

function XmlFetch(){
    const [prod, setProd] = useState({title:"",price:0,image:'',rating:{rate:0,ratings:0,reviews:0},offers:[]})

    function GetProduct(){
        var http = new XMLHttpRequest();
        http.open("get","product.json",true);
        http.send();
        http.onreadystatechange = function(){
          if(http.readyState===4){
                setProd(JSON.parse(http.responseText));
            }
                
        }
    }
    useEffect(()=>{
        GetProduct();
    },[])
    return(
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-3">
                     <img src={prod.image} width="100%"/>
                </div>
                <div className="col-9">
                    <div className="fs-4">{prod.title}</div>
                    <div className="mt-2">
                        <span className="badge bg-success rounded">{prod.rating.rate}<span className="bi bi-star-fill"></span></span>
                        <span className="mx-3 fw-bold text-secondary"> {prod.rating.ratings.toLocaleString()} ratings & {prod.rating.reviews.toLocaleString()}</span>
                        <div className="mt-3">
                            <div className="h1">{prod.price.toLocaleString('en-in',{style:"currency",currency:"INR",minimumFractionDigits:0})}</div>
                        </div>
                        <div className="mt-3">
                            <h5>Available Offers</h5>
                            <ul>
                                {prod.offers.map((offer)=><li className="bi my-3 bi-tag-fill text-success" key={offer}> <span className="text-secondary">{offer}</span></li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default XmlFetch;