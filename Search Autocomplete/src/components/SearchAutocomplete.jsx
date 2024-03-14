import { useEffect, useState } from "react";
import "./style.css";
import Suggestions from "./Suggestions";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [user, setUser] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [activeSuggestions, setActiveSuggestions] = useState(false);

  function handleInput(ev) {
    let value = ev.target.value;
    setUser(value);
    if (value) {
      // this code is use indexOf method
      // const filterUser = data.filter((name) => name.toLowerCase().indexOf(value.toLowerCase()) > -1)

      // this code is use match method
      const filterUser = data.filter((name) =>
        name.toLowerCase().match(value.toLowerCase())
      );

      setFilteredData(filterUser);
      setActiveSuggestions(true);
    } else {
      setActiveSuggestions(false);
    }
  }

  function handleClick(name) {
    setUser(name);
    setActiveSuggestions(false);
  }

  async function fetchUsersList() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users/");
      const result = await res.json();
      let name = result.users.map((userItem) => userItem.firstName);

      if (name) {
        setData(name);
        setLoading(false);
      }
    } catch (er) {
      setError(er);
    }
  }

  useEffect(() => {
    fetchUsersList();
  }, []);

  return (
    <div className="container">
      <input
        type="text"
        name="search-user"
        placeholder="Search Users here...."
        value={user}
        onChange={handleInput}
      />
      {data.length == 0 ? (
        error ? (
          <p>{error}</p>
        ) : (
          <p>Data is not found</p>
        )
      ) : loading ? (
        <p>Data is loading......! Please wait</p>
      ) : (
        activeSuggestions && (
          <Suggestions data={filteredData} handleClick={handleClick} />
        )
      )}
    </div>
  );
}
