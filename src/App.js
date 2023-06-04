import React,{useState,useEffect} from "react";

import { Navbar,Nav} from 'react-bootstrap';

import HomePage from "./Pages/HomePage";
import Teacher1 from "./Pages/StudentDetails";
import Teacher2 from "./Pages/BookReturn";
import Teacher3 from "./Pages/BookIssue";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function App() {

  
 

  return (

  
    <Router>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/teacher1" style={{ color: "white" }}>Student Details</Nav.Link>
          <Nav.Link href="/teacher2" style={{ color: "white" }}>Book return details</Nav.Link>
          <Nav.Link href="/teacher3" style={{ color: "white" }}>Book issue</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/teacher1" element={<Teacher1 />} />
      <Route exact path="/teacher2" element={<Teacher2 />} />
      <Route exact path="/teacher3" element={<Teacher3 />} />
    </Routes>
  </Router>


  );
}


