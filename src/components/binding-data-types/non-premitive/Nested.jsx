import { useState } from "react"


function NestedDataBinding()
{
    const [data] = useState(
        [
            {
                Catagory:"Electronics",
                Products:["Televisions","Mobiles"],
            },
            {
                Catagory:"Fashion",
                Products:["Footwear","Jeans"],
            }
        ]
    );
    return(
        <div className="container-fluid">
            <h2>Products</h2>
            <ol>
                {
                    data.map((item)=><li key={item}>
                        {item.Catagory}
                        <ul>
                            {
                                item.Products.map((prod)=><li key={prod}>{prod}</li>)
                            }
                        </ul>
                    </li>)
                }
            </ol>
        </div>
    )
}

export default NestedDataBinding;