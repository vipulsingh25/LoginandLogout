import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './register.css';
import { userActions } from '../actions';

function RegisterPage() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.logout());
         // eslint-disable-next-line
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <dvi>
                    <div className="registerform">
            <h2>Register here</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="register">
                    <label className='registerlabel'>Enter the First Name</label><br></br>
                    <input type="text" name="firstName" value={user.firstName} onChange={handleChange} className={'registerinput' + (submitted && !user.firstName ? ' is-invalid' : '')} />
                    {submitted && !user.firstName &&
                        <div className="invalid-feedback">First Name is required</div>
                    }
                </div>
                <div className="register">
                    <label className='registerlabel'>Enter the Last Name</label><br></br>
                    <input type="text" name="lastName" value={user.lastName} onChange={handleChange} className={'registerinput' + (submitted && !user.lastName ? ' is-invalid' : '')} />
                    {submitted && !user.lastName &&
                        <div className="invalid-feedback">Last Name is required</div>
                    }
                </div>
                <div className="register">
                    <label className='registerlabel'>Enter Username</label><br></br>
                    <input type="text" name="username" value={user.username} onChange={handleChange} className={'registerinput' + (submitted && !user.username ? ' is-invalid' : '')} />
                    {submitted && !user.username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="register">
                    <label className='registerlabel'>Enter Password</label><br></br>
                    <input type="password" name="password" value={user.password} onChange={handleChange} className={'registerinput' + (submitted && !user.password ? ' is-invalid' : '')} />
                    {submitted && !user.password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="btngroup">
                    <button className="registerbtn1">
                        {registering && <span></span>}
                        Register
                    </button>
                </div>
            </form>
        </div>
        <div className="registerform1">
            <Link to="/login" className="registerlink">Cancel</Link>
        </div>
        </dvi>
    );
}

export { RegisterPage }