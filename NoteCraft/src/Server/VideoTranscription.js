// const VideoTranscription = () => {
//     return (
//       <div>
//         <h1>This is VideoTranscription</h1>
//       </div>
//     );
//   };
  
//   export default VideoTranscription;
  





// import { useState } from "react";
// import { YoutubeTranscript } from 'youtube-transcript';
// const VideoTranscription = () => {
//   const [searchText, setSearchText] = useState("");
//   const [videoId, setVideoId] = useState("");

//   return (
//     <div className="h-auto">
//       <div className="w-auto flex flex-row justify-center items-center p-10 mt-6" >
//         <input
//           type="text"
//           className="w-2/5 rounded-3xl border-black border-2 p-3 mr-9 text-xl"
//           placeholder="Enter the URL"
//           value={searchText}
//           onChange={(e) => {
//             setSearchText(e.target.value);
//           }}
//         />
//         <button
//           className="border-2  p-3 rounded-3xl w-36 bg-blue-600 text-xl"
//           onClick={() => {
//             const url = searchText.trim();
//             const videoIdMatch = url.match(
//               /(?:https?:\/\/(?:www\.)?youtube\.com\/watch\?v=|https?:\/\/youtu\.be\/)([\w-]+)/
//             );

//             if (videoIdMatch) {
//               const newVideoId = videoIdMatch[1];
//               setVideoId(newVideoId);
//             }
//           }}
//         >
//           Search
//         </button>
//       </div>
//       <div className="flex flex-row justify-center items-center mt-16">
//         {videoId && (
//             <iframe
//               width="560"
//               height="315"
//               src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
//               title="YouTube Video Player"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//             />
//           )}
//       </div>
//       <div>
//         {/* Transcript should  display here */}
//       </div>
//     </div>
//   );
// };

// export default VideoTranscription;























// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const VideoTranscription = () => {
//   const [searchText, setSearchText] = useState("");
//   const [videoId, setVideoId] = useState("");
//   const [transcription, setTranscription] = useState("");
//   // const [transcription, setTranscription] = useState("");

//   // useEffect(() => {
//   //   if (videoId) {
//   //     // When videoId changes, fetch the transcription
//   //     fetchTranscription();
//   //   }
//   // }, [videoId]);

//   // const fetchTranscription = async () => {
//   //   try {
//   //     const response = await axios.post("/transcribe", { videoUrl: videoId });
//   //     setTranscription(response.data.transcription);
//   //   } catch (error) {
//   //     console.error("Error fetching transcription:", error);
//   //   }
//   // };

//   // async function trancript() {
//   //   const link=searchText;
//   //   const responce = await fetch('/transcribe', {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json'
//   //     },
//   //     body: JSON.stringify({ videoUrl: link })
//   //   });
//   //   const data = await responce.json();
    
//   //   if (data.error) {
//   //     document.getElementById('result-text').innerHTML = data.error;
//   //   } else {
//   //     document.getElementById('result-text').innerHTML = data.transcription;
//   //   }
//   // }
  
//   const transcribe = async () => {
//     try {
//       const response = await axios.post('/transcribe', { videoUrl: searchText }); // Send videoUrl in the request
//       const data = response.data;

//       if (data.error) {
//         document.getElementById('result-text').innerHTML = data.error;
//       } else {
//         document.getElementById('result-text').innerHTML =transcription;
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//       // Handle the error, e.g., display an error message
//     }
//   };

  



//   return (
//     <div className="h-auto">
//       <div className="w-auto flex flex-row justify-center items-center p-10 mt-6">
//         <input
//           type="text"
//           className="w-2/5 rounded-3xl border-black border-2 p-3 mr-9 text-xl"
//           placeholder="Enter the URL"
//           value={searchText}
//           onChange={(e) => {
//             setSearchText(e.target.value);
//           }}
//         />
//         <button
//           className="border-2 p-3 rounded-3xl w-36 bg-blue-600 text-xl"
//           onClick={() => {
//             const url = searchText.trim();
//             const videoIdMatch = url.match(
//               /(?:https?:\/\/(?:www\.)?youtube\.com\/watch\?v=|https?:\/\/youtu\.be\/)([\w-]+)/
//             );

//             if (videoIdMatch) {
//               const newVideoId = videoIdMatch[1];
//               setVideoId(newVideoId);
//               setTranscription(""); // Clear the previous transcription
//             }
//           }}
//         >
//           Search
//         </button>

//         <button
//           className="border-2 p-3 rounded-3xl w-36 bg-blue-600 text-xl"
//           onClick= {transcribe}
//         >
//           Transcript
//         </button>




//       </div>
//       <div className="flex flex-row justify-center items-center mt-16">
//         {videoId && (
//           <iframe
//             width="560"
//             height="315"
//             src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
//             title="YouTube Video Player"
//             allow="autoplay; encrypted-media"
//             allowFullScreen
//           />
//         )}
//       </div>
//       <div>
//         {/* Display the transcription */}
//        {/* ( */}
//           <div className="mt-4">
//             <h2>Transcription:</h2>
//             <p id="result-text">{transcription}</p>
//           </div>
//         {/* ) */}
//       </div>
//     </div>
//   );
// };

// export default VideoTranscription;







import React, { useState } from "react";
import axios from "axios";

const VideoTranscription = () => {
  const [searchText, setSearchText] = useState("");
  const [videoId, setVideoId] = useState("");
  const [transcription, setTranscription] = useState("");

  const transcribe = async () => {
    try {
      console.log("hH");
      const response = await axios?.post(
        "http://localhost:5000/VideoTranscription",
        {
          videoUrl: searchText,
        }
      );
      const data = response.data;
      console.log(data)

      if (data.error) {
        setTranscription(data.error);
      } else {
        setTranscription(data.transcription);
      }
    } catch (error) {
      console.error("An error occurred in VT", error);
      // Handle the error, e.g., display an error message
    }
  };

  return (
    <div className="h-auto">
      <div className="w-auto flex flex-row justify-center items-center p-10 mt-6">
        <input
          type="text"
          className="w-2/5 rounded-3xl border-black border-2 p-3 mr-9 text-xl"
          placeholder="Enter the URL"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="border-2 p-3 rounded-3xl w-36 bg-blue-600 text-xl"
          onClick={() => {
            const url = searchText.trim();
            const videoIdMatch = url.match(
              /(?:https?:\/\/(?:www\.)?youtube\.com\/watch\?v=|https?:\/\/youtu\.be\/)([\w-]+)/
            );

            if (videoIdMatch) {
              const newVideoId = videoIdMatch[1];
              setVideoId(newVideoId);
              setTranscription(""); // Clear the previous transcription
            }
          }}
        >
          Search
        </button>

        <button
          className="border-2 p-3 rounded-3xl w-36 bg-blue-600 text-xl"
          onClick={transcribe}
        >
          Transcript
        </button>
      </div>
      <div className="flex flex-row justify-center items-center mt-16">
        {videoId && (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube Video Player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </div>
      <div className="mt-4">
        <h2>Transcription:</h2>
        <p>{transcription}</p>
      </div>
    </div>
  );
};

export default VideoTranscription;

