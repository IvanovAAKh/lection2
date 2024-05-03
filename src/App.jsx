import React from 'react';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import MyPage from './myPage';
import studentsReducer from './myPage/reducers/students';
import ticketsReducer from './myPage/reducers/tickets';

const combinedReducer = combineReducers({
  students: studentsReducer,
  tickets: ticketsReducer,
});

const store = createStore(
  combinedReducer,
  applyMiddleware(thunk),
);

const App = (props) => {
  return (
    <Provider store={store}>
      <MyPage age={18} />
    </Provider>
  );
};

export default App;