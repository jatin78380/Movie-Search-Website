const Search = ({handleInput,SearchResult}) => {
  return (
    <div className="container">
      <input type="text" name="movie"  placeholder="Search Movie here." onChange={handleInput} onKeyDown={SearchResult}></input>
    </div>
  );
};
export default Search;