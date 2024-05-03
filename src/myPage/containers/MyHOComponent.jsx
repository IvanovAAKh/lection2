import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MyComponent from '../components/MyComponent3';
import actionsStudents from '../actions/students';

class HOC extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showComponent: false,
    };
  }

  render() {
    const {
      showComponent,
    } = this.state;

    const {
      dispatch,
      name,
      studentsList,
      isLoadingStudents,
      actionFetchStudents,
    } = this.props;

    console.log(this.props);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        My Page
        <div>
          <button
            onClick={() => this.setState({
              showComponent: !showComponent,
            })}
          >
            {showComponent
              ? 'Приховати компонент'
              : 'Показати компонент'
            }
          </button>
        </div>
        {showComponent && (
          <MyComponent />
        )}
        <div>
          {name}
        </div>
        <div>
          <button
            onClick={() => actionFetchStudents({
              studentsCount: 10
            })}
          >
            Press me, and I will set students to redux store
          </button>
        </div>
        {isLoadingStudents && (
          <div>
            Loading...
          </div>
        )}
        {!isLoadingStudents && studentsList.map((student) => (
          <div>
            {student.name}
          </div>
        ))}
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  studentsList: reduxState.students.list,
  isLoadingStudents: reduxState.students.isLoading,
  name: reduxState.students.name,
});

const mapDispatchToProps = (dispatch) => {
  const {
    fetchStudents,
  } = bindActionCreators(actionsStudents, dispatch);
  return ({
    actionFetchStudents: fetchStudents,
  });
};


export default connect(mapReduxStateToProps, mapDispatchToProps)(HOC);
