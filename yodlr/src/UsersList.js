import React from "react";
import { useEffect, useState } from 'react';


const UserList = ({allUsers})=>{

    const [users, setUsers] = useState(allUsers);
    const [error, setError] = useState(null);


  
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