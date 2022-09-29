import { BlogReducer } from "./Blogs/reducer";
import thunk from "redux-thunk";
import {
  legacy_createStore,
  combineReducers,  // when we use more then 1 reducer
  compose,
  applyMiddleware,
} from "redux";

const rootReducer = combineReducers({ BlogReducer });

// enhancers like addons enhance ability wrap around the store give extra flexiblity to the store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);


//applymiddleware is one such enhancers
