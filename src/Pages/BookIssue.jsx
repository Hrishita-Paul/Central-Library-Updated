import React, { useState, useEffect } from 'react';

import './BookIssue.css';

const BookIssue = ({ onBookIssueSubmit }) => {
  const [studentName, setStudentName] = useState('');
  const [bookName, setBookName] = useState('');
  const [dateOfIssue, setDateOfIssue] = useState('');
  const [lastDateOfReturn, setLastDateOfReturn] = useState('');
  const [filteredBookDetails, setFilteredBookDetails] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const storedBookDetails = localStorage.getItem('bookDetails');
    if (storedBookDetails) {
      setFilteredBookDetails(JSON.parse(storedBookDetails));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bookDetails', JSON.stringify(filteredBookDetails));
  }, [filteredBookDetails]);

  const handleInputChange = (e) => {
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

    const newBookIssue = {
      studentName,
      bookName,
      dateOfIssue,
      lastDateOfReturn,
    };

    onBookIssueSubmit(newBookIssue);

    setFilteredBookDetails((prevFilteredDetails) => [...prevFilteredDetails, newBookIssue]);

    setStudentName('');
    setBookName('');
    setDateOfIssue('');
    setLastDateOfReturn('');
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
    const filteredDetails = filteredBookDetails.filter((bookIssue) =>
      bookIssue.studentName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredBookDetails(filteredDetails);
  };

  const renderTableRows = () => {
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
      return filteredBookDetails.map((bookIssue, index) => (
        <tr key={index}>
          <td>{bookIssue.studentName}</td>
          <td>{bookIssue.bookName}</td>
          <td>{bookIssue.dateOfIssue}</td>
          <td>{bookIssue.lastDateOfReturn}</td>
        </tr>
      ));
    }
  };

  const handleClearAll = () => {
    localStorage.removeItem('bookDetails');
    setFilteredBookDetails([]);
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
                placeholder="Search by student name"
                onChange={handleSearch}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
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

            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Issue Book
                </button>
              </div>
            </div>
          </form>

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
            <button className="btn btn-danger" onClick={handleClearAll}>
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookIssue;
