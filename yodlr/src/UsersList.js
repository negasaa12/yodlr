import React from "react";
import { useEffect, useState } from 'react';


const UserList = ()=>{

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);


    const fetchUsers = async () => {
        try {
          const response = await fetch("http://localhost:3000/users");
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
    
      console.log(users)
    useEffect(() => {
      fetchUsers();
    }, []);
  
    return (
      <div className="App">
        <h1>Users</h1>
        {error ? (
          <p>Error: {error.message}</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.email}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }

export default UserList;