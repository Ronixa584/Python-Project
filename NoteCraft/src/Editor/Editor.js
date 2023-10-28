// import HomePage from "./Pages/HomePage";
// import TextEditor from "./Text Editor/Client/TextEditor";
// import { Route, Routes, useMatch } from "react-router-dom";
// import { Link } from "react-router-dom";

// const Editor = () => {

//     return (
//       <div>
//         <Link
//           to="/Editor/TextEditor"
//           className="text-blue-500 hover:text-blue-700"
//         >
//           <p>Create</p>
//           <Routes>
//             <Route path="TextEditor" element={<TextEditor />} />
//           </Routes>
//         </Link>
//       </div>
//     );
//   };
  
//   export default Editor;
  


import React from "react";
import { Link, useMatch, Outlet } from "react-router-dom";
import "./Text Editor/Client/styles.css";
// // import { css } from '@emotion/react';
// import "./styles.css";


const Editor = () => {
  // Check if the current route matches "/Editor/TextEditor"
  const isTextEditorRoute = useMatch("/Editor/TextEditor");

  return (
    <div>
      <Link
        to="/Editor/TextEditor"
        className="text-blue-500 hover:text-blue-700"
      >
        {isTextEditorRoute ? null : (
            <button className="p-2 m-2 px-3 py-1 text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md rounded-md transition duration-300 ease-in-out">
              Create
            </button>
        )}
      </Link>
      <Outlet />
    </div>
  );
};

export default Editor;
