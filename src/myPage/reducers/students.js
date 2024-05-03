const initialState = {
  isLoading: false,
  list: [],
  name: "This is Students!!!!!",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_STUDENTS': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'RECEIVE_STUDENTS': {
      const {
        students,
      } = action;
      return {
        ...state,
        isLoading: false,
        list: students,
      };
    }
    default: return state;
  }
};
