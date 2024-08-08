// npm i @tanstack/react-query
// npm i -D @tanstack/eslint-plugin-query
import React from "react";
import "./Home.scss";
import axios from "axios";
import Card2 from "../../components/card/Card2";
import { useQuery } from "@tanstack/react-query";

const HomeQuery = () => {
  // Queries 1 fetch
  //   const { data, isLoading, error } = useQuery({
  //     queryKey: ["todos"],
  //     queryFn: async () => {
  //       const res = await fetch(
  //         `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5`
  //       );
  //       return await res.json();
  //     },
  //   });

  // Queries 2   2eme method axios

  const { data, isLoading, error } = useQuery({
    queryKey: ["photos"],
    queryFn: async () =>
      axios
        .get(`https://jsonplaceholder.typicode.com/photos?_start=0&_limit=50`)
        .then((res) => res.data),
  });

  if (isLoading) return "loading.......";
  if (error) return <>hey something wen wrong</>;
  return (
    <div className="home">
      {!error &&
        data?.map((post) => (
          <>
            <Card2
              key={post?.id}
              id={post?.id}
              title={post?.title}
              url={post?.url}
            />
          </>
        ))}
    </div>
  );
};

export default HomeQuery;
