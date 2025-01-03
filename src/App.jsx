import { useState } from "react";
import Navigation from "./layout/Navigation";
import ContentArea from "./layout/ContentArea";
import CommentsSection from "./layout/CommentsSection";
import "./styles/main.scss";

function App() {
  const [currentPage, setCurrentPage] = useState("button");

  return (
    <div className="wiki-container">
      <Navigation onPageSelect={setCurrentPage} currentPage={currentPage} />
      <ContentArea pageId={currentPage} />
      <CommentsSection pageId={currentPage} />
    </div>
  );
}

export default App;
