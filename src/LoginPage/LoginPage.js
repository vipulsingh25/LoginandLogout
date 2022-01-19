import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './loginpage.css';
import { userActions } from '../actions';

function LoginPage() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => { 
        dispatch(userActions.logout()); 
         // eslint-disable-next-line
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            const { from } = location.state || { from: { pathname: "/" } };
            dispatch(userActions.login(username, password, from));
        }
    }

    return (
        <div>
        <div className="loginform">
        <h2>Log in</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="login"> 
                    <label className="loginlabel">Username</label><br></br>
                    <input type="text" name="username" value={username} onChange={handleChange} className={'logininput' + (submitted && !username ? ' is-invalid' : '')} />
                    {submitted && !username &&
                        <div className="invalid">Enter the username</div>
                    }
                </div>
                <div>
                    <label className="loginlabel">Password</label><br></br>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'logininput' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid">Enter the password</div>
                    }
                </div>
                <div>
                    <button className="loginbtn">
                        {loggingIn && <span></span>}
                        Log in
                    </button>
                </div>
            </form>
        </div>
        <div className="loginform1">
            <Link to="/register" className="registerbtn">Register</Link>
        </div>
        </div>
    );
}

export { LoginPage };