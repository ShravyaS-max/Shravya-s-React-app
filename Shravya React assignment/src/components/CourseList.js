import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEnrollmentStatus } from "../redux/actions";

function CourseList() {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  const handleSetEnrollmentStatus = (courseId, status) => {
    dispatch(setEnrollmentStatus(courseId, status));
  };

  return (
    <div>
      <h1>Course Listing</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h2>{course.name}</h2>
            <p>Instructor: {course.instructor}</p>
            <p>Description: {course.description}</p>
            <p>Enrollment Status: {course.enrollmentStatus}</p>
            <button
              onClick={() => handleSetEnrollmentStatus(course.id, "Enrolled")}
            >
              Enroll
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
