import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { getPageContent } from "../data/wikiContent";
import AboutPage from "../pages/AboutPage";
import PropTypes from "prop-types";
import { pages } from "../data/pages";

function ContentArea({ pageId }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Only fetch markdown content for component pages
    const page = pages.find((p) => p.id === pageId);
    if (page && page.type === "component") {
      setLoading(true);
      getPageContent(pageId)
        .then(setContent)
        .finally(() => setLoading(false));
    }
  }, [pageId]);

  if (loading) return <div className="content-area">Loading...</div>;

  // Regular pages
  if (pageId === "about") {
    return <AboutPage />;
  }

  // Component documentation
  return (
    <main className="content-area">
      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  );
}

ContentArea.propTypes = {
  pageId: PropTypes.string.isRequired,
};

export default ContentArea;
