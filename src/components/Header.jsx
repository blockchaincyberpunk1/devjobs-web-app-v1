import React from "react";
import DisplayToggle from "./DisplayToggle";
import logoUrl from "../assets/desktop/logo.svg";

export default function Header({ switchViewMode }) {
  // Function to handle the click event on the logo button.
  const handleClick = () => {
    // Calling the switchViewMode function passed via props with 'null' to reset the view.
    switchViewMode(null);
  };

  return (
    // The 'header' element semantically represents a container for introductory content.
    <header className="header">
      {/* Container for the title and display toggle with a default width. */}
      <div className="title-display-container width-default">
        {/* Button that acts as a logo and allows users to return to the home page. */}
        <button
          type="button"
          aria-label="Return to home page"
          className="btn-return-home"
          onClick={handleClick} // Assigning the handleClick function directly to the onClick event.
        >
          {/* Image of the logo. */}
          <img className="logo" src={logoUrl} alt="Devjobs logo" />
        </button>
        {/* Component for toggling the display mode (light/dark). */}
        <DisplayToggle />
      </div>
    </header>
  );
}

