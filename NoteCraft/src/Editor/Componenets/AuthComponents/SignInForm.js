// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useHistory, useNavigate } from "react-router-dom";
// import toast from "react-toastify";
// import { signUpUser } from "../../Redux/actionCreators/authActionCreator";

// //For google
// import { auth, provider } from "../../config/firebase";
// import { signInWithPopup } from "firebase/auth";
// import Home from "../../../Componenets/Home";

// const SignInForm = () => {
//   // const [name, setName] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   // const [confirmPassword, setConfirmPassword] = useState("");
//   const [value, setValue] = useState("");

//   const handleClick = () => {
//     try {
//       signInWithPopup(auth, provider).then((data) => {
//         setValue(data?.user?.email);
//         localStorage.setItem("email", data?.user?.email);
//       });
//     } catch (error) {
//       console.error("Error signing in:", error);
//     }
//   };

//   useEffect(() => {
//     setValue(localStorage.getItem("email"));
//   });

//   //Normal Login and SignIN with Email
//   // //   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   //   const dispatch = useDispatch();
//   // //   // const history = useHistory();
//   // //   const navigate = useNavigate();

//   //   const handleSubmit = (e) => {
//   //     e.preventDefault();

//   //     if (!name || !email || !password){
//   //       alert("Please Fill all fields");
//   //       return;
//   //     }
//   // //       return toast.dark("Please fill in all fields!");

//   //     if (password !== confirmPassword){
//   //       alert("Password do not match");
//   //       return;
//   //     }
//   // //       return toast.dark("Passwords don't match!");

//   //     dispatch(signUpUser(name, email, password));
//   // //     if (password.length < 8) {
//   // //       return toast.dark("Password must be at least 8 characters long");
//   // //     }
//   // //     if (
//   // //       !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
//   // //     ) {
//   // //       return toast.dark(
//   // //         "Password must contain at least one number and one special character"
//   // //       );
//   // //     }

//   // //     const data = {
//   // //       name,
//   // //       email,
//   // //       password,
//   // //     };

//   // //     // console.log(data);

//   // //     dispatch(registerUser(data, setError));
//   //   };

//   // //   useEffect(() => {
//   // //     if (error) {
//   // //       toast.error(error);
//   // //     }
//   // //     if (isLoggedIn) {
//   // //       // history.push("/dashboard");
//   // //       // console.log("hello");
//   // //       navigate("/DashboardPages");
//   // //       // navigate(`/city/${newCityName}`);
//   // //     }
//   // //   }, [error, isLoggedIn]);

//   return (
//     <div className="mb-6">
//       {value ? (
//         <Home />
//       ) : (
//         <button
//           type="submit"
//           className="w-full px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
//           onClick={handleClick}
//         >
//           sign with Google
//         </button>
//       )}
//     </div>
//   );
// };

// export default SignInForm;
