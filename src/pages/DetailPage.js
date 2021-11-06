import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosInstance } from "../utils/axios";
import Loading from "../components/Loading";
import PostComment from "../components/PostComment";
import Comment from "../components/Comment";
import "../styles/detailPage.css";

const DetailPage = () => {
  const [blog, setBlog] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();
  const history= useHistory();
  console.log(blog)

  useEffect(() => {
    const fetchOnePost = async () => {
      const res = await axiosInstance.get(
        `/posts/${slug}`
      );
      setBlog(res.data);
      setIsLoading(false);
    };
    fetchOnePost();
  });
  return isLoading ? (
    <Loading />
  ) : (
    <div className="detailPage">
      <h5 className="detailPage-title">{blog.title}</h5>
      <div className="detailPage-commentDate">
        <button onClick={() => history.goBack()}>Go Back</button>
        <p className="detailPage-date">
          Posted Date: {new Date(blog.createdAt).toLocaleDateString()}
        </p>
      </div>
      <img className="detailPage-image" src="/images/nature.jpg" alt="title" />
      <p className="detailPage-desc">{blog.description}</p>
      <a href="#comment">{blog.comments.length} Comments</a>
      <PostComment id={blog.id} />
      <div id="comment">
        <Comment id={blog.id} />
      </div>
    </div>
  );
};

export default DetailPage;
