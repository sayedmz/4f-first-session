import React from "react";
import "./Card.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const QueryCard = ({ id, title, content, buttonEnable = true }) => {
  return (
    <div className="appCard">
      <h4>{id}</h4>
      <span className="app-container">Title : {title}</span> <br />
      <span> body : {content}</span>
      <br />
      {buttonEnable ? (
        <Button
          component={Link}
          color="secondary"
          to={"/blogsQuery/" + String(id)}
        >
          See More
        </Button>
      ) : null}
    </div>
  );
};

export default QueryCard;
