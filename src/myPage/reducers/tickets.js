const initialState = {
  isLoading: false,
  list: [],
  name: "This is Tickets!!!!!",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_TICKETS': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'RECEIVE_TICKETS': {
      const {
        tickets,
      } = action;
      return {
        ...state,
        isLoading: false,
        list: tickets,
      };
    }
    default: return state;
  }
};
