import React, { useState, useEffect } from 'react';
import './BookIssue.css';
const BookIssue = ({ bookDetails, onBookIssueSubmit }) => {
  const [studentName, setStudentName] = useState('');
  const [bookName, setBookName] = useState('');
  const [dateOfIssue, setDateOfIssue] = useState('');
  const [lastDateOfReturn, setLastDateOfReturn] = useState('');
  const [filteredBookDetails, setFilteredBookDetails] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    // Update filteredBookDetails when bookDetails change
    setFilteredBookDetails(bookDetails);
  }, [bookDetails]);

  const handleInputChange = (e) => {
    // Update state based on input changes
    const { name, value } = e.target;
    if (name === 'studentName') {
      setStudentName(value);
    } else if (name === 'bookName') {
      setBookName(value);
    } else if (name === 'dateOfIssue') {
      setDateOfIssue(value);
    } else if (name === 'lastDateOfReturn') {
      setLastDateOfReturn(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new book issue object
    const newBookIssue = {
      studentName,
      bookName,
      dateOfIssue,
      lastDateOfReturn,
    };

    // Call the onBookIssueSubmit function with the new book issue
    onBookIssueSubmit(newBookIssue);

    // Reset the form inputs
    setStudentName('');
    setBookName('');
    setDateOfIssue('');
    setLastDateOfReturn('');
  };

  const handleSearch = (e) => {
    // Filter book details based on search value
    const searchValue = e.target.value;
    setSearchValue(searchValue);
    const filteredDetails = bookDetails.filter(
      (bookIssue) =>
        bookIssue.studentName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredBookDetails(filteredDetails);
  };

  

  const renderTableRows = () => {
    // Render table rows based on search value and filteredBookDetails
    if (searchValue) {
      return filteredBookDetails.map((bookIssue, index) => (
        <tr key={index}>
          <td>{bookIssue.studentName}</td>
          <td>{bookIssue.bookName}</td>
          <td>{bookIssue.dateOfIssue}</td>
          <td>{bookIssue.lastDateOfReturn}</td>
        </tr>
      ));
    } else {
      return bookDetails.map((bookIssue, index) => (
        <tr key={index}>
          <td>{bookIssue.studentName}</td>
          <td>{bookIssue.bookName}</td>
          <td>{bookIssue.dateOfIssue}</td>
          <td>{bookIssue.lastDateOfReturn}</td>
        </tr>
      ));
    }
  };

  return (
    <div className="page-content">
      <div className="container my-3">
        <p className="heading">Book Issue</p>
        <hr />

        <div>
          <div className="form-group row">
            <div className="col-sm-12 my-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by student's name"
                onChange={handleSearch}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Form inputs */}
            {/* Student Name */}
            <div className="form-group row">
              <label htmlFor="studentName" className="label-text">
                Student Name
              </label>
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="studentName"
                  name="studentName"
                  placeholder="Student Name"
                  value={studentName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <br />

            {/* Book Name */}
            <div className="form-group row">
              <label htmlFor="bookName" className="label-text">
                Name of Book
              </label>
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="bookName"
                  name="bookName"
                  placeholder="Book Name"
                  value={bookName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <br />

            {/* Date of Issue */}
            <div className="form-group row">
              <label htmlFor="dateOfIssue" className="label-text">
                Date of Issue
              </label>
              <div className="col-sm-12">
                <input
                  type="date"
                  className="form-control"
                  id="dateOfIssue"
                  name="dateOfIssue"
                  placeholder="Date of Issue"
                  value={dateOfIssue}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <br />

            {/* Last Date of Return */}
            <div className="form-group row">
              <label htmlFor="lastDateOfReturn" className="label-text">
                Last Date of Return
              </label>
              <div className="col-sm-12">
                <input
                  type="date"
                  className="form-control"
                  id="lastDateOfReturn"
                  name="lastDateOfReturn"
                  placeholder="Last Date of Return"
                  value={lastDateOfReturn}
                  onChange={handleInputChange}
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

          {/* Book details table */}
          <div>
            <p className="heading">Book Details</p>
            <table className="table table-striped">
              <thead>
                <tr className="table-warning">
                  <th scope="col">Student Name</th>
                  <th scope="col">Book Name</th>
                  <th scope="col">Date of Issue</th>
                  <th scope="col">Last Date of Return</th>
                </tr>
              </thead>
              <tbody>{renderTableRows()}</tbody>
            </table>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookIssue;
