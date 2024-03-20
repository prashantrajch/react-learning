export default function Search({ searchCity, setSearchInput, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        placeholder="Search City Name"
        value={searchCity}
        onChange={(ev) => setSearchInput(ev.target.value)}
      />
      <button>Search</button>
    </form>
  );
}
