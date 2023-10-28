// import React, { useCallback, useEffect } from 'react'
// import Quill from 'quill';
// import "quill/dist/quill.snow.css";

// const TextEditor = () => {

//   const wrapperRef = useCallback(wrapper => {
//     if(wrapper == null) return

//     wrapper.innerHTML = ""
//     const editor = document.createElement("div")
//     wrapper.append(editor)
//     new Quill("#container", { theme: "snow" });
//   }, []);

//   return (
//     <div id='container' ref={wrapperRef}>
//     </div>
//   );
// }

// export default TextEditor;




// // //With CSS
// import React, { useCallback, useEffect } from "react";
// import Quill from "quill";
// import "quill/dist/quill.snow.css";

// const TextEditor = () => {
//   const toolbarOptions = {
//     container: [
//       ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
//       [
//         { header: 1 },
//         { header: 2 },
//         { header: 3 },
//         { header: 4 },
//         { header: 5 },
//         { header: false }, // Remove header format
//       ],
//       [
//         { list: "ordered" },
//         { list: "bullet" },
//         { list: "check" }, // Checklists
//         { list: "todo" }, // To-Do Lists
//       ],
//       [
//         { script: "sub" },
//         { script: "super" },
//         { indent: "-1" },
//         { indent: "+1" },
//       ],
//       [{ direction: "rtl" }],
//       [
//         { size: ["small", false, "large", "huge"] }, // Font size
//         {
//           font: [],
//         }, // Font family
//       ],
//       [
//         { color: [] },
//         { background: [] },
//         { align: [] },
//         "link",
//         "image",
//         "table",
//       ],
//       ["formula", "table"],
//       ["clean"],
//     ],
//     handlers: {
//       link: function (value) {
//         if (value) {
//           var href = prompt("Enter the URL");
//           this.quill.format("link", href);
//         } else {
//           this.quill.format("link", false);
//         }
//       },
//     },
//   };

//   const wrapperRef = useCallback((wrapper) => {
//     if (wrapper == null) return;


//     const quillContainer = document.createElement("div");
//     // quillContainer.style.height = "11in";
//     // quillContainer.style.width = "8.5in";

//     wrapper.innerHTML = "";
//     wrapper.append(quillContainer);

//     const quill = new Quill(quillContainer, {
//       modules: {
//         toolbar: toolbarOptions,
//       },
//       theme: "snow",
//     });

//     // Customize the Quill toolbar by targeting its elements with CSS classes
//     const toolbar = quill.getModule("toolbar");
//     if (toolbar) {
//       toolbar.container.classList.add("flex", "space-x-4"); // Add spacing between toolbar items
//     }
//   }, []);

//   return (
//     // <div className="w-full h-full bg-gray-200 p-2 shadow-md -auto mb-8 border border-gray-800 flex justify-center items-center">
//       <div id="container" ref={wrapperRef}>
//         {/* Text editor content */}
//       </div>
//     // </div>
//   );
// };

// export default TextEditor;









// //Using tinymce ,It runs but errors and warning in console

// import React, { useState, useEffect } from 'react';
// import { Editor } from '@tinymce/tinymce-react';
// // import { Global, css } from '@emotion/react'; // Assuming you want to keep this style/


// const TinyMceEditor = () => {
//   const onChange = (content, editor) => {
//     console.log(content);
//   };

//   // const [content, setContent] = useState(""); // Store the content in the component's state

//   //    const handleSave = () => {
//   //      // Implement your save logic here
//   //      // For example, you can send the 'content' to a server or save it locally
//   //      console.log("Content saved:", content);
//   //    };

//   //    const handleSaveAs = () => {
//   //      // Implement your "Save As" logic here, e.g., by triggering a file download
//   //      const blob = new Blob([content], { type: "text/plain" });
//   //      const url = URL.createObjectURL(blob);
//   //      const a = document.createElement("a");
//   //      a.href = url;
//   //      a.download = "document.txt";
//   //      document.body.appendChild(a);
//   //      a.click();
//   //      document.body.removeChild(a);
//   //      URL.revokeObjectURL(url);
//   //    };

//   useEffect(() => {
//     // You can apply global styles as follows
//     const style = document.createElement("style");
//     style.innerHTML =
//       ".tox-notifications-container { display: none !important; }";
//     document.head.appendChild(style);

//     return () => {
//       // Cleanup when the component unmounts
//       document.head.removeChild(style);
//     };
//   }, []);

//   return (
//     <div className="w-full h-full bg-gray-200 p-2 shadow-md -auto mb-8 border border-gray-800">
//       {/* <button onClick={handleSave}>Save</button>
//       <button onClick={handleSaveAs}>Save As</button> */}
//       <Editor
//         initialValue=""
//         init={{
//           deprecation_warnings: false,
//           branding: false,
//           height: 700,
//           menubar: true,
//           plugins:
//             "print preview paste searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern",
//           // plugins:
//           //   "preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount",
//           toolbar:
//             "formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat",
//           image_advtab: true,
//         }}
//         onEditorChange={onChange}
//         className="border border-orange-500"
//       />
//     </div>
//   );
// };



// const App = () => (
//   <div className="w-full h-screen bg-gray-100">
//     <TinyMceEditor />
//   </div>
// );

// export default App;



























import { useCallback, useEffect, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

// const TOOLBAR_OPTIONS = [
//   [{ header: [1, 2, 3, 4, 5, 6, false] }],
//   [{ font: [] }],
//   [{ list: "ordered" }, { list: "bullet" }],
//   ["bold", "italic", "underline"],
//   [{ color: [] }, { background: [] }],
//   [{ script: "sub" }, { script: "super" }],
//   [{ align: [] }],
//   ["image", "blockquote", "code-block"],
//   ["clean"],
// ];

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }], // Add more font types
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }], // Add more list options
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image","blockquote", "code-block"],
  // ["image"], // Add video tool
  ["clean"],
];

export default function TextEditor() {

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;

    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
    });
  }, []);
  return <div className="container" ref={wrapperRef}></div>;
}