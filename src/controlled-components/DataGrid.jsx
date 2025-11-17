import React from 'react'

const DataGrid = (props) => {
  return (
    <table className='table table-hover table-border caption-top'>
      <caption>{props.caption}</caption>
      <thead>
        <tr>
            {
                props.fields.map((field)=><th key={field}>{field}</th>)
            }
            <th>Actions</th>
        </tr>
        
      </thead>
      <tbody>
        {
            props.data.map((item,index)=>
            <tr key={index}>
                {
                    Object.keys(item).map(key=><td key={key}>{item[key]}</td>)
                }
            <td>
                <button className='btn btn-warning bi bi-pen-fill'></button>
                <button className='btn btn-danger bi bi-trash mx-2'></button>
            </td>
            </tr>
            )
        }
      </tbody>
    </table>
  )
}

export default DataGrid
