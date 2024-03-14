import { useEffect, useState } from "react";
import Card from "./Card";
import "./style.css";
export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchGithubApi() {
    setLoading(true);
    try {
      let res = await fetch(`https://api.github.com/users/${userName}`);
      console.log(res);
      let result = await res.json();

      if (result) {
        setData(result);
        setLoading(false);
        setUserName("");
      }
    } catch (er) {
      console.log("error part run");
      setError(er);
      setLoading(true);
    }
  }

  function handleSubmit() {
    fetchGithubApi();
  }

  if (loading) {
    return <p>Loading Data.....! Please Wait...</p>;
  }

  return (
    <div className="container">
      <div className="input-area">
        <input
          type="text"
          name="search"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {data !== null ? <Card data={data} /> : null}
    </div>
  );
}
