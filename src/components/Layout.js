import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <nav className={"navigation"}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sjokkbeskjed-for-torvbyens-ansatte">Sjokkbeskjed for Torvbyens ansatte</Link>
          </li>
          <li>
            <Link to="/article2">Article 2</Link>
          </li>
          <li>
            <Link to="/article3">Article 3</Link>
          </li>
          <li>
            <Link to="/article4">Article 4</Link>
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
