
export function EventPropagation(){
    function NavClick(){
        alert("NavBar clicked - Navigate to Home");
    }
    function SearchClick(e){
        alert("Search Clicked - Show Search Results");
        e.stopPropagation();
    }

    function SubmitClick(e){
        e.preventDefault();
        alert('Form Submitted')
    }
    return(
        <div className="container-fluid">
            <nav onClick={NavClick} className="p-2 border border-2 border-dark m-4">
                <h2>Amazon</h2>
                <button onClick={SearchClick} className="btn bi bi-search btn-warning"></button>
            </nav>
            <section className="m-4">
                <form onSubmit={SubmitClick}>
                    <h3>User Name</h3>
                    <input type="text" name="User" /> <button type="submit">Login</button>
                </form>
            </section>
        </div>
    )
}