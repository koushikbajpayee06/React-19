
export function EventPropagation(){
    function NavClick(){
        alert("NavBar clicked - Navigate to Home");
    }
    function SearchClick(e){
        alert("Search Clicked - Show Search Results");
        e.stopPropagation()
    }
    return(
        <div className="container-fluid">
            <nav onClick={NavClick} className="p-2 border border-2 border-dark m-4">
                <h2>Amazon</h2>
                <button onClick={SearchClick} className="btn bi bi-search btn-warning"></button>
            </nav>
        </div>
    )
}