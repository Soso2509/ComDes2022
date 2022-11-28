import React from "react";

import "./scss/main.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Article1 from "./pages/Article1";
import Article2 from "./pages/Article2";
import Article3 from "./pages/Article3";
import Article4 from "./pages/Article4";
import ArticleLong from "./pages/ArticleLong";
import NoPage from "./pages/NoPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />
      <Nav />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="sjokkbeskjed-for-torvbyens-ansatte"
          element={<Article1 />}
        />
        <Route path="renteokning" element={<Article2 />} />
        <Route path="et-hav-av-plast" element={<Article3 />} />
        <Route path="planeten-koker-er-det-for-sent" element={<Article4 />} />
        <Route path="en-moderne-dyrevise" element={<ArticleLong />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
