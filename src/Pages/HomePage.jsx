import React from 'react';
import './HomePage.css';
import { Icon } from "@iconify/react";

const Home = () => {
  return (
    <div className="page-content">
      <h1>Welcome to Central Library, N.I.T. Silchar</h1>
   
            <img src="https://scontent.fshl1-1.fna.fbcdn.net/v/t1.6435-9/141938641_2913827258858303_5917663225443748294_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FtykDCL1NDkAX9kOFup&_nc_ht=scontent.fshl1-1.fna&oh=00_AfA2If5euwx5PoNIozE_JWNdKDVI918hNMwFt191_sfbQQ&oe=649FC844"  alt="..." />
          
    
      <br />
      <div className="about">
        <h3>The Central Library, which is the heart of the Institute, was established in 1977. It provides one of the important academic services to the Institute. It is a well-equipped Library, centrally located with easy access and provides the right impetus for the intellectual growth of the students, teachers, research scholars, and others around. Presently, the Library is a part of the LTT building and has around 97,000 collections of documents of both print and non-print materials.</h3>
      </div>
      <p className="info">
        General Library Timings: 9.00 a.m. to 6.00 p.m.<br/>
        Circulation Counter<br/>
        Monday to Friday, 9.30 AM - 5.30 PM<br/>
        Holidays: All Gazette Holidays and Sunday.<br/>
        Lending service:<br/>
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
