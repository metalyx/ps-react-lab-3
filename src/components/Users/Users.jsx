import React, { useEffect, useState } from 'react';
import User from './components/User';
import './Users.css';

function Users() {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const users = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            )
                .then((response) => response.json())
                .catch(() => setIsLoading(false));

            setUsers(users);
            setIsLoading(false);
        })();
    }, []);

    return (
        <div className='users-container'>
            {!users && !isLoading && <p>Error in fetch users...</p>}
            {isLoading && <p>Loading users...</p>}
            {!isLoading &&
                users &&
                users.map((user) => (
                    <User
                        key={user.id}
                        name={user.name}
                        email={user.email}
                        phone={user.phone}
                    />
                ))}
        </div>
    );
}

export default Users;
