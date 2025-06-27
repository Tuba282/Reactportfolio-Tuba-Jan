import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Portfolio from "./Portfolio";
import React, { useState, useEffect } from "react";
import Loader from "./Components/Loader"; // import loader

import ProjectCard from "./Components/ProjectCard";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="w-full h-screen flex justify-center items-center"><Loader /></div>;
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>

        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<ProjectCard />} />

      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}
export default App