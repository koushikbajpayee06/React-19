import React from 'react'
import { useFormik } from 'formik';

const FormikFormValidations = () => {

    function ValidateUser(user){
        var errors = {
            UserName:'',
            Mobile:'',
            City:''
        };
        if(user.UserName.length===0){
            errors.UserName ="User Name Required";
        }else{
            if(user.UserName.length<4){
                errors.UserName = 'Name too short';
            }
        }
        if(user.Mobile.length===0){
            errors.Mobile="Mobile Required";
        }else{
            if(user.Mobile.match(/\+91\d{10}/)){
                errors.Mobile = '';
            }else{
                errors.Mobile="Invalid Mobile"
            }
        }
        if(user.City==='-1'){
            errors.City="Please select your city";

        }

        return errors;

    }

    const formik = useFormik({
        initialValues:{
            UserName:'',
            Mobile:'',
            City:''
        }, 
        validate: ValidateUser,
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
                <dd className='text-danger'>{formik.errors.UserName}</dd>
                <dt>Mobile</dt>
                <dd><input type="text" name='Mobile' onChange={formik.handleChange} /></dd>
                <dd className='text-danger'>{formik.errors.Mobile}</dd>
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
                <dd className='text-danger'>{formik.errors.City}</dd>
            </dl>
            <button type='submit'>Register</button>
        </form>
        </div>
    )
}

export default FormikFormValidations
