

export function DataBinding(){
    var uname = "Koushik";
    var bgstyle = "bg-danger";
    return(
        <div className="container-fluid">
            <h2 className={`text-center text-warning p-3 ${bgstyle}`}>Data Binding</h2>
            <p>Hwllo ! {uname}</p>
            <input type="text" value={uname} />
        </div>
    )
}