import axios from "axios";
import { useEffect, useRef, useState } from "react";

 
 export function CarouselDemo(){

    const [product, setProduct] = useState(
        {
            id:0,
            title:null,
            description:null, 
            image:null, 
            category:null, 
            price:0,
            rating:{rate:0,count:0}
        }
    ); 
    
    let productId = useRef(1);

    function LoadProductManually(id){
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
            setProduct(response.data);
        });
        
    }
    
    function handleNextClick(){
        productId.current = productId.current + 1;
        LoadProductManually(productId.current)
    }
    function handlePrevClick(){
        productId.current = productId.current - 1;
        LoadProductManually(productId.current)
    }

    function handleSeekbarChange(e){
        productId.current = parseInt(e.target.value);
        LoadProductManually(productId.current)
    }

    useEffect(()=>{
        LoadProductManually(1);
        // console.log(product);
    },[])

    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="card p-2 w-50 mt-4">
                <div className="card-header">
                    <div>{product.title}</div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button className="btn btn-dark bi bi-chevron-left" onClick={handlePrevClick}></button>
                        </div>
                        <div className="col-10">
                            <img height="400 mt-2" width="100%" src={product.image}/>
                            <div>
                                <input type="range" min="1" max="20" value={productId.current} onChange={handleSeekbarChange} step="1"  className="form-range"  />
                            </div>
                        </div>
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button className="btn btn-dark bi bi-chevron-right" onClick={handleNextClick}></button>
                        </div>
                    </div>
                </div>
                <div className="card-header text-center">
                    <button className="btn btn-success bi bi-play " ></button>
                    <button className="btn btn-danger bi bi-pause mx-2"></button>
                </div>
            </div>
        </div>
    )
 }