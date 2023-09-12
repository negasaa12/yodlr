import React from "react";
import { useEffect, useState } from 'react';
import User from "./User";

const UserList = ({allUsers})=>{

    const [users, setUsers] = useState(allUsers);
    const [error, setError] = useState(null);
    console.log(users)
    
    useEffect(()=>{
      setUsers(allUsers)
    }, [allUsers])
  
    return (
      <div >
        <h1>Users</h1>

        {users.length === 0? (
          <p>Loading...</p>
        ) : (
          <ul>
            {users.map((user) => (
             <User firstName={user.firstName} lastName={user.lastName} email={user.email}/>
            ))}
          </ul>
        )}
      </div>
    );
  }

export default UserList;