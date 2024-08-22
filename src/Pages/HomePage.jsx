import React, { useEffect } from 'react';
import './HomePage.css';


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page-content">
      <h1>Welcome to Central Library, N.I.T. Silchar</h1>
      <img src="https://st4.depositphotos.com/1001877/37816/i/450/depositphotos_378168190-stock-photo-library-bookshelves-books-textbooks-learning.jpg" alt="..." />
      <br />
      <div className="about">
        <h3>The Central Library, which is the heart of the Institute, was established in 1977. It provides one of the important academic services to the Institute. It is a well-equipped Library, centrally located with easy access and provides the right impetus for the intellectual growth of the students, teachers, research scholars, and others around. Presently, the Library is a part of the LTT building and has around 97,000 collections of documents.</h3>
      </div>
      <p className="info">
        General Library Timings: 9.00 a.m. to 6.00 p.m.<br />
        Circulation Counter:- Monday to Friday, 9.30 AM - 5.30 PM<br />
        Holidays: All Gazette Holidays and Sunday.<br />
        Lending service is available to faculty, students, administrative, and other staff members of NITS community.
      </p>

    </div>
  );
}

export default Home;
