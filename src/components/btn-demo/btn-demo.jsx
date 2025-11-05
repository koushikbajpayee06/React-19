
export function ButtonDemo(){

    function handleDoubleClick(){
        window.open('p1.png',"Mobile",'width=400 height=400')
    }
    
    return(
        <div className="container-fluid">
            <h2>Button Events</h2>
            <img src='p1.png' onClick={handleDoubleClick} width="150" height="150"></img>
            <p>Double Click to view Large</p>
        </div>
    )
}