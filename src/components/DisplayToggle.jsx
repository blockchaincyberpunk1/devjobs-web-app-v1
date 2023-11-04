import React, { useState, useEffect } from "react";
import sunUrl from "../assets/desktop/icon-sun.svg";
import moonUrl from "../assets/desktop/icon-moon.svg";

export default function DisplayToggle() {
  // State to keep track of the current display mode.
  const [displayMode, setDisplayMode] = useState('light');

  // useEffect to handle the setting of the initial theme and sessionStorage retrieval.
  useEffect(() => {
    // Selecting the body element from the DOM.
    const body = document.querySelector("body");
    // Determining the default mode based on the user's system preference.
    const defaultMode = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    // Getting the display mode from sessionStorage or defaulting to the system preference.
    const mode = sessionStorage.getItem("devjobs_display_mode") || defaultMode;
    // Setting the display mode in the state.
    setDisplayMode(mode);
    // Applying the display mode to the body dataset.
    body.dataset.display = mode;
  }, []);

  // Function to handle the click event on the toggle button.
  const toggleDisplayMode = () => {
    // Toggling the display mode between 'light' and 'dark'.
    const newDisplayMode = displayMode === "dark" ? "light" : "dark";
    // Setting the new display mode in the state.
    setDisplayMode(newDisplayMode);
    // Applying the new display mode to the body dataset.
    document.body.dataset.display = newDisplayMode;
    // Saving the new display mode to sessionStorage.
    sessionStorage.setItem("devjobs_display_mode", newDisplayMode);
  };

  return (
    <div className="display-toggle">
      {/* Image representing light mode */}
      <img src={sunUrl} alt="Light mode" />
      {/* Button to toggle between light and dark mode */}
      <button
        type="button"
        className="btn-display-switch"
        onClick={toggleDisplayMode}
        aria-label={displayMode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      />
      {/* Image representing dark mode */}
      <img src={moonUrl} alt="Dark mode" />
    </div>
  );
}

