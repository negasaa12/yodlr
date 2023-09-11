import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = ()=>{

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
        const { name, price, description, category } = formData;
        // additem(name, price, description, category);
        setFormData(initial_State);
        navigate(`/${category}`);
      };


    return(
        <>
        <h1> Sign Up</h1>

        <div>
            <form>
                <label htmlFor="firstName" > First Name</label>
                    <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                />
                  <label htmlFor="email">Email</label>
                <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
                  <label htmlFor="state">State</label>
                <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
        </>
    )
}

export default RegisterForm ;