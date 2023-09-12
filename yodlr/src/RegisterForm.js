import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";


const RegisterForm = ({onRegister})=>{

    const initial_State = {
        firstName: "",
        lastName: "",
        email: "",
        state : ""

    }

    const navigate = useNavigate();
    const [formData, setFormData] = useState(initial_State);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
          ...formData,
          [name]: value,
        }));
      };
    
      
      const handleSubmit = (e) => {
        e.preventDefault();
 
        onRegister(formData)
        setFormData(initial_State);
        navigate("/users");
      };


    return(
        <>
        <h1 class="display-4" > Register to Yodlr</h1>

        <div className="form-container">
            <form  onSubmit={handleSubmit}>

                <label className="form-label" htmlFor="firstName" > First Name</label>
                    <input
                    className="form-input"
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />

                <label className="form-label" htmlFor="lastName">Last Name</label>
                <input
                className="form-input"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                />

                <label className="form-label" htmlFor="email">Email</label>
                <input
                className="form-input"
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />

                  <label className="form-label" htmlFor="state">State</label>
                <input
                className="form-input"
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                />

                <button className="form-button">Submit</button>
            </form>
        </div>
        </>
    )
}

export default RegisterForm ;