import React, { useState } from 'react'

const FormDemo = () => {
    const [userDetails, setUserDetails] = useState({
        UserName:null,
        Mobile:null,
        City:null
    })

    function handleNameChange(e){
        setUserDetails({
            UserName: e.target.value,
            Mobile: userDetails.Mobile,
            City: userDetails.City
        })
    }
    function handleMobileChange(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Mobile: e.target.value,
            City: userDetails.Mobile
        })
    }
    function handleCityChange(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Mobile: userDetails.Mobile,
            City: e.target.value
        })
    }
    
    function handleSubmit(e){
        e.preventDefault();
        alert("form Submitted");
        console.log(userDetails);
    }

    return (
        <div className='container-fluid'>
        <h2>Register User</h2>
        <form onSubmit={handleSubmit}>
            <dl>
                <dt>User Name</dt>
                <dd><input type='text' name='UserName' onChange={handleNameChange} ></input></dd>
                <dt>Mobile</dt>
                <dd><input type="text" name='Mobile' onChange={handleMobileChange}/></dd>
                <dt>City</dt>
                <dd>
                    <select name='City' onChange={handleCityChange}>
                        <option>Select City</option>
                        <option>Kolkata</option>
                        <option>Bankura</option>
                        <option>Berhampore</option>
                        <option>Balurghat</option>
                    </select>
                </dd>
            </dl>
            <button type='submit'>Register</button>
        </form>
        </div>
    )
}

export default FormDemo
