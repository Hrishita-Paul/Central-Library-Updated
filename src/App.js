import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import StudentDetails from "./Pages/StudentDetails";
import BookDetails from "./Pages/BookDetails";
import BookIssue from "./Pages/BookIssue";

export default function App() {
  // Define state to hold the book details as an array
  const [bookDetails, setBookDetails] = useState([]);

  // Function to add a new book to the book details
  const addBook = (newBook) => {
    setBookDetails([...bookDetails, newBook]);
  };
  return (

    <Router>
      <Navbar bg="dark" expand="lg" variant="dark" className="fixed-top">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/studentDetails" style={{ color: "white" }}>
              Student Details
            </Nav.Link>
            <Nav.Link href="/bookDetails" style={{ color: "white" }}>
              Book Details
            </Nav.Link>
            <Nav.Link href="/bookIssue" style={{ color: "white" }}>
              Book Issue
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/studentDetails" element={<StudentDetails/>} />
        <Route
          exact
          path="/bookDetails"
          element={<BookDetails bookDetails={bookDetails} />}
        />
        <Route
          exact
          path="/bookIssue"
          element={<BookIssue onBookIssueSubmit={addBook} />}
        />
      </Routes>
    </Router>
  );
}
