import { createStore, combineReducers, compose } from "redux";

// Redux reducers
import { labelReducer } from "../reducer/labelReducer";
import { taskReducer } from "../reducer/taskReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Root reducer for all the reducers present
const rootReducers = combineReducers({
  currentLabel: labelReducer,
  tasks: taskReducer,
});

export const store = createStore(rootReducers, composeEnhancers());
