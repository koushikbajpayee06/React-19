import React from 'react'
import DataGrid from '../../controlled-components/DataGrid'

const ControlledDemo = () => {
  return (
    <div className='container-fluid'>
      <h2>Employee Details</h2>
        <DataGrid caption="Employee Data - Updated Aug 2025" fields={['First Name',"Last Name", "Age","Salary"]} data={[{FirstName:"koushik",lastName:"Bajpayee",Age:29,Salary:25000},{FirstName:"Jayeeta",lastName:"Barman",Age:27,Salary:35000},{FirstName:"John",lastName:"Doe",Age:32,Salary:27000}]}/>
    </div>
  )
}

export default ControlledDemo
