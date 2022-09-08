import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/article1">Article1</Link>
          </li>
          <li>
            <Link to="/article2">Article2</Link>
          </li>
          <li>
            <Link to="/article3">Article3</Link>
          </li>
          <li>
            <Link to="/article4">Article4</Link>
          </li>
          <li>
            <Link to="/article-long">Article-Long</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
}
