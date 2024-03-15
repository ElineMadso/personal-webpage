import React from "react";
//link
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Application = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route />
            <Route />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
export default Application;
