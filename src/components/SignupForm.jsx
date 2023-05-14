import React, { useState } from "react";
import Table from "./Table";
import { validation } from "../utils/helper/validation";

const SignupForm = () => {
  const [formData, setFormData] = useState([]); // To store the object data set
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("female");
  const [topic, setTopic] = useState("react");
  const [phone, setPhone] = useState("");
  const [showTable, setShowTable] = useState(false); // Conditional Rendering
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  }); // Separate error object

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Copy error object
    let errorsCopy = { ...errors };

    // Called validation
    const errorR = validation(name, value, errorsCopy);

    // Update the state
    setUsername(name === "username" ? value : username);
    setEmail(name === "email" ? value : email);
    setPassword(name === "password" ? value : password);
    setPhone(name === "phone" ? value : phone);
    setTopic(name === "topic" ? value : topic);
    setGender(name === "gender" ? value : gender);
    setErrors(errorR);
  };

  /* After Submit */
  const handleSubmit = () => {
    // Empty field checking
    if (!username || !email || !password || !phone) {
      alert("Please fill all the fields");
      return;
    }

    // check if there are any errors in errors object return boolean
    const hasErrors = Object.values(errors).some((val) => val);

    // if there are errors, don't submit the form
    if (hasErrors) return;

    // create object of all data field
    const data = {
      username,
      email,
      password,
      phone,
      topic,
      gender,
    };

    // Console submitted data
    console.log(
      `Name: ${username} 
      Email: ${email} 
      Password: ${password}
      Phone : ${phone}
      Course: ${topic} 
      Gender: ${gender}
      `
    );

    // Update the formData array with data object and clears the state
    setFormData([...formData, data]);
    setUsername("");
    setEmail("");
    setPassword("");
    setGender("female");
    setTopic("react");
    setPhone("");
    setShowTable(true);
    setErrors({
      username: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  //Toggle Component
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
              checked={gender === "female"}
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
