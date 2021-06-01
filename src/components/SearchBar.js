import React, { useState, useEffect } from "react";

const SearchBar = React.memo(({ setSearchTerm }) => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    setSearchTerm(debouncedTerm);
  }, [debouncedTerm, setSearchTerm]);

  return (
    <div className="search-bar ui segment">
      <form className="ui form">
        <div className="field">
          <label>Search for movies below</label>
          <input
            type="text"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
});

export default SearchBar;
