import React from "react";
import { Route, Routes, NavLink , useNavigate} from "react-router-dom";
import UserList from "./UsersList";
import RegisterForm from "./RegisterForm";
const RoutePaths = ()=>{
    
    
    
    
    return (
        <>
        <nav>
            <ul>
                <li>
                    <NavLink className="nav-NavLink"  to="/"> Home</NavLink>
                    <NavLink to="/admin" exact="true"> Admin</NavLink>

                    <NavLink className="nav-NavLink" exact to="/register"> Register</NavLink>
                </li>
            </ul>
        </nav>


        <Routes>
        <Route exact path="/admin" element={<UserList/>}></Route>
        <Route exact path="/register"  element={<RegisterForm/>} ></Route>
       </Routes>
        </>
    )
}

export  default RoutePaths;