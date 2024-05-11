import { useState } from "react";
import { filterItems, foods } from "./data";

export default function FilterableList() {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }
  return (
    <>
      <div id="search">
        <SearchBar query={query} onChange={handleChange} />
        <hr />

        <List items={foods} query={query} />
      </div>
    </>
  );
}

function SearchBar(props) {
  const { query, onChange } = props;

  return (
    <label>
      Search: <input value={query} onChange={onChange} />
    </label>
  );
}

function List({ items, query }) {
  return (
    <table>
      <tbody>
        {filterItems(items, query).map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
