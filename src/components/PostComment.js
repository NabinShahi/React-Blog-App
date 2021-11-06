import React from "react";
import { axiosInstance } from "../utils/axios";
import "../styles/postComment.css";

export default function PostComment({ id }) {
  const [comment, setComment] = React.useState({
    body: "",
  });

  function handleChange(e) {
    setComment(e.target.value);
  }

  async function postComment() {
    const token = localStorage.getItem("user-token");
    const res = await axiosInstance.post(`/comments/create/${id}`);
    setComment("");
  }

  return (
    <div className="comment">
      <div className="comment-container">
        <label htmlFor="comment">Write a Comment</label>
        <textarea
          rows="5"
          cols="20"
          type="text"
          name="comment"
          value={comment.body}
          onChange={handleChange}
          placeholder="Write a Comment"
        />
        <button onClick={postComment}>Post Comment</button>
      </div>
    </div>
  );
}
