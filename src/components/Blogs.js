import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "../styles/blogs.css";
import {axiosInstance} from "../utils/axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [dataState, setDataState] = useState(undefined);
  const history = useHistory();

  const handleDefault = () => {
    setDataState(blogs);
  };

  const handleAscending = () => {
    setDataState(blogs?.sort(dynamicSort("title")))
  }

  const handleDescending = () => {
    setDataState(blogs?.sort(dynamicSort("title").reverse()))
  }

  const handleDateOldest = () => {
    setDataState(blogs.reverse())
  }

  React.useEffect(() => {
    async function fetchBlogs() {
      const res = await axiosInstance.get("http://localhost:5000/api/v1/posts/");
      setBlogs(res.data.data);
    }
    handleDefault();
    fetchBlogs();
  }, [blogs]);

  const dynamicSort = (property) => {
    let sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return (a, b) => {
      const result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };

  return (
    <div className="blog-container">
      <h1>Blogs</h1>
      <select name="sort" id="sort">
        <option onClick={handleDefault}>Date Sort Newest</option>
        <option onClick={handleDateOldest}>Date Sort Oldest</option>
        <option onClick={handleAscending}>A-Z Sort</option>
        <option onClick={handleDescending}>Z-A Sort</option>
      </select>
      {dataState?.map((blog, index) => (
        <div className="blogs" key={index}>
          <img className="blogs-image" src="/images/nature.jpg" alt="title" />
          <h5 className="blogs-title">{blog.title}</h5>
          <p className="blogs-desc">
            {blog.description} <span><Link to={`/${blog.slug}`}>Read More</Link></span>
          </p>
          <div className="blogs-comments">
            <button>{blog.comments.length} Comments</button>
            <p className="blogs-date">
              Posted Date: {new Date(blog.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
