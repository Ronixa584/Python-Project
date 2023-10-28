import { combineReducers,applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./Reducers/authReducer";

const store = createStore(
    combineReducers({ auth: authReducer }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;


// import {
//   combineReducers,
//   applyMiddleware,
//   createStore,
// } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import authReducer from "./Reducers/authReducer";

// const rootReducer = combineReducers({
//   auth: authReducer, // Use the reducer without wrapping it in an object
// });

// const store = createStore(
//   rootReducer, // Pass the combined reducer here
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;







