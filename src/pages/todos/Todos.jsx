import { Checkbox } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const getTodos = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/todos`)
        .then((res) => setTodos(res.data));
    };
    getTodos();
  }, []);

  return (
    <div>
      <h3>All Todos</h3>
      <ul>
        {todos.map((todos) => (
          <li key={todos.id}>
            <span>id : {todos.id}</span> <br />
            <span>title : {todos.title}</span>
            <br />
            <span>completed : {JSON.stringify(todos.completed)}</span>
            <span>
              <Checkbox checked={todos.completed} disabled />
            </span>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
