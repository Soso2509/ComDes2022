import React from "react";

import "./scss/main.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Article1 from "./pages/Article1";
import Article2 from "./pages/Article2";
import Article3 from "./pages/Article3";
import Article4 from "./pages/Article4";
import ArticleLong from "./pages/ArticleLong";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="sjokkbeskjed-for-torvbyens-ansatte"
            element={<Article1 />}
          />
          <Route path="renteokning" element={<Article2 />} />
          <Route path="et-hav-av-plast" element={<Article3 />} />
          <Route path="planeten-koker-er-det-for-sent" element={<Article4 />} />
          <Route path="article-long" element={<ArticleLong />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
