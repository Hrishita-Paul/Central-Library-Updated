import React, { useState, useEffect } from 'react';
import './StudentDetails.css';

const getStudentsFromStorage = () => {
  const students = localStorage.getItem('students');
  try {
    return students ? JSON.parse(students) : [];
  } catch (error) {
    console.error('Error parsing students from localStorage', error);
    return [];
  }
};

const saveStudentsToStorage = (students) => {
  localStorage.setItem('students', JSON.stringify(students));
};

const StudentDetails = () => {
  const [students, setStudents] = useState(getStudentsFromStorage());
  const [searchValue, setSearchValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentId, setNewStudentId] = useState('');

  useEffect(() => {
    saveStudentsToStorage(students);
  }, [students]);
  useEffect(()=>{
    window.scrollTo(0,0);
  });

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleAddStudent = () => {
    const newStudent = { id: parseInt(newStudentId), name: newStudentName };
    setStudents([...students, newStudent]);
    setShowModal(false); 
    setNewStudentName('');
    setNewStudentId('');
  };

  
  const deleteEntry = (id) => {
    // Create a copy of the students array
    let studentsCopy = students.slice();
    
    // Find the index of the student with the given id
    const index = studentsCopy.findIndex(student => student.id === id);
    
    if (index !== -1) {
      // Remove the student from the copy
      studentsCopy.splice(index, 1);
      
      // Update the students state
      setStudents(studentsCopy);
    }
  };
  
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="container page-content-details">
      <p className="heading">Students' Details</p>
      <button className="add" onClick={() => {
        setShowModal(true);
  console.log('Modal triggered');
}}>
        Add a new student
      </button>
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
            <button className="delete" onClick={()=>{
              deleteEntry(student.id);
              console.log(student.id);
            }}>Delete Entry</button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Student</h3>
            <input
              type="text"
              placeholder="Enter student name"
              value={newStudentName}
              onChange={(e) => setNewStudentName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Enter student ID"
              value={newStudentId}
              onChange={(e) => setNewStudentId(e.target.value)}
            />
            <button className="save" onClick={handleAddStudent}>Save</button>
            <button className="cancel" onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDetails;
