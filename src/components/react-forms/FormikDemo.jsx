import { useFormik } from 'formik';
import React from 'react'

const FormikDemo = () => {

    const formik = useFormik({
        initialValues:{
            UserName:null,
            Mobile:null,
            City:null
        }, 
        onSubmit:(user)=>{
            console.log(user);
        }
    })
    return (
        <div className='container-fluid'>
        <h2>Register User</h2>
        <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>User Name</dt>
                <dd><input type='text' name='UserName' onChange={formik.handleChange}></input></dd>
                <dt>Mobile</dt>
                <dd><input type="text" name='Mobile' onChange={formik.handleChange} /></dd>
                <dt>City</dt>
                <dd>
                    <select name='City' onChange={formik.handleChange}>
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

export default FormikDemo;
