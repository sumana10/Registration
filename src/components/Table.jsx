import React, { Component } from "react";

class Table extends Component {
  render() {
    const { formData, handleGoBack } = this.props;
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Topic</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.gender}</td>
                <td>{data.topic}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleGoBack}>Go Back</button>
      </>
    );
  }
}

export default Table;