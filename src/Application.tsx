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
            <Route path='/' element={<HomePage/>}/>
            <Route path='projects' element={<ProjectPage/>}/>
            <Route path='gallery' element={<GalleryPage/>}/>
            <Route path='aboutme' element={<AboutMePage/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
export default Application;
