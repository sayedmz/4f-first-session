import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import BlogCard from "../../../components/card/BlogCard";
import { Button, TextField } from "@mui/material";

export const UrlDetails = () => {
  const params = useParams();
  const { posts_id } = params;
  const [post, setPost] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    setLoading(true);
    const getPost = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${posts_id}`)
        .then((res) => {
          setPost(res.data);
          setTitle(res.data.title);
          setBody(res.data.body);
        })
        .catch(() => setErr(true))
        .finally(() => setLoading(false));
    };
    const getCommentsById = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${posts_id}/comments`)
        .then((res) => setComments(res.data))
        .catch(() => setErr(true))
        .finally(() => setLoading(false));
    };
    getPost();
    getCommentsById();
  }, [posts_id]);

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

  // if (err) return <h1>No User Found, Try different param </h1>;
  if (loading) return <div>loading..........</div>;
  return (
    <div>
      <Button component={Link} variant="outlined" to={"/BlogsUrl"}>
        Back
      </Button>
      {!err ? (
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
export default UrlDetails;
