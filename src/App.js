import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import StudentDetails from './Pages/StudentDetails';
import BookIssue from './Pages/BookIssue';

export default function App() {
  // Define state to hold the book details as an array
 

  return (
    <Router>
      <Navbar bg="dark" expand="lg" variant="dark" className="fixed-top">
        <Navbar.Brand >
         Central Library
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" style={{ color: 'white' }}>
              Home
            </Nav.Link>
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
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/studentDetails" element={<StudentDetails />} />
        <Route exact path="/bookIssue" element={<BookIssue/>}/>
      </Routes>
    </Router>
  );
}
