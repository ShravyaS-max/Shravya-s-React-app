import React from "react";
import coursesData from "/data";

function StudentDashboard() {
  const enrolledCourses = coursesData.filter(
    (course) => course.students.length > 0
  );

  return (
    <div>
      <h1>Student Dashboard</h1>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course.id}>
            <h2>{course.name}</h2>
            <p>Instructor: {course.instructor}</p>
            <p>Due Date: {course.dueDate}</p>
            <p>Progress: {course.progress}%</p>
            <button>Mark as Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentDashboard;
