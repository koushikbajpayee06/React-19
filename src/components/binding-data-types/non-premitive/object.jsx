import { useState } from "react"

function ObjectBinding(){

    const [product] = useState(
        {
            Name:"Samsung TV", 
            Price: 45000, 
            ShippedTo:['Delhi','Hyd'], 
            Rating:{Rate:4.2, Count:600}
        }
    );
    return(
        <div className="container-fluid">
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt>Price</dt>
                <dd>{product.Price}</dd>
                <dt>Address</dt>
                <dd>
                    <ul>
                        {
                             product.ShippedTo.map((addr)=><li ley={addr}>{addr}</li>)
                        }
                        </ul>
                </dd>
            </dl>
            <dt>Rating</dt>
            <dd>
                {product.Rating.Rate}<span className="bi bi-star-fill text-success"></span>[{product.Rating.Count}]
            </dd>
        </div>
        
    )
}
export default ObjectBinding