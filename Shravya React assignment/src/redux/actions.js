export const setEnrollmentStatus = (courseId, status) => {
  return {
    type: "SET_ENROLLMENT_STATUS",
    payload: {
      courseId,
      status
    }
  };
};
