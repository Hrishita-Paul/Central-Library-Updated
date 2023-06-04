import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
      
        
           <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Central library</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home Page</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teacher1">Student Details Page 1</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teacher2">Book return details</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teacher3">Book Issue</Link>
              </li>
      </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
        
        
       
    )
}