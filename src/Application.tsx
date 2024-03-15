import React from "react";
//link
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage, GalleryPage, AboutMePage, ProjectPage} from './pages';
import Navbar from "./components/shared/Navbar";
export const Application = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path='personal-webpage/' element={<HomePage/>}/>
            <Route path='personal-webpage/projects' element={<ProjectPage/>}/>
            <Route path='personal-webpage/gallery' element={<GalleryPage/>}/>
            <Route path='personal-webpage/aboutme' element={<AboutMePage/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
export default Application;
