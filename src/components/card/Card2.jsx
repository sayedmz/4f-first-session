import React from "react";
import "./Card.scss";
import { Button } from "@mui/material";

const Card2 = ({ id, title, url }) => {
  return (
    <div className="appCard">
      this is my ID : {id}
      <span className="app-container">{title}</span>
      <br />
      <img src={url} alt="image" style={{ width: "100px", height: "100px" }} />
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

export default Card2;
