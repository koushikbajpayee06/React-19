
import { useState } from "react"

function ArrayOfObjectBinding(){

    const [products] = useState(
       [
         {
            Name:"Samsung TV", 
            Price: 45000, 
            ShippedTo:['Delhi'], 
            Rating:{Rate:4.2, Count:600}
        },
        {
            Name:"Mobile", 
            Price: 25000, 
            ShippedTo:['Delhi','Hyd'], 
            Rating:{Rate:4.8, Count:200}
        },
        {
            Name:"Blue STAR AC", 
            Price: 36000, 
            ShippedTo:['Pune'], 
            Rating:{Rate:4.3, Count:900}
        },
        {
            Name:"AO Smith Gyser", 
            Price: 15000, 
            ShippedTo:['Kol'], 
            Rating:{Rate:4.6, Count:460}
        }
       ]
    );
    return(
        <div className="container-fluid">
            <h2>Product Details Table</h2>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Address</th>
                        <th>Rating</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((prod,index)=><tr key={index}><td>{prod.Name}</td><td>{prod.Price}</td><td>{prod.ShippedTo}</td><td>{prod.Rating.Rate}<span className="text-success bi bi-star-fill"> [{prod.Rating.Count}]</span></td><td><button className="btn btn-success bi bi-eye"></button> <button className="btn btn-warning bi bi-pen-fill ms-2"></button> <button className="btn btn-danger bi bi-trash mx-2"></button></td></tr>)
                    }
                </tbody>
            </table>
        </div>
        
    )
}
export default ArrayOfObjectBinding;