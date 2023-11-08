const initialState = {
  courses: []
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ENROLLMENT_STATUS":
     
      return {
        ...state,
        courses: state.courses.map((course) =>
          course.id === action.payload.courseId
            ? { ...course, enrollmentStatus: action.payload.status }
            : course
        )
      };

    default:
      return state;
  }
};

export default courseReducer;
