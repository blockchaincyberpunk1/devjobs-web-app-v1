import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "./SearchBar";
import SearchGrid from "./SearchGrid";
import SearchMobile from "./SearchMobile";

export default function SearchPage({ data, switchViewMode, requestMoreData }) {
  // Scroll to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State to hold the search parameters
  const [params, setParams] = useState(null);

  // Memoized callback to submit the search query
  const submitQuery = useCallback((query) => {
    setParams({ ...query });
  }, []);

  // Memoized callback for requesting more data
  const handleClick = useCallback((e) => {
    e.preventDefault();
    requestMoreData();
  }, [requestMoreData]);

  // Determine the placeholder and label text based on window width
  const placeholderText = window.innerWidth >= 1200
    ? "Filter by title, companies, expertise..."
    : "Filter by title...";
  const labelText = window.innerWidth >= 1200 ? "Full Time Only" : "Full Time";

  return (
    <main id="main">
      {/* Conditional rendering based on window width */}
      {window.innerWidth >= 720 ? (
        <SearchBar
          submitQuery={submitQuery}
          placeholderText={placeholderText}
          labelText={labelText}
        />
      ) : (
        <SearchMobile submitQuery={submitQuery} />
      )}

      {/* Search results grid */}
      <SearchGrid
        data={data}
        switchViewMode={switchViewMode}
        params={params}
      />

      {/* Button to load more results */}
      <div className="load-more-btn-container">
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Load More
        </button>
      </div>

      {/* Attribution section */}
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/joshdail">Sheneeza Volcov</a>.
      </footer>
    </main>
  );
}
