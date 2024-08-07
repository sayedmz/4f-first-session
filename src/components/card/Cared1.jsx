import React from "react";
import "./Card.scss";
import { Button } from "@mui/material";

const Card1 = ({ id, title, body }) => {
  return (
    <div className="appCard">
      this is my ID : {id}
      <span className="app-container">{title}</span>
      <span>{body}</span>
      <br />
      <div>
        <Button variant="contained" color="success">
          see more
        </Button>
        <Button variant="contained" color="error">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Card1;
