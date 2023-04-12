import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Statistics from "./components/Statistics/Statistics";
import AppliedPage from "./components/AppliedPage/AppliedPage";
import Blogs from "./components/Blogs/Blogs";
import JobDetails from "./components/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied-job",
        element: <AppliedPage></AppliedPage>,
        loader: () => fetch('/jobs-data.json')
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader:() => fetch('blogs.json')
      },
      {
        path: "/details-job/:jobId",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobs-data.json')
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
