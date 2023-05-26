import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "components/Footer";
import NavBar from "components/NavBar";
import ExitForm from "components/ExitForm";

import Home from "pages/Home";
import NotFound from "pages/NotFound";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/404" element={<NotFound />} />

      </Routes>
      <Footer />
    </>
  );
}
