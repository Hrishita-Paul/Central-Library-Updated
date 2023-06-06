import React, { Component } from 'react';
import './BookDetails.css';

class BookDetails extends Component {
  renderBookIssueRow = (bookIssue, index) => {
    return (
      <tr key={index}>
        <td>{bookIssue.studentName}</td>
        <td>{bookIssue.bookName}</td>
        <td>{bookIssue.dateOfIssue}</td>
        <td>{bookIssue.lastDateOfReturn}</td>
      </tr>
    );
  };

  render() {
    return (
      <div className="page-content">
        <div className="container my-3">
          <p className="heading">Book Details</p>
          <hr />

          <div id="table">
            <table className="table table-striped">
              <thead>
                <tr className="table-warning">
                  <th scope="col">Student Name</th>
                  <th scope="col">Book Name</th>
                  <th scope="col">Date of Issue</th>
                  <th scope="col">Last Date of Return</th>
                </tr>
              </thead>
              <tbody>
                {this.props.bookDetails.map((bookIssue, index) =>
                  this.renderBookIssueRow(bookIssue, index)
                )}
              </tbody>
          </table>
        </div>
      </div>
      </div >
    );
  }
}

export default BookDetails;
