import React, { useEffect, useState } from "react";
import "./Home.scss";

import axios from "axios";
import Card2 from "../../components/card/Card2";
import { Button } from "@mui/material";

const Home2 = () => {
  //1ere method
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);
  useEffect(() => {
    setLoading(true);
    const getAllPosts = () => {
      axios
        // .get("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5")
        .get(
          `https://jsonplaceholder.typicode.com/photos?_start=${page}&_limit=5`
        )
        .then((data) => {
          setPosts((prev) => [...prev, ...data.data]);
          console.log(data.data);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        })
        .finally(() => setLoading(false));
    };
    getAllPosts();
  }, [page]);

  if (loading) return "loading.......";
  if (error) return <>hey something wen wrong</>;
  return (
    <div className="home">
      {!error &&
        posts?.map((post) => (
          <>
            <Card2
              key={post?.id}
              id={post?.id}
              title={post?.title}
              url={post?.url}
            />
          </>
        ))}

      <Button variant="outlined" onClick={() => setPage((prev) => prev + 5)}>
        Load more
      </Button>
    </div>
  );
};

export default Home2;
