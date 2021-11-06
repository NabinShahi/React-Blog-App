import React, { useEffect, useReducer, useState } from "react";
import "../styles/postblog.css";
import {axiosInstance} from '../utils/axios';

// const SUPPORTED_FORMATS = ["image/jpg", "images/jpeg", "images/png"];
const row = 5;
const column = 56;
const maxCharacter = 2000;

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      blogImage: false,
      title: "",
      blogDescription: "",
    };
  }

  return {
    ...state,
    [event.name]: event.value,
  };
};

const PostBlog = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const postedDate = (date) => {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  useEffect(() => {
    setFormData({
      name: "postDate", 
      value: postedDate(Date.now())
    })
  }, [formData.blogDescription])

  // const handleBlogImageChange = (e) => {
  //   if (SUPPORTED_FORMATS.includes(e.target.files[0].type)) {
  //     setBlogImage(e.target.files[0]);
  //   } else {
  //     setBlogImage("")
  //   }
  // }

  const handleChange = (event) => {
    const isFile = event.target.type === "file";

    if (isFile) {
      setFormData({
        name: event.target.name,
        value: event.target.files[0],
      });
    } else {
      setFormData({
        name: event.target.name,
        value: event.target.value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    event.target.reset();

    const res = await axiosInstance('/posts/create', {
      title: formData.title,
      description: formData.blogDescription
    });

    setFormData({ reset: true });
  };

  return (
    <form className="blogForm" onSubmit={handleSubmit}>
      <h1>Add Blogs</h1>
      <input type="file" name="blogImage" onChange={handleChange} accept="image/png, image/jpeg, image/jpg" />
      <input
        type="text"
        name="title"
        value={formData.title || ""}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        type="text"
        name="blogDescription"
        placeholder="Description"
        value={formData.blogDescription || ""}
        onChange={handleChange}
        rows={row}
        cols={column}
        maxLength={maxCharacter}
        required
      />
      <button type="submit" disabled={submitting}>
        Add Blog
      </button>
    </form>
  );
};

export default PostBlog;
