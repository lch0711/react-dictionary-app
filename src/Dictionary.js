import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function Search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
