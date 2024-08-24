import React, { useState, useEffect } from 'react';
import './BookIssue.css';
const BookIssue = () => {
  const getBooksFromStorage = () => {
    const books = localStorage.getItem("books");

    try {
      return books ? JSON.parse(books) : [];
    } catch (error) {
      console.error('Error parsing books from localStorage', error);
      return [];
    }
  }
  const [studentName, setStudentName] = useState('');
  const [bookName, setBookName] = useState('');
  const [dateOfIssue, setDateOfIssue] = useState('');
  const [lastDateOfReturn, setLastDateOfReturn] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [bookDetails, setBookDetails] = useState(getBooksFromStorage());

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(bookDetails));
  }, [bookDetails]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // Function to add a new book to the book details
  const onBookIssueSubmit = (newBookIssue) => {
    setBookDetails((prevBookDetails) => [...prevBookDetails, newBookIssue]);
  };

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
  const handleDelete=(index)=>{
    const bookDetailsCopy=bookDetails.slice();
    bookDetailsCopy.splice(index,1);
    setBookDetails(bookDetailsCopy);
  }
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
    setSearchValue(e.target.value);
  };

  const filteredBookDetails = bookDetails.filter(
    (bookIssue) =>
      bookIssue.studentName.toLowerCase().includes(searchValue.toLowerCase())
  );



  return (
    <div className="page-content-3">
      <div className="container my-3">
        <p className="heading">Book Issue</p>
        <div>
          <div className=" row search-bar">
           
              <input
                type="text"
                className="form-control "
                placeholder="Search by student's name"
                onChange={handleSearch}
              />
            
          </div>

          <form onSubmit={handleSubmit} className="form">
            {/* Form inputs */}
            {/* Student Name */}
            <div className="form-group row">
              <label htmlFor="studentName" className="label-text">
                Student Name
              </label>
              
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
            <br />

            {/* Book Name */}
            <div className="form-group row">
              <label htmlFor="bookName" className="label-text">
                Name of Book
              </label>
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
            <br />

            {/* Date of Issue */}
            <div className="form-group row">
              <label htmlFor="dateOfIssue" className="label-text">
                Date of Issue
              </label>
             
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
            <br />

            {/* Last Date of Return */}
            <div className="form-group row">
              <label htmlFor="lastDateOfReturn" className="label-text">
                Last Date of Return
              </label>
            
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
            <br />

            {/* Submit button */}
            <div className=" row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary btn-1">
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
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>{filteredBookDetails.map((bookIssue, index) => (
                <tr key={index}>
                  <td>{bookIssue.studentName}</td>
                  <td>{bookIssue.bookName}</td>
                  <td>{bookIssue.dateOfIssue}</td>
                  <td>{bookIssue.lastDateOfReturn}</td>
                  <td><button onClick={()=>handleDelete(index)} className="delete-1">X</button></td>
                </tr>
              ))}</tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookIssue;
