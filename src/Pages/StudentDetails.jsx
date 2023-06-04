import React, { useState } from 'react';
import './StudentDetails.css';

const StudentDetails = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const students = [
    { id: 101, name: 'Hrishita Paul' },
    { id: 102, name: 'Armaan Chaudhary' },
    { id: 103, name: 'Praptipal Kaur' },
    { id: 104, name: 'Prince Koshti' },
    { id: 105, name: 'Koushik Chakraborty' },
  ];

  const filteredStudents = students.filter((student) => {
    return student.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className="container">
      <p className="heading">Students' Details</p>
      <input
        type="text"
        className="search-bar"
        placeholder="Search student..."
        value={searchValue}
        onChange={handleSearch}
      />
      <div className="student-list">
        {filteredStudents.map((student) => (
          <div className="student-card" key={student.id}>
            <p className="student-name">{student.name}</p>
            <p className="student-id">ID: {student.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDetails;
