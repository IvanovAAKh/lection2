const receiveStudents = students => ({
  students,
  type: 'RECEIVE_STUDENTS',
});

const requestStudents = () => ({
  type: 'REQUEST_STUDENTS'
});

const errorReceiveStudents = () => ({
  type: 'ERROR_RECEIVE_STUDENTS',
});

const getStudents = (studentsCount) => new Promise((onSuccess) => {
  setTimeout(
    () => onSuccess(Array
      .from(new Array(studentsCount).keys())
      .map(index => ({ name: `Student ${index}`}))),
    1000
  );
});

const fetchStudents = ({ studentsCount }) => (dispatch) => {
  dispatch(requestStudents());
  return getStudents(studentsCount)
    .then(students => dispatch(receiveStudents(students)))
    .catch(() => dispatch(errorReceiveStudents()));
};

export default {
  fetchStudents,
};
