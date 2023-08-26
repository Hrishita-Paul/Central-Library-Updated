import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import StudentDetails from './Pages/StudentDetails';
import BookIssue from './Pages/BookIssue';

export default function App() {
  // Define state to hold the book details as an array
  const [bookDetails, setBookDetails] = useState([]);

  // Function to add a new book to the book details
  const onBookIssueSubmit = (newBookIssue) => {
    setBookDetails((prevBookDetails) => [...prevBookDetails, newBookIssue]);
  };

  return (
    <Router>
      <Navbar bg="dark" expand="lg" variant="dark" className="fixed-top">
        <Navbar.Brand as={Link} to="/Central-Library-Updated">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/studentDetails" style={{ color: 'white' }}>
              Student Details
            </Nav.Link>
            <Nav.Link as={Link} to="/bookIssue" style={{ color: 'white' }}>
              Book Issue
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route exact path="/Central-Library-Updated" element={<HomePage />} />
        <Route exact path="/studentDetails" element={<StudentDetails />} />
        <Route
          exact
          path="/bookIssue"
          element={<BookIssue bookDetails={bookDetails} onBookIssueSubmit={onBookIssueSubmit} />}
        />
      </Routes>
    </Router>
  );
}
