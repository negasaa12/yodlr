import React from "react";
import { useEffect, useState } from 'react';
import User from "./User";
import "./UsersList.css"
const UserList = ({allUsers})=>{

    const [users, setUsers] = useState(allUsers);

    
    useEffect(()=>{
      setUsers(allUsers)
    }, [allUsers])
  
    return (
      <>
      <h1 class="display-4">Users</h1>
      <div className="user-list-container">
        
  
        {users.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {users.map((user) => (
              <div className="user-item" key={user.id}>
                <User firstName={user.firstName} lastName={user.lastName} email={user.email} />
              </div>
            ))}
          </ul>
        )}
      </div>
      </>
    );
  };
  

export default UserList;