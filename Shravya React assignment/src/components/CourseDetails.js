import React from "react";
import coursesData from "/data";

function CourseDetails({ courseId }) {
  const course = coursesData.find((c) => c.id === courseId);

  return (
    <div>
      <h1>Course Details</h1>
      <h2> {course.name} </h2>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Enrollment Status: {course.enrollmentStatus}</p>
      <p>Course Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Prerequisites: {course.prerequisites.join(", ")}</p>
      <details>
        <summary>Syllabus</summary>
        <ul>
          {course.syllabus.map((item) => (
            <li key={item.week}>
              <strong>Week {item.week}:</strong> {item.topic}
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default CourseDetails;
