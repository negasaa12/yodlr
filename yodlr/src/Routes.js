import React from "react";
import { Route, Routes, NavLink , useNavigate} from "react-router-dom";
import UserList from "./UsersList";
import Home from "./Home";
import RegisterForm from "./RegisterForm";
import axios from 'axios';
import {useState, useEffect} from "react";

const RoutePaths = () =>{
    
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
      
     
    useEffect(() => {
      fetchUsers();
    }, []);
    async function handleUserRegistration(formData) {
      try {
        // Send a POST request to your backend
        const response = await axios.post('http://localhost:3000/users', formData);
        
        // Update the user list after a successful registration
        fetchUsers();
        
        // Handle the response as needed
        setUsers((prevUsers) => [...prevUsers, response.data]);
      } catch (error) {
        // Handle any errors that occurred during the request
        console.error(error);
        setUsers({ registrationResult: 'Registration failed' });
      }
    }
    
    
    return (
        <>
        <nav>
            <ul>
                <li>
                    <NavLink className="nav-NavLink" to="/"> Home</NavLink>
                    <NavLink to="/users" > Admin</NavLink>

                    <NavLink className="nav-NavLink" exact to="/register"> Register</NavLink>
                </li>
            </ul>
        </nav>


        <Routes>
            <Route exact path="/" element={<Home/>}> </Route>
            <Route exact path="/users" element={<UserList getUsers={fetchUsers}allUsers={users}/>}></Route>
           
            <Route exact path="/register" element={<RegisterForm onRegister={handleUserRegistration}/>} ></Route>
       </Routes>
        </>
    )
}

export  default RoutePaths;