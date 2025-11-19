import { useEffect, useState } from "react"

export function FakeStoreProducts({addToCart}){
    const [products, setProducts] = useState([{id:0, title:null , price:0,category:null, description:null, image:null}]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch('https://fakestoreapi.com/products') ;
        const json = await data.json();
        // console.log(json);
        setProducts(json)
    }

    function handleAddClick(product){
        addToCart(product);
    }
    return(
        <div className="d-flex overflow-auto flex-wrap" style={{height:'600px'}}>
            {
                products.map(product=>
                    <div className="card m-2 p-2" key={product.id} style={{width:"250px"}}>
                        <img src={product.image} alt="img" className="card-img-top" height='120px' />
                        <div className="card-header overflow-auto"  style={{height:'120px'}}>
                            {
                                product.title
                            }
                        </div>
                        <div className="card-body">
                            <dl>
                                <dt>Price</dt>
                                <dd>{product.price}</dd>
                            </dl>
                        </div>
                        <div className="card-footer">
                            <button onClick={()=>handleAddClick(product)} className="btn btn-warning bi bi-cart4 w-100">Add to Cart</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}