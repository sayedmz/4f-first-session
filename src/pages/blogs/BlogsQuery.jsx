import React, { useEffect, useState } from "react";
import "./Blogs.scss";
import axios from "axios";

import { Button, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import QueryCard from "../../components/card/QueryCard";

const BlogsQuery = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { data: posts, isLoading } = useQuery({
    queryKey: ["photos"],
    queryFn: async () =>
      axios
        .get(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=50`)
        .then((res) => res.data),
  });

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
      });
  };
  if (isLoading) return <>loading..........</>;
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

      {posts?.map((post) => (
        <>
          <QueryCard
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

export default BlogsQuery;
