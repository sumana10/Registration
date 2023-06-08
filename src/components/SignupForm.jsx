import React, { useState } from "react";
import Table from "./Table";
import { validation } from "../utils/helper/validation";

const SignupForm = () => {

  const [formData, setFormData] = useState([]);

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    gender: "female",
    topic: "react",
    phone: "",
  })

  const [showTable, setShowTable] = useState(false);
  const { username, email, password, gender, topic, phone } = values;

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  })

  const handleChange = (event) => {

    const { name, value } = event.target;

    setValues((prevValues) =>({
      ...prevValues,
      [name]: value,
    }));

    let errorsCopy = { ...errors };
  
    const errorR = validation(name, value, errorsCopy);

    setErrors(errorR);
  };

  const handleSubmit = () => {

    if(!username || !email || !password || !phone){
      alert("Please fill all the fields");
      return;
    }

    const hasErrors = Object.values(errors).some((val) => val);

    if(hasErrors) return;

  
    const data = {
      username,
      email, 
      password,
      phone,
      topic, 
      gender,
    }

    console.log(
      `Name: ${username} 
      Email: ${email} 
      Password: ${password}
      Phone : ${phone}
      Course: ${topic} 
      Gender: ${gender}
      `
    );

    setFormData((prevFormData)=> [...prevFormData, data]);
    setShowTable(true);
    setValues({
      ...values,
      username: "",
      email: "",
      password: "",
      gender: "female",
      topic: "react",
      phone: "",
    })
    setErrors({
      ...errors,
      username: "",
      email: "",
      password: "",
      phone: "",
    });
  };


  const handleGoBack = () => setShowTable(!showTable);

  if (!showTable) {
    return (
      <div className="form">
        <div>
          <label htmlFor="name">Name </label>
          <input
            type="text"
            name="username"
            placeholder="Name"
            value={username}
            onChange={handleChange}
          />
          <small>{errors.username}</small>
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
          <small>{errors.email}</small>
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
          <small>{errors.password}</small>
        </div>
        <div>
          <label htmlFor="phone">Phone </label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={phone}
            onChange={handleChange}
          />
          <small>{errors.phone}</small>
        </div>
        <div style={{ display: "flex", marginBottom: "5px" }}>
          <label htmlFor="gender">Gender</label>
          <label htmlFor="male">
            <input
              value="male"
              name="gender"
              type="radio"
              checked={gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              value="female"
              name="gender"
              type="radio"
              checked = {gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <div>
          <label htmlFor="course">Course</label>
          <select value={topic} name="topic" onChange={handleChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }

  return <Table formData={formData} handleGoBack={handleGoBack} />;
};

export default SignupForm;
