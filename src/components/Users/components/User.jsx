import React from 'react';
import './User.css';

function User({ name, email, phone }) {
    return (
        <li className='user-card'>
            <span>Name: {name}</span>
            <span>Email: {email}</span>
            <span>Phone: {phone}</span>
        </li>
    );
}

export default User;
