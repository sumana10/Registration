import { Component } from "react";
import "../myApp.css";

//Onchange validation
//import { validation } from "../utils/helper";

import {validation} from "../utils/helper/validation";

//Nested Component
import Table from "./Table";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: [], //To store the object data set
      username: "",
      email: "",
      password: "",
      gender: "female",
      topic: "react",
      phone: "",
      showTable: false, //Conditional Rendering
      //Seperate error object
      errors: {
        username: "",
        email: "",
        password: "",
        phone: "",
      },
    };
  }

  /* On change */
  handleChange = (e) => {
    const { name, value } = e.target;

    //Copy error object
    let errors = { ...this.state.errors };

    //Called validation
    const errorR = validation(name, value, errors);

    //Update the state
    this.setState({
      [name]: value,
      errors: errorR,
    });
  };

  /* After Submit */
  handleSubmit = () => {
    //destructuring state object
    const {
      username,
      email,
      password,
      phone,
      topic,
      gender,
      errors,
      formData,
    } = this.state;

    //Empty field checking
    if (!username || !email || !password || !phone) {
      alert("Please fill all the field");
      return;
    }

    // check if there are any errors in errors object return boolean
    const hasErrors = Object.values(errors).some((val) => val);

    //if there are errors, don't submit the form
    if (hasErrors) return;

    //create object of all data field
    const data = {
      username,
      email,
      password,
      phone,
      topic,
      gender,
    };
    //Console submitted data
    console.log(
      `Name: ${username} 
      Email: ${email} 
      Password: ${password}
      Phone : ${phone}
      Course: ${topic} 
      Gender: ${gender}
      `
    );

    //Update the formData array with data object and clears the state

    this.setState({
      formData: [...formData, data],
      username: "",
      email: "",
      password: "",
      gender: "female",
      topic: "react",
      phone: "",
      showTable: true,
      errors: {
        username: "",
        email: "",
        password: "",
        phone: "",
      },
    });

    //  event.preventDefault();
  };

  //Toggle Component
  handleGoBack = () => {
    this.setState({ showTable: false });
  };

  render() {
    //destructure state object
    const {
      username,
      topic,
      email,
      password,
      gender,
      phone,
      errors,
      formData,
      showTable,
    } = this.state;

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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
                checked={this.state.gender === "male"}
                onChange={this.handleChange}
              />
              Male
            </label>
            <label htmlFor="female">
              <input
                value="female"
                name="gender"
                type="radio"
                checked={this.state.gender === "female"}
                onChange={this.handleChange}
              />
              Female
            </label>
          </div>
          <div>
            <label htmlFor="course">Course</label>
            <select value={topic} name="topic" onChange={this.handleChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <div>
            <button type="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      );
    }
    return <Table formData={formData} handleGoBack={this.handleGoBack} />;
  }
}

export default Registration;
