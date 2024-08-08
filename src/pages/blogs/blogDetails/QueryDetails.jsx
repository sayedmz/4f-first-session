import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import BlogCard from "../../../components/card/BlogCard";
import { Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useQuery } from "@tanstack/react-query";

export const QueryDetails = () => {
  const params = useParams();
  const { posts_id } = params;

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // comments
  const { data: comments, isLoading: commentsLoading } = useQuery({
    queryKey: ["comments", posts_id],
    queryFn: async () =>
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${posts_id}/comments`)
        .then((res) => res.data),
  });
  //post by id
  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["poseById", posts_id],
    queryFn: async () =>
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${posts_id}`)
        .then((res) => {
          setTitle(res.data.title);
          setBody(res.data.body);
          return res.data;
        }),
  });
  //updatePost
  const updatePost = () => {
    axios
      .put(
        `https://jsonplaceholder.typicode.com/posts/${posts_id}`,
        {
          title: title,
          body: body,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => console.log("res", res));
  };
  //deletePost
  const deletePost = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${posts_id}`)
      .then((res) => console.log("res", res));
  };

  // if (err) return <h1>No User Found, Try different param </h1>;
  if (isLoading || commentsLoading) return <div>loading..........</div>;
  return (
    <div>
      <Button component={Link} variant="outlined" to={"/blogsQuery"}>
        Back
      </Button>
      <DeleteIcon color="error" onClick={deletePost}></DeleteIcon>
      {!error ? (
        <section>
          <BlogCard
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.body}
            buttonEnable={false}
          />
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

          <Button variant="outlined" onClick={updatePost}>
            Edit this post
          </Button>
          <h3>All comments</h3>
          <ul>
            {comments.map((comments) => (
              <li key={comments.id} className="commentsSection">
                <span>id : {comments.id}</span>
                <span>name : {comments.name}</span>
                <span>email : {comments.email}</span>
                <span>body : {comments.body}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <h1>No User Found, Try different param </h1>
      )}
    </div>
  );
};
export default QueryDetails;
