
import React from "react";
import { Link } from "react-router-dom";
import {auth, provider} from "../../src/Editor/config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useState, useEffect } from "react";


const Header = () => {

  // //Toggle
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // //SignIn
  // const [value, setValue] = useState("");

  // const SignIn = () => {
  //   try {
  //     signInWithPopup(auth, provider).then((data) => {
  //       setValue(data?.user?.email);
  //       localStorage.setItem("email", data?.user?.email);
  //       setIsLoggedIn(true);
  //     });
  //   } catch (error) {
  //     console.error("Error signing in:", error);
  //   }
  // };

  // useEffect(() => {
  //   setValue(localStorage.getItem("email"));
  // });

  // //SignOut
  // const SignOut = () => {
  //   localStorage.clear();
  //   window.location.reload();
  //   setIsLoggedIn(false);
  // };

  return (
    <div className="headerClass border border-solid border-black p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Logo</div>
      <div className="flex space-x-4">
        <ul className="flex space-x-4">
          <Link to="/">
            <li className="text-blue-500 hover:text-blue-200">Home</li>
          </Link>
          <Link to="/Editor">
            <li className="text-blue-500 hover:text-blue-700">Editor</li>
          </Link>
          <Link to="/VideoTranscription">
            <li className="text-blue-500 hover:text-blue-700">
              Video Transcription
            </li>
          </Link>
          <Link to="/OCR">
            <li className="text-blue-500 hover:text-blue-700">OCR</li>
          </Link>
        </ul>
      </div>
      <div className="flex space-x-4">
        <ul className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <span className="text-gray-600 font-semibold">
                Welcome, {value}
              </span>
              <Link to="/DashboardPages">
                DashBoard
              </Link>
              <button
                className="px-3 py-1 text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md rounded-md transition duration-300 ease-in-out"
              >
                SIGN UP
              </button>
            </>
          ) : (
            <button
             
              className="px-3 py-1 text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md rounded-md transition duration-300 ease-in-out"
            >
              SIGN IN
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;















// //Conditional Rendering of header
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { auth, provider } from "../../src/Editor/config/firebase";
// import { signInWithPopup } from "firebase/auth";
// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import {
//   FirebaseAuth,
//   getAuth,
//   setPersistence,
//   signInWithEmailAndPassword,
//   browserSessionPersistence,
// } from "firebase/auth";


// const Header = () => {
  
//   const location = useLocation();
//   // // const auth = getAuth();
//   // setPersistence(auth, browserSessionPersistence)
//   //   .then(() => {
//   //     // Session persistence is set successfully.
//   //   })
//   //   .catch((error) => {
//   //     // Handle errors.
//   //   });

//   const [user, setUser] = useState(null);

//   // Toggle
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // SignIn
//   const [value, setValue] = useState("");

//   const signInWithFirebase = async () => {
//     // const provider = new GoogleAuthProvider(); // Change this to your preferred provider (Google, Facebook, etc.)

//     try {
      
//       const result = await signInWithPopup(auth, provider);
//       // await FirebaseAuth.instance.setPersistence(Persistence.SESSION);
      
//       setUser(result.user);
//       localStorage.setItem("email", result.user.email);
//       setIsLoggedIn(true);
//     } catch (error) {
//       console.error("Error signing in:", error);
//     }
//   };

//   const SignIn = async () => {
//     if (!user) {
//       signInWithFirebase();
//     }
//   };
//   useEffect(() => {
//     setValue(localStorage.getItem("email"));
//   }, []);

//   // SignOut
//   const SignOut = () => {
//     localStorage.clear();
//     window.location.reload();
//     setIsLoggedIn(false);
//   };

//   const handleToast = () => {
//     toast.error("Sign in first to access OCR, Editor, and VideoTranscription.");
//   };

//   // Disable persistence on web platforms

//   return (
//     <div className="headerClass border border-solid border-black p-4 flex justify-between items-center">
//       <div className="text-xl font-bold">Logo</div>
//       <div className="flex space-x-4">
//         <ul className="flex space-x-4">
//           <Link to="/">
//             <li className="text-blue-500 hover:text-blue-200">Home</li>
//           </Link>
//           {isLoggedIn ? (
//             <Link to="/Editor">
//               <li className="text-blue-500 hover:text-blue-700">Editor</li>
//             </Link>
//           ) : (
//             <button
//               onClick={handleToast}
//               className="text-blue-500 hover:text-blue-700"
//             >
//               Editor
//             </button>
//           )}
//           {isLoggedIn ? (
//             <Link to="/OCR">
//               <li className="text-blue-500 hover:text-blue-700">
//                 OCR
//               </li>
//             </Link>
//           ) : (
//             <button
//               onClick={handleToast}
//               className="text-blue-500 hover:text-blue-700"
//             >
//               OCR
//             </button>
//           )}
//           {isLoggedIn ? (
//             <Link to="/VideoTranscription">
//               <li className="text-blue-500 hover:text-blue-700">
//                 Video Transcription
//               </li>
//             </Link>
//           ) : (
//             <button
//               onClick={handleToast}
//               className="text-blue-500 hover:text-blue-700"
//             >
//               VideoTranscription
//             </button>
//           )}
//         </ul>
//       </div>
//       <div className="flex space-x-4">
//         <ul className="flex space-x-4">
//           {location.pathname === "/Editor" ? (
//             <>
//               <span className="text-gray-600 font-semibold">
//                 Welcome, {value}
//               </span>
//               <Link to="/Dashboard">
//                 <button className="px-3 py-1 text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md rounded-md transition duration-300 ease-in-out">
//                   Dashboard
//                 </button>
//               </Link>
//               <button
//                 onClick={SignOut}
//                 className="px-3 py-1 text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md rounded-md transition duration-300 ease-in-out"
//               >
//                 SIGN OUT
//               </button>
//             </>
//           ) : isLoggedIn ? (
//             <>
//               <span className="text-gray-600 font-semibold">
//                 Welcome, {value}
//               </span>
//               <button
//                 onClick={SignOut}
//                 className="px-3 py-1 text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md rounded-md transition duration-300 ease-in-out"
//               >
//                 SIGN OUT
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={SignIn}
//               className="px-3 py-1 text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md rounded-md transition duration-300 ease-in-out"
//             >
//               SIGN IN
//             </button>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;



















//Dynamic header changing as per locations
// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const Header = () => {
//   const location = useLocation();

//   // Define a function to conditionally render the login and sign-in buttons
//   const renderLoginButtons = () => {
//     if (location.pathname === "/Editor") {
//       // Render the login and sign-in buttons only for the "/Editor" route
//       return (
//         <div className="flex space-x-4">
//           <ul className="flex space-x-4">
//             <li className="text-blue-500 hover:text-blue-700">Log In</li>
//             <li className="text-blue-500 hover:text-blue-700">Sign In</li>
//           </ul>
//         </div>
//       );
//     }
//     // If not on the "/Editor" route, render nothing for login and sign-in
//     return null;
//   };

//   return (
//     <div className="border border-solid border-black p-4 flex justify-between items-center">
//       <div className="text-xl font-bold">Logo</div>
//       <div className="flex space-x-4">
//         <ul className="flex space-x-4">
//           <Link to="/">
//             <li className="text-blue-500 hover:text-blue-200">Home</li>
//           </Link>
//           <Link to="/Editor">
//             <li className="text-blue-500 hover:text-blue-700">Editor</li>
//           </Link>
//           <Link to="/VideoTranscription">
//             <li className="text-blue-500 hover:text-blue-700">
//               Video Transcription
//             </li>
//           </Link>
//           <Link to="/OCR">
//             <li className="text-blue-500 hover:text-blue-700">OCR</li>
//           </Link>
//         </ul>
//       </div>
//       {renderLoginButtons()}
//     </div>
//   );
// };

// export default Header;




//Dynamic header changing as per locations .But at all pages login and signin
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { provider } from 'firebase/auth';
// import SignIn from './../Editor/Pages/AuthPages/SignIn';
// import { to } from './../../dist/index.7271efb6';

// const Header = () => {
//   const location = useLocation();

//   // Define a function to render the login and sign-in buttons
//   const renderLoginButtons = () => (
//     <div className="flex space-x-4">
//       <ul className="flex space-x-4">
//         <Link to="/Login">
//           <li className="text-blue-500 hover:text-blue-700">Log In</li>
//         </Link>
//         <Link to="/SignIn">
//           <li className="text-blue-500 hover:text-blue-700">Sign In</li>
//         </Link>
//       </ul>
//     </div>
//   );

//   return (
//     <div className="border border-solid border-black p-4 flex justify-between items-center">
//       <div className="text-xl font-bold">Logo</div>
//       <div className="flex space-x-4">
//         <ul className="flex space-x-4">
//           <Link to="/">
//             <li className="text-blue-500 hover:text-blue-200">Home</li>
//           </Link>
//           <Link to="/Editor">
//             <li className="text-blue-500 hover:text-blue-700">Editor</li>
//           </Link>
//           <Link to="/VideoTranscription">
//             <li className="text-blue-500 hover:text-blue-700">
//               Video Transcription
//             </li>
//           </Link>
//           <Link to="/OCR">
//             <li className="text-blue-500 hover:text-blue-700">OCR</li>
//           </Link>
//         </ul>
//       </div>
//       {renderLoginButtons()}
//     </div>
//   );
// };

// export default Header;

