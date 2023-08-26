import React from 'react';
import './HomePage.css';
import { Icon } from "@iconify/react";

const Home = () => {
  return (
    <div className="page-content">
      <h1>Welcome to Central Library, N.I.T. Silchar</h1>
   
            <img src="https://st4.depositphotos.com/1001877/37816/i/450/depositphotos_378168190-stock-photo-library-bookshelves-books-textbooks-learning.jpg"  alt="..." />
          
    
      <br />
      <div className="about">
        <h3>The Central Library, which is the heart of the Institute, was established in 1977. It provides one of the important academic services to the Institute. It is a well-equipped Library, centrally located with easy access and provides the right impetus for the intellectual growth of the students, teachers, research scholars, and others around. Presently, the Library is a part of the LTT building and has around 97,000 collections of documents.</h3>
      </div>
      <p className="info">
        General Library Timings: 9.00 a.m. to 6.00 p.m.<br/>
        Circulation Counter:- Monday to Friday, 9.30 AM - 5.30 PM<br/>
        Holidays: All Gazette Holidays and Sunday.<br/>
        Lending service is available to faculty, students, administrative, and other staff members of NITS community.
      </p>

      <footer className="footer">
        <a href="http://www.nits.ac.in"  target="_blank"><Icon icon="fluent-mdl2:website" width="40px" height="40px" /></a>
        <a href="https://www.linkedin.com/school/national-institute-of-technology-silchar"  target="_blank"> <Icon icon="ph:linkedin-logo-fill" color="#0A66C2" width="40px" height="40px" /></a>
        <a href="https://www.facebook.com/NIT.Silchar.Assam.India/" target="_blank"><Icon icon="fluent-mdl2:facebook-logo" width="40px" height="40px" color="#4267B2" /></a>
      </footer>
    </div>
  );
}

export default Home;
