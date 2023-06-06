import React, { Component } from 'react';
import './BookIssue.css';

class BookIssue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: '',
      bookName: '',
      dateOfIssue: '',
      lastDateOfReturn: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { studentName, bookName, dateOfIssue, lastDateOfReturn } = this.state;
  
    // Create a new book issue object
    const newBookIssue = {
      studentName,
      bookName,
      dateOfIssue,
      lastDateOfReturn,
    };
  
    // Call the function passed from the parent component to handle book issue submission
    this.props.onBookIssueSubmit(newBookIssue);
  
    // Clear the form fields
    this.setState({
      studentName: "",
      bookName: "",
      dateOfIssue: "",
      lastDateOfReturn: "",
    });
  };
  

  render() {
    const { studentName, bookName, dateOfIssue, lastDateOfReturn } = this.state;

    return (
      <div className="page-content">
        <div className="container my-3">
          <p className="heading">Book Issue</p>
          <hr />

          {/* Form section */}
          <form onSubmit={this.handleSubmit}>
            {/* Student Name input */}
            <div className="form-group row">
              <label htmlFor="studentName" className="label-text">Student Name</label>
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="studentName"
                  name="studentName"
                  placeholder="Student Name"
                  value={studentName}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <br />

            {/* Book Name input */}
            <div className="form-group row">
              <label htmlFor="bookName" className="label-text">Name of Book</label>
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="bookName"
                  name="bookName"
                  placeholder="Book Name"
                  value={bookName}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <br />

            {/* Date of Issue input */}
            <div className="form-group row">
              <label htmlFor="dateOfIssue" className="label-text">Date of Issue</label>
              <div className="col-sm-12">
                <input
                  type="date"
                  className="form-control"
                  id="dateOfIssue"
                  name="dateOfIssue"
                  placeholder="Date of Issue"
                  value={dateOfIssue}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <br />

            {/* Last Date of Return input */}
            <div className="form-group row">
              <label htmlFor="lastDateOfReturn" className="label-text">Last Date of Return</label>
              <div className="col-sm-12">
                <input
                  type="date"
                  className="form-control"
                  id="lastDateOfReturn"
                  name="lastDateOfReturn"
                  placeholder="Last Date of Return"
                  value={lastDateOfReturn}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <br />

            {/* Submit button */}
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Issue Book
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default BookIssue;
