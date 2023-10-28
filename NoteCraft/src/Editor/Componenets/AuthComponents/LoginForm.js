// // import React from 'react'

// // const LoginForm = () => {
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export default LoginForm;

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux"; 
// import { Link, useHistory, useLocation, useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";
// // import { loginUser } from "../../Redux/actionCreators/authActionCreator";
// import { signInUser } from "../../Redux/actionCreators/authActionCreator";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   const dispatch = useDispatch();
//   // //  const history = useHistory();
//   // const navigate= useNavigate();
//   // // const { pathname } = useLocation();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if(!email || !password){
//       alert("Please fill all fileds");
//       return;
//     }

//     // console.log(email, password);
//     dispatch(signInUser(email,password));
//     // if (!email || !password) return toast.dark("Please fill in all fields!");
//     // const data = {
//     //   email,
//     //   password,
//     // };
//     // dispatch(loginUser(data, setError));
//   };

//   // useEffect(() => {
//   //   if (error) {
//   //     toast.error(error);
//   //   }
//   //   if (isLoggedIn) {
//   //     // history.goBack();
//   //     // navigate("/DashboardPages");
//   //     navigate("/DashboardPages");
//   //   }
//   // }, [error]);

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-4xl font-extrabold my-5 text-center">Login</h1>
//       <div className="md:w-1/2 mx-auto">
//         <form onSubmit={handleSubmit} autoComplete="off" name="LOGIN">
//           {/* <form name="LOGIN"> */}
//           <div className="mb-4">
//             <input
//               type="email"
//               className="w-full px-3 py-2 rounded border border-gray-300"
//               placeholder="Email"
//               name="Email"
//               value={email}
//               autoComplete="username"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="password"
//               className="w-full px-3 py-2 rounded border border-gray-300"
//               placeholder="Password"
//               name="Password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="mb-6">
//             <button
//               type="submit"
//               className="w-full px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
//             >
//               Login
//             </button>
//           </div>
//           <p className="text-right flex items-center justify-end gap-2 my-4">
//             Not a Member?
//             <Link to="/SignIn" className="ml-2 text-blue-500 hover:underline">
//               Register
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;








import React from 'react'

// const LoginForm = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default LoginForm;

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux"; 
// import { Link, useHistory, useLocation, useNavigate } from "react-router-dom";

// const LoginForm = () => {

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-4xl font-extrabold my-5 text-center">Login</h1>
//       <div className="md:w-1/2 mx-auto">
//         <form onSubmit={handleSubmit} autoComplete="off" name="LOGIN">
//           {/* <form name="LOGIN"> */}
//           <div className="mb-4">
//             <input
//               type="email"
//               className="w-full px-3 py-2 rounded border border-gray-300"
//               placeholder="Email"
//               name="Email"
//               value={email}
//               autoComplete="username"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="password"
//               className="w-full px-3 py-2 rounded border border-gray-300"
//               placeholder="Password"
//               name="Password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="mb-6">
//             <button
//               type="submit"
//               className="w-full px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
//             >
//               Login
//             </button>
//           </div>
//           <p className="text-right flex items-center justify-end gap-2 my-4">
//             Not a Member?
//             <Link to="/SignIn" className="ml-2 text-blue-500 hover:underline">
//               Register
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;




// import React from "react";

// const LoginForm = () => {
//   return{
    
//   }
// };

// export default LoginForm;