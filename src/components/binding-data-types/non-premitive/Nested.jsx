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
            <select>
                {
                    data.map(item=>
                    <optgroup key={item} label={item.Catagory}>
                        {
                            item.Products.map(product=><option key={product}>{product}</option>)
                        }
                    </optgroup>)
                }
            </select>
        </div>
    )
}

export default NestedDataBinding;