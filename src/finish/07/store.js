import { userReducer } from './reducers/userReducer';
import { postReducer } from './reducers/postReducer';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer
})

export const store = createStore(rootReducer);
