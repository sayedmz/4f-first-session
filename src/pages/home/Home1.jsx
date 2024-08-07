import React, { useEffect, useState } from "react";
import "./Home.scss";

import Card1 from "../../components/card/Cared1";
import axios from "axios";

const Home1 = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getAllPosts = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((data) => setPosts(data.data))
        .catch((err) => {
          console.log(err);
          setError(true);
        })
        .finally(() => setLoading(false));
    };

    getAllPosts();
  }, []);

  if (loading) return "loading.......";
  if (error) return <>hey something wen wrong</>;
  return (
    <div className="home">
      {posts.map((post) => (
        <>
          <Card1
            key={post?.id}
            id={post?.id}
            title={post?.title}
            body={post?.body}
          />
        </>
      ))}
    </div>
  );
};

export default Home1;
