import React, { useState } from "react";
import magnifierUrl from "../assets/desktop/icon-search.svg";
import locationUrl from "../assets/desktop/icon-location.svg";

export default function SearchBar({ placeholderText, labelText, submitQuery }) {
  // State for the search query with job, location, and fullTimeOnly fields.
  const [query, setQuery] = useState({
    job: "",
    location: "",
    fullTimeOnly: false
  });

  // Function to handle changes in the input fields and update the state accordingly.
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setQuery(prevQuery => ({
      ...prevQuery,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  // Function to handle the form submission.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior.
    submitQuery(query); // Call the submitQuery function passed via props with the current query state.
  };

  return (
    // Wrapping the search bar in a form element for proper semantics.
    <form className="search-bar width-default" onSubmit={handleSubmit}>
      {/* Search input for job title */}
      <div className="search-input-container search-job">
        <img className="img-search img-magnifier" src={magnifierUrl} alt="Search by job title" />
        <input
          type="text"
          className="input input-job"
          placeholder={placeholderText}
          name="job"
          value={query.job}
          onChange={handleChange}
        />
      </div>
      {/* Search input for location */}
      <div className="search-input-container search-location">
        <img className="img-search img-location" src={locationUrl} alt="Search by location" />
        <input
          type="text"
          className="input input-location"
          placeholder="Filter by location..."
          name="location"
          value={query.location}
          onChange={handleChange}
        />
      </div>
      {/* Checkbox for full-time only filter */}
      <div className="search-controls-container">
        <input
          type="checkbox"
          className="checkbox-default"
          name="fullTimeOnly"
          id="fullTimeOnly"
          checked={query.fullTimeOnly}
          onChange={handleChange}
        />
        {/* Label is properly associated with the input by using the 'htmlFor' prop */}
        <label className="label-checkbox" htmlFor="fullTimeOnly">{labelText}</label>
        {/* Search button */}
        <button type="submit" className="btn btn-primary btn-search">Search</button>
      </div>
    </form>
  );
}
