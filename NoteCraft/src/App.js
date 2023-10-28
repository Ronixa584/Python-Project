import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Componenets/Header";
import Body from "./Componenets/Body";
import Footer from "./Componenets/Footer";
import Editor from "./Editor/Editor";
import OCR from "./OCR/OCR";
import VideoTranscription from "./Server/VideoTranscription";
import Error from "../src/Componenets/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import store from "./Editor/Redux/store";
import Login from "./Editor/Pages/AuthPages/Login";
import SignIn from "./Editor/Pages/AuthPages/SignIn";
import DashboardPages from "./Editor/Pages/DashboardPages/DashboardPages";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import path from "path-browserify";
import TextEditor from "../src/Editor/Text Editor/Client/TextEditor"

export const AppLayout = () => {
  return (
    <div>
      <Header />
      <ToastContainer position="top-right" autoClose={5000} />
      <Outlet />
      <Footer />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Editor",
        element: <Editor />,
        children: [
          {
          path: "TextEditor",
          element: <TextEditor/>,
          },
        ],
      },
      {
        path: "/OCR",
        element: <OCR />,
      },
      {
        path: "/VideoTranscription",
        element: <VideoTranscription />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
      {
        path: "/DashboardPages",
        element: <DashboardPages />,
      },
      // {
      //   path: "/TextEditor",
      //   element: <TextEditor />,
      // },
    ],
  },
]);

// const root = ReactDOM.createRoot(document.getElementById("main"));
// root.render(<RouterProvider  router={AppRouter}/>);

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(
  <Provider store={store}>
    <RouterProvider router={AppRouter}>
      <AppLayout />
    </RouterProvider>
  </Provider>
);

