import React from 'react'
import useCapcha from '../hooks/useCapcha'
import {useFetch} from '../hooks/useFetch'

import './login.css'

const Login = () => {
    const code = useCapcha();
    const categories = useFetch('https://fakestoreapi.com/products/categories')

    
    return (
        <div className="d-flex justify-content-center">
            <form className="login-form mt-4 rounded-2">
                <h2 className="bi bi-person-circle"> User Login</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className="form-control"/></dd>

                    <dt>Password</dt>
                    <dd><input type="password" className="form-control"/></dd>

                    <dt>Verify Code</dt>
                    <dd><div className="captcha-box">{code}</div></dd>
                </dl>

                <button className="btn btn-primary login-btn">Login</button>
                <ul>
                    {
                        categories.map(catagory=><li key={catagory}>{catagory}</li>)
                    }
                </ul>
            </form>
        </div>
    );
};

export default Login;
