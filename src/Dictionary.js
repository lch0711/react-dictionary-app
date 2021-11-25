import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";

import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }

  function Search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001029ef05cc3634f97882f35bd71ff9f4d";
    let photoUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(photoUrl, {
        headers: {
          Authorization: `Bearer ${pexelsApiKey}`,
        },
      })
      .then(handlePhotoResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
      <Photos photo={photos} />
    </div>
  );
}
