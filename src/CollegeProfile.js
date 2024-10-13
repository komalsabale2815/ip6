// CollegeProfile.js
import React from 'react';
import './App.css';
import logo from './components/logo.png';
// Separate CourseList Component
const CourseList = ({ courses }) => (
  <div className="card-body">
    <h3>
      <i className="fas fa-book"></i> Courses Offered
    </h3>
    <ul className="list-unstyled">
      {courses.map((course, index) => (
        <li key={index} className="course-item">
          <i className="fas fa-check-circle"></i> {course}
        </li>
      ))}
    </ul>
  </div>
);

// Separate DepartmentList Component
const DepartmentList = ({ departments }) => (
  <div className="card-body">
    <h3>
      <i className="fas fa-building"></i> Departments
    </h3>
    <ul className="list-unstyled">
      {departments.map((department, index) => (
        <li key={index} className="department-item">
          <i className="fas fa-check-circle"></i> {department}
        </li>
      ))}
    </ul>
  </div>
);

// Separate FacultyList Component
const FacultyList = ({ faculty }) => {
  const handleFacultyClick = (name) => {
    alert(`You clicked on ${name}`);
  };

  return (
    <div className="card-body">
      <h3>
        <i className="fas fa-chalkboard-teacher"></i> Faculty Members
      </h3>
      <ul className="list-unstyled">
        {faculty.map((member, index) => (
          <li key={index} className="faculty-item" onClick={() => handleFacultyClick(member.name)}>
            <i className="fas fa-user-tie"></i> {member.name} - {member.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

function CollegeProfile() {
  const college = {
    name: "Vivekananda Education Society's Institute of Technology",
    location: "Collectors Colony, Chembur, 400074",
    contact: "info@vesit.edu",
    courses: [
      "Computer Science", 
      "Information Technology", 
      "Electronics & Telecommunications", 
      "Electronics and Computer Science", 
      "Automation and Robotics"
    ],
    departments: ["Science", "Arts", "Commerce", "Technology", "Sports"],
    faculty: [
      { name: "Dr. John Smith", department: "Computer Science" },
      { name: "Prof. Sarah Lee", department: "Information Technology" },
      { name: "Dr. Alice Brown", department: "MCA" },
    ],
  };

  return (
    <div className="container mt-5">
      {/* College Header */}
      <div className="profile-header text-center p-4 animate__animated animate__fadeInDown">
        <img
          src={logo} // Updated logo source
          alt="College Logo"
          className="img-fluid college-logo"
        />
        <h1 className="mt-3">{college.name}</h1>
        <p className="location">
          <i className="fas fa-map-marker-alt"></i> {college.location}
        </p>
        <p className="contact">
          <i className="fas fa-envelope"></i> {college.contact}
        </p>
      </div>

      {/* Courses and Departments Section */}
      <div className="row">
        <div className="col-md-6">
          <div className="card animate__animated animate__fadeInLeft">
            <CourseList courses={college.courses} />
          </div>
        </div>

        <div className="col-md-6">
          <div className="card animate__animated animate__fadeInRight">
            <DepartmentList departments={college.departments} />
          </div>
        </div>
      </div>

      {/* Faculty Section */}
      <div className="card mt-4 animate__animated animate__zoomIn">
        <FacultyList faculty={college.faculty} />
      </div>
    </div>
  );
}

export default CollegeProfile; // Single default export
