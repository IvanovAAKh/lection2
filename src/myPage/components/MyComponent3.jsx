import React from "react";

class MyComponent2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clickedCount: 0,
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: ', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const {
      myField,
      clickedCount,
    } = this.state;

    console.log('render');
    return (
      <>
        <div>
          <button
            onClick={() => this.setState({
              clickedCount: clickedCount + 1,
            })}
          >
            Change State
          </button>
        </div>
        <div>
          {clickedCount}
        </div>
      </>
    );
  }
}
export default MyComponent2;
