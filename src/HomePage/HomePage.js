import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Homepage.css';
import { userActions } from '../actions';

function HomePage() {
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <div className="homeform">
              <h1 className="details">User details</h1>
              <h1>Full Name:- {user.firstName + ' ' + user.lastName}</h1>
              <h1 key={user.id}> Username:- {user.username}</h1>
            </div>
            <div className="homeform1">
                <Link to="/login" className="homelink">Logout</Link>
            </div>
        </div>
    );
}

export { HomePage }