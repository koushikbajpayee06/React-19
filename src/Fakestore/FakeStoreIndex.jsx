import { useState } from "react";
import { FakeStoreProducts } from "./FakeStoreProducts";

export function FakeStoreIndex(){
    const [cartItems, setCartItems] = useState([]);  
    const [cartItemsCount, setCartItemsCount] = useState(0);

    function handleaddToCartClick(e){
        cartItems.push(e);
        alert(`${e.title}\nAdded to cart`)
        // console.log(cartItems);
        setCartItemsCount(cartItems.length)
    }
    return(
        <div className="container-fluid">
            <header className="border mt-2 border-1 p-4 d-flex justify-content-between">
                <div className="fs-5 fw-bold">FakeStore</div>
                <nav>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search Fakestore" />
                        <button className="btn btn-warning bi bi-search"></button>
                    </div>
                </nav>
                <div>
                    <button data-bs-target='#cart' data-bs-toggle='offcanvas' className="btn btn-warning bi bi-cart4 position-relative">Your Cart<span className="position-absolute fs-6 badge bg-danger text-white rounded rounded-circle" style={{right:"-10px", top:"-10px"}}>{cartItemsCount}</span></button>
                    <div className="offcanvas offcanvas-end" id="cart">
                        <div className="offcanvas-header">
                            <h3>Your Cart Items</h3>
                            <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>PreView</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems.map((item)=>(
                                            <tr key={item.id}>
                                                <td>{item.title}</td>
                                                <td><img src={item.image} width="50"/></td>
                                                <td>{item.price}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </header>
            <section>
                <FakeStoreProducts addToCart={handleaddToCartClick}/>
            </section>
        </div>
    )
}