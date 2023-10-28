// import { toast } from "react-toastify";
// import { auth, database } from "../../config/firebase";
// import userModel from "../../models/users";
// import { RESET_USER, SET_USER } from "../actionsTypes/authActionsTypes";
// // import { RESET_FOLDERS_FILES } from "../actionsTypes/filefoldersActions";

// const setUser = (data) => ({
//   type: SET_USER,
//   payload: data,
// });

// const resetUser = () => ({
//   type: RESET_USER,
// });

// export const registerUser =
//   ({ name, email, password }, setError) =>
//   (dispatch) => {
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((user) => {
//         setError("");
//         const newUser = userModel(email, name, user.user.uid);
//         auth.currentUser.updateProfile({
//           displayName: name,
//         });

//         database.users.add(newUser).then((user) => {
//           dispatch(
//             setUser({
//               userId: user.user.uid,
//               user: { data: user.user.providerData[0] },
//             })
//           );
//           toast.success("User registered successfully!!");
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//         if (err.code === "auth/email-already-in-use") {
//           setError("Email Already Exists!");
//         }
//       });
//   };

import * as types from "../actionsTypes/authActionsTypes";
import {fire} from "../../config/firebase";

const loginUser = (payload) => {
    return {
        type: types.SIGN_IN,
        payload,
    };
};

const logoutUser = () => {
  return {
    type: types.SIGN_OUT,
  };
};
//action creator

export const signInUser = (email,password) => (dispatch) => {
    // console.log(email,password);
    fire.auth().signInWithEmailAndPassword(email, password).then(user=>{
        console.log(user);
    }).catch(error=>{
        // console.log(error);
        alert("Invalid email or password");
    });
};

export const signUpUser = (name, email, password) => (dispatch) => {
  console.log(name, email, password);
};

export const signOutUser = () => (dispatch) => {
  dispatch(logoutUser());
};

// export const getUser = () => (dispatch) => {
//   auth.onAuthStateChanged(function (user) {
//     if (user) {
//       dispatch(
//         setUser({
//           userId: auth.currentUser.uid,
//           user: { data: auth.currentUser.providerData[0] },
//         })
//       );
//     } else {
//       dispatch(resetUser());
//     }
//   });
// };

// // const reserFilesFolders = () => ({
// //   type: RESET_FOLDERS_FILES,
// // });

// export const logoutUser = () => (dispatch) => {
//   auth.signOut().then(() => {
//     dispatch(resetUser());
//     // dispatch(reserFilesFolders());
//   });
// };
