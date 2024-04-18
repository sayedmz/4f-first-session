import React from "react";
import { useParams } from "react-router-dom";

import Card from "../../../components/card/Card";

export const BlogDetails = () => {
  const persons = [
    {
      id: 1,
      name: "Jane",
      lastName: "Doe",
      age: 36,
    },
    {
      id: 2,
      name: "John",
      lastName: "DoeDoe",
      age: 44,
      cloths: { jacket: "purple" },
    },
    {
      id: 3,
      name: "Joe",
      lastName: "joo",
      age: 60,
      cloths: { jacket: "red" },
    },
  ];
  const params = useParams();
  const { blog_id } = params;
  const filteredUser = persons.filter((el) => el.id === +blog_id);
  return (
    <div>
      {filteredUser.length ? (
        filteredUser.map((person) => (
          <>
            <Card
              id={person?.id}
              firstName={person?.name}
              lastName={person?.lastName}
              age={person?.age}
              color={person?.cloths?.jacket}
              likeSports
            />
          </>
        ))
      ) : (
        <h1>No User Found, Try different param </h1>
      )}
    </div>
  );
};
export default BlogDetails;
