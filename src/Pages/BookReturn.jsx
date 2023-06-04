import React, { useState } from 'react';
import './BookReturn.css';

const BookReturn= () => {
  const [selectedBooks, setSelectedBooks] = useState([]);

  const handleCheckboxChange = (e) => {
    const book = e.target.value;
    if (e.target.checked) {
      setSelectedBooks((prevSelectedBooks) => [...prevSelectedBooks, book]);
    } else {
      setSelectedBooks((prevSelectedBooks) =>
        prevSelectedBooks.filter((selectedBook) => selectedBook !== book)
      );
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const output = document.getElementById('output-el');

    if (selectedBooks.length === 1) {
      output.textContent = 'Can issue 1 book';
    } else if (selectedBooks.length === 2) {
      output.textContent = 'Can issue 2 books';
    } else if (selectedBooks.length === 3) {
      output.textContent = 'Can issue 3 books';
    } else if (selectedBooks.length === 4) {
      output.textContent = 'Can issue 4 books';
    }
  };

  return (
    <div>
      <p id="heading">Book Return Details</p>
      <hr />
      <h2 id="booklist-el">Booklist</h2>
      <div className="wholecontainer">
        <div className="container">
          <div className="container-item badge text-bg-secondary my-5">
            <h3>BookName</h3>
          </div>
          <div className="alert alert-warning" role="alert">
            B.S. Grewal
          </div>
          <div className="alert alert-info" role="alert">
            Mechanical Engineering
          </div>
          <div className="alert alert-warning" role="alert">
            N.D. Bhatt
          </div>
          <div className="alert alert-info" role="alert">
            Electrical Engineering
          </div>
        </div>
        <div className="container">
          <div className="container-item badge text-bg-secondary my-5">
            <h3>Date of Issue</h3>
          </div>
          <div className="alert alert-warning" role="alert">
            4th June 2022
          </div>
          <div className="alert alert-info" role="alert">
            4th June 2022
          </div>
          <div className="alert alert-warning" role="alert">
            4th June 2022
          </div>
          <div className="alert alert-info" role="alert">
            4th June 2022
          </div>
        </div>
        <div className="container">
          <div className="container-item badge text-bg-secondary my-5">
            <h3>Last date of return</h3>
          </div>
          <div className="alert alert-warning" role="alert">
            31st August 2022
          </div>
          <div className="alert alert-info" role="alert">
            31st August 2022
          </div>
          <div className="alert alert-warning" role="alert">
            31st August 2022
          </div>
          <div className="alert alert-info" role="alert">
            31st August 2022
          </div>
        </div>
        <div className="container">
          <div className="container-item badge text-bg-secondary my-3">
            <h3>Returned</h3>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="FirstBook"
              id="FirstBook-el"
              value="FirstBook"
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="FirstBook">
              First Book
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="SecondBook"
              id="SecondBook-el"
              value="SecondBook"
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="SecondBook">
              Second Book
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="ThirdBook"
              id="ThirdBook-el"
              value="ThirdBook"
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="ThirdBook">
              Third Book
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="FourthBook"
              id="FourthBook-el"
              value="FourthBook"
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="FourthBook">
              Fourth Book
            </label>
          </div>
        </div>
      </div>
      <button className="btn btn-primary mx-2 my-4" id="submit-el" onClick={handleFormSubmit}>
        Submit
      </button>
      
        <p id="output-el"></p>
      
    </div>
  );
};

export default BookReturn;
