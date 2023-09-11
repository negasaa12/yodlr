import React from "react";
import { useEffect, useState } from 'react';


const UserList = ({allUsers})=>{

    const [users, setUsers] = useState(allUsers);
    const [error, setError] = useState(null);


   
    // const fetchUsers = async () => {
    //     try {
    //       const response = await fetch("http://localhost:3000/users");
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
          
    //       const data = await response.json();
    //       setUsers(data);
    //     } catch (error) {
    //       console.error('Error fetching users:', error);
    //     }
    //   };
    
    //   console.log(users)
    // useEffect(() => {
    //   fetchUsers();
    // }, []);
  
    return (
      <div >
        <h1>Users</h1>

        {error ? (
          <p>Error: {error.message}</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.email} {user.firstName}, {user.lastName}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }

export default UserList;