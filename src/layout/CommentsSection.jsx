import { useState } from "react";
import PropTypes from "prop-types";

function CommentsSection({ pageId }) {
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setComments((prev) => ({
      ...prev,
      [pageId]: [
        ...(prev[pageId] || []),
        {
          id: Date.now(),
          text: newComment,
          timestamp: new Date().toISOString(),
        },
      ],
    }));
    setNewComment("");
  };

  const pageComments = comments[pageId] || [];

  return (
    <aside className="comments-section">
      <h2>Comments</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button type="submit">Post Comment</button>
      </form>
      <div className="comments-list">
        {pageComments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
            <small>{new Date(comment.timestamp).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </aside>
  );
}

CommentsSection.propTypes = {
  pageId: PropTypes.string.isRequired,
};

export default CommentsSection;
