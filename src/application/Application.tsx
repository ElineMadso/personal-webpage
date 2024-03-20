import React from "react";
//link
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, GalleryPage, AboutMePage, ProjectPage } from "../pages";
import Navbar from "../components/shared/Navbar";
export const Application = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="elinemadso/" element={<HomePage />} />
            <Route path="elinemadso/projects" element={<ProjectPage />} />
            <Route path="elinemadso/gallery" element={<GalleryPage />} />
            <Route path="elinemadso/aboutme" element={<AboutMePage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
export default Application;
