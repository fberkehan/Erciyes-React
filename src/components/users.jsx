import React, { useEffect, useState, useRef } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const selectRef = useRef(null); // Ref oluşturma

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    const handleSelectChange = (e) => {
        const id = e.target.value;
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                document.getElementById('title').innerHTML = data.title;
                document.getElementById('body').innerHTML = data.body;
            });
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>Users</h1>
            <select ref={selectRef} name="users" id='users' onChange={handleSelectChange}>
                <option value="">User Seçiniz</option>
                {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
            </select>
            <p id='title'></p>
            <p id='body'></p>
        </div>
    );
}

export default Users;
