import React from 'react';
import {axiosInstance} from "../utils/axios";
import "../styles/comments.css";

const Comment = ({ id }) => {
  const [ comments, setComments ] = React.useState([]);

  React.useEffect(() => {
    async function fetchComments() {
      const res = await axiosInstance.get(`/comments/${id}`);
      setComments(res.data);
    }
    fetchComments();
  }, []);

  return (
    <div className="comment">
      <h1>Comments</h1>
      {comments.map((comment, index) => (
        <div key={comment.id}>
          <p>{comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Comment;
