import React, { useState } from "react";
import filterUrl from "../assets/mobile/icon-filter.svg";
import magnifierUrl from "../assets/desktop/icon-search.svg";
import locationUrl from "../assets/desktop/icon-location.svg";

export default function SearchMobile({ submitQuery }) {
  const [query, setQuery] = useState({
    job: "",
    location: "",
    fullTimeOnly: false
  });

  const [modalActive, setModalActive] = useState(false);

  // Toggles the state of the modal.
  const toggleModal = () => {
    setModalActive(prevModalActive => !prevModalActive);
  };

  // Handles changes to the input fields.
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setQuery(prevQuery => ({
      ...prevQuery,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  // Handles the form submission.
  const handleSubmit = (e) => {
    e.preventDefault();
    submitQuery(query);
    toggleModal(); // Close the modal after submitting the query.
  };

  return (
    <div className="search-mobile width-default">
      {/* Search input for job title */}
      <input
        type="text"
        className="input input-job input-job-mobile"
        placeholder="Filter by title..."
        name="job"
        value={query.job}
        onChange={handleChange}
      />
      <img className="img-filter-icon" src={filterUrl} alt="Filter icon" onClick={toggleModal} />
      {/* Button to open the modal */}
      <button
        type="button"
        className="btn btn-square"
        aria-label="Open search options"
        onClick={toggleModal}
      >
        <img
          className="img-mobile-btn"
          src={magnifierUrl}
          alt="Magnifying glass"
        />
      </button>
      {/* Modal for additional search filters */}
      <div className={modalActive ? "modal-wrapper" : "modal-wrapper hidden"}>
        <form className="modal" onSubmit={handleSubmit}>
          {/* Search input for location */}
          <div className="search-modal-container">
            <img className="img-search img-location" src={locationUrl} alt="Location icon" />
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
            <label className="label-checkbox" htmlFor="fullTimeOnly">Full Time Only</label>
            {/* Search button */}
            <button type="submit" className="btn btn-primary btn-modal">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
}
