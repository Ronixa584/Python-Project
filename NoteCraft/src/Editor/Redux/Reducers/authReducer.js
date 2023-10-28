import * as types from "../actionsTypes/authActionsTypes";

const initialState = {
    isAuthenticated: false,
    user: {},
};

const authReducer= (state = initialState, action) => {
    switch (action.type) {
      case types.SIGN_IN:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
      case types.SIGN_OUT:
        return {
          ...state,
          isAuthenticated: false,
          user: {},
        };
      default:
        return state;
    }
};

export default authReducer;





// import { RESET_USER, SET_USER } from "../actionsTypes/authActionsTypes";

// const initialState = {
//   isLoggedIn: false,
//   user: null,
//   userId: null,
// };

// const authReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case SET_USER:
//       state = {
//         isLoggedIn: true,
//         user: payload.user,
//         userId: payload.userId,
//       };
//       return state;
//     case RESET_USER:
//       state = initialState;
//       return state;
//     default:
//       return state;
//   }
// };

// export default authReducer;