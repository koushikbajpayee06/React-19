import React, { useState } from 'react'
// import DataGrid from '../../controlled-components/DataGrid'
import DataGridCondition from '../../controlled-components/DataGridCondition'

const ControlledDemo = () => {
  const [layout, setLayout] = useState(null);
  function handleChange(e){
    setLayout(e.target.value)
  }
  return (
    <div className='container-fluid'>
      <h2>Employee Details
        <select onChange={handleChange}>
          <option>Select View</option>
          <option value='grid'>Grid</option>
          <option value='card'>Card</option>
        </select>
      </h2>
        <DataGridCondition  layout={layout} caption="Employee Data - Updated Aug 2025" fields={['First Name',"Last Name", "Age","Salary"]} data={[{FirstName:"koushik",lastName:"Bajpayee",Age:29,Salary:25000},{FirstName:"Jayeeta",lastName:"Barman",Age:27,Salary:35000},{FirstName:"John",lastName:"Doe",Age:32,Salary:27000}]}/>
        <h2>Product Details</h2>
        <DataGridCondition  layout="card" caption="Products in Offer" fields={['Name',"price","Ratings"]} data={[{Name:"TV" ,Price:24000, Rating:4.2},{Name:"Camera" ,Price:16000, Rating:4.8},{Name:"Mobile" ,Price:14000, Rating:3.2}]}/>
    </div>
  )
}

export default ControlledDemo
