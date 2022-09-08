import { Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="article1" element={<Article1 />} />
          <Route path="article2" element={<Article2 />} />
          <Route path="article3" element={<Article3 />} />
          <Route path="article4" element={<Article4 />} />
          <Route path="article-long" element={<ArticleLong />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>

  );
}
