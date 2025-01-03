import PropTypes from "prop-types";
import { pages } from "../data/pages";

function Navigation({ onPageSelect, currentPage }) {
  return (
    <nav className="wiki-navigation">
      <h2>Documentation</h2>
      <h3>Overview</h3>
      <ul>
        {pages
          .filter((page) => page.type === "page")
          .map((page) => (
            <li key={page.id}>
              <button
                className={currentPage === page.id ? "active" : ""}
                onClick={() => onPageSelect(page.id)}
              >
                {page.title}
              </button>
            </li>
          ))}
      </ul>
      <h3>Components</h3>
      <ul>
        {pages
          .filter((page) => page.type === "component")
          .map((page) => (
            <li key={page.id}>
              <button
                className={currentPage === page.id ? "active" : ""}
                onClick={() => onPageSelect(page.id)}
              >
                {page.title}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  onPageSelect: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
};

export default Navigation;
