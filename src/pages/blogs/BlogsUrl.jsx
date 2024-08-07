import React, { useEffect, useState } from "react";
import "./Blogs.scss";

import axios from "axios";

import BlogCard from "../../components/card/BlogCard";
import { Button, TextField } from "@mui/material";
const BlogsUrl = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [post, setPost] = useState([]);
  const [isCreate, setCreate] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAllPosts = () => {
      setLoading(true);
      axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        // .get(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=30`)
        .then((res) => {
          setPost(res.data);
        })
        .finally(() => setLoading(false));
    };

    getAllPosts();
    setCreate(false);
  }, [isCreate]);

  const CreatePost = () => {
    axios
      .post(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          title: title,
          body: body,
          userId: 1,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        console.log("res", res);
        setCreate(true);
      });
  };
  if (loading) return <>loading..........</>;
  return (
    <div className="home">
      <div className="createPost">
        <div>
          <TextField
            label={"title"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label={"body"}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <Button variant="outlined" onClick={CreatePost}>
          create post
        </Button>
      </div>

      {post?.map((post) => (
        <>
          <BlogCard
            key={post?.id}
            id={post?.id}
            title={post?.title}
            content={post.body}
          />
        </>
      ))}
    </div>
  );
};

export default BlogsUrl;
