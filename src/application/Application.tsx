import React from "react";
//link
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, GalleryPage, AboutMePage, ProjectPage } from "../components";
import Navbar from "../components/shared/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import GetInTouch from "../components/contact/GetInTouch";

export const Application = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="personal-webpage/" element={<HomePage />} />
            <Route path="personal-webpage/contactme" element={<GetInTouch />} />
            <Route path="personal-webpage/projects" element={<ProjectPage />} />
            <Route path="personal-webpage/gallery" element={<GalleryPage />} />
            <Route path="personal-webpage/aboutme" element={<AboutMePage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
export default Application;
