import { FakeStoreProducts } from "./FakeStoreProducts";

export function FakeStoreIndex(){
    function handleaddToCartClick(e){
        console.log(e);
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
                    <button className="btn btn-warning bi bi-cart4 position-relative"><span className="position-absolute bg-danger text-white rounded rounded-circle"></span></button>
                </div>
            </header>
            <section>
                <FakeStoreProducts addToCart={handleaddToCartClick}/>
            </section>
        </div>
    )
}