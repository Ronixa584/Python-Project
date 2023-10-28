// const OCR = () => {
//     return (
//       <div>
//         <h1>This is OCR</h1>
//       </div>
//     );
//   };
  
// export default OCR;
  



import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ArrowUpTrayIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Tesseract from "tesseract.js";

const OCR = ({ className }) => {
  const [file, setFile] = useState();
  // const [rejected, setRejected] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length === 1) {
      setFile(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
    } else {
      setRejected(rejectedFiles);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    // maxSize: 1024 * 1000,
    onDrop,
  });

  useEffect(() => {
    // Revoke the data URI to avoid memory leaks
    return () => {
      if (file) {
        URL.revokeObjectURL(file.preview);
      }
    };
  }, [file]);

  const removeFile = () => {
    setFile(null);
    setIsVisible(false);
  };

  //OCR
  const [isLoading, setIsLoading] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [text, setText] = React.useState("");
  // const [progress, setProgress] = React.useState(0);
  const [copiedText, setCopiedText] = useState(""); // Set your copied text here

  const handleSubmit = () => {
    setIsLoading(true);
    setIsVisible(true);
    Tesseract.recognize(file, "eng", {
      logger: (m) => {
        console.log(m);
        // if (m.status === "recognizing text") {
        //   setProgress(parseInt(m.progress * 100));
        // }
      },
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        console.log(result.data);
        setText(result.data.text);
        setIsLoading(false);
      });
  };
  const copyToClipboard = () => {
    if (copiedText) {
      navigator.clipboard.writeText(copiedText).then(() => {
        alert("Text copied to clipboard!");
      });
    }
  };

  // Toggle
  const [isVisible, setIsVisible] = useState(false);

  //  /OCR

  return (
    <div>
      {file ? (
        // Preview
        <section className="h-screen mt-10  flex flex-col justify-center items-center">
          <div className="flex gap-4">
            <h2 className="text-[#440044] title text-3xl font-semibold">
              Preview
            </h2>
          </div>
          {/* <div className="mt-10 rounded-lg w-1/4 h-auto bg-[#f4c0f4] relative flex flex-col justify-center items-center"> */}
          <div className="mt-10 rounded-lg w-3/4 md:w-1/2 lg:w-1/4 h-auto bg-[#f6e9f6] flex flex-col justify-center items-center">
            <img
              src={file.preview}
              alt={file.name}
              onLoad={() => {
                URL.revokeObjectURL(file.preview);
              }}
              className="object-center object-contain max-h-96 w-48 rounded-md mt-5"
            />
            <div className="flex flex-row-reverse ">
              <button
                type="button"
                className=" mt-5 w-7 h-7 bg-[#f4a4f4] border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center hover:bg-[#f363f3] transition-colors"
                onClick={removeFile}
              >
                <XMarkIcon className="w-5 h-5 fill-black hover.fill-secondary-400 transition-colors" />
              </button>
            </div>
            <p className="mt-2 text-[#5f2c5f]  text-[12px] font-semibold text-xl md:text-2xl">
              {file.name}
            </p>
          </div>
          {isLoading ? (
            // Show progress bar or loading indicator when converting
            <div className="w-12 h-7 bg-[#404] m-4 rounded-full flex justify-center items-center">
              <div className="w-5 h-5 border-t-2 border-primary-400 border-4 border-r-0 rounded-full animate-spin"></div>
            </div>
          ) : (
            // Show the "Convert" button when not converting
            <button
              onClick={handleSubmit}
              className="mt-5 rounded-full bg-white h-10 w-24 text-[#404] border border-[#404] hover:bg-[#fcebfc]"
            >
              Convert
            </button>
          )}
        </section>
      ) : (
        // Drop area
        <div {...getRootProps({ className: className })} className="h-screen">
          <input {...getInputProps()} />
          <div className="border-2 border-dashed border-black w-3/4 h-52 flex flex-col items-center justify-center gap-4 mx-auto my-auto mt-20 md:w-1/2">
            <ArrowUpTrayIcon className="w-12 h-12 fill-current mt-5 text-[#440044]" />
            {isDragActive ? (
              <p className="text-xl md:text-2xl text-[#440044] mt-5 font-bold text-center">
                Drop the file here ...
              </p>
            ) : (
              <p className="text-xl md:text-2xl text-[#440044] mt-5 font-bold text-center">
                Drag & drop a file here, or click to select a file
              </p>
            )}
          </div>
        </div>
      )}
      {isVisible ? (
        file &&
        !isLoading &&
        text && (
          <div className="h-screen bg-[#404] flex items-center justify-center">
            <div className="w-full h-full  md:w-3/4 lg:w-1/2 inline-block mt-[10px]">
              <div className="flex flex-row-reverse ">
                <button
                  onClick={copyToClipboard}
                  className="bg-white rounded-full m-4 w-12 h-7"
                >
                  Copy
                </button>
              </div>

              <div className="bg-[#fef6fe] p-10 h-[600px] overflow-y-auto">
                {text}
              </div>
            </div>
          </div>
        )
      ) : (
        <div>NO</div>
      )}
    </div>
  );
};

export default OCR;
