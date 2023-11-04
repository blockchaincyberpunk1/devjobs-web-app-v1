// Importing React from 'react' package, which is necessary to use React and JSX.
import React from 'react';

// Defining a functional component named 'Card' that takes 'data' and 'switchViewMode' as props.
export default function Card({ data, switchViewMode }) {
  // Defining 'handleClick', an arrow function that takes an event 'e' as an argument.
  // This function will be called when the button within the card is clicked.
  const handleClick = (e) => {
    e.preventDefault(); // Prevents the default action of the event. In this case, prevents submitting a form if the button was inside one.
    switchViewMode(data.id); // Calls the 'switchViewMode' function passed as a prop with 'data.id' as its argument.
  };

  // The component returns JSX to render the UI.
  return (
    // A div with a class 'card' that acts as a container for the card content.
    <div className="card">
      {/* A div for displaying the company logo with a dynamic background color taken from the 'data' prop. */}
      <div
        className="company-logo"
        style={{ backgroundColor: data.logoBackground }} // Inline style to set the background color.
      >
        {/* Image tag for the company logo with dynamic 'src' and 'alt' attributes. */}
        <img
          className="company-logo-img"
          src={`/${data.logo}`} // The 'src' is a path to the logo image, which is a property of 'data'.
          alt={`${data.company} company logo`} // 'alt' attribute for accessibility, describing the image.
        />
      </div>
      {/* Paragraph tag to display the posting date and contract type, separated by a dot. */}
      <p>
        {data.postedAt} {/* Displaying the date when the job was posted. */}
        &nbsp;&nbsp;{/* Non-breaking spaces for spacing. */}
        <span className="dot">&#8228;</span> {/* A dot used as a visual separator. */}
        &nbsp;&nbsp;{/* More non-breaking spaces for spacing. */}
        {data.contract} {/* Displaying the type of contract for the job. */}
      </p>
      {/* A button that when clicked, will trigger the 'handleClick' function. */}
      <button
        type="button" // Specifying the button type as 'button' to denote that it is a clickable button.
        className="card-title" // Class name for styling purposes.
        onClick={handleClick} // Event handler for click event, linked to 'handleClick'.
      >
        {data.position} {/* Displaying the job position/title. */}
      </button>
      {/* Paragraph tag to display the company name. */}
      <p>{data.company}</p>
      {/* Heading tag for the job location, styled as a card location. */}
      <h5 className="card-location">{data.location}</h5>
    </div>
  );
}
