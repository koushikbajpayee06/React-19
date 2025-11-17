import React from 'react'

const DataGrid = (props) => {
  return (
    <table className=''>
      <caption>{props.caption}</caption>
      <thead>
        <tr>
            {
                props.fields.map((field)=><th key={field}>{field}</th>)
            }
        </tr>
      </thead>
      <tbody>
        {
            props.data.map((item,index)=>
            <tr key={index}>
                {
                    Object.keys(item).map(key=><td key={key}>{item[key]}</td>)
                }
            </tr>
            )
        }
      </tbody>
    </table>
  )
}

export default DataGrid
