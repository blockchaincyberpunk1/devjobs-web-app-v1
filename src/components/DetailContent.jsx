import React from "react"; // Importing React from the 'react' package.

// A utility function to generate list items from an array.
// It takes an array 'arr' and returns a list of 'li' elements.
function generateListItems(arr) {
  // The 'map' function is used to iterate over the array and generate a new array of 'li' elements.
  return arr.map((item, index) => (
    // Each 'li' element contains the item text and a unique 'key' prop.
    <li key={index}>{item}</li>
  ));
}

// Defining a functional component named 'DetailContent' that takes 'props' as an argument.
export default function DetailContent({ data }) { // Destructuring 'data' from 'props' for direct access.
  // The component returns JSX to render the UI for the detail content.
  return (
    // A 'div' with a class to define the main container for the detail content.
    <div className="detail-content width-small">
      {/* A 'section' for the hero area of the content. */}
      <section className="section-hero">
        {/* Container for the title and apply button. */}
        <div className="hero-title-container">
          {/* Container for the text information like date, contract type, position, and location. */}
          <div className="hero-text-container">
            {/* Paragraph for the posted date and contract type with visual separators. */}
            <p>
              <time dateTime={data.postedAt}>{data.postedAt}</time>&nbsp;&nbsp;
              <span className="dot">&#8228;</span>
              &nbsp;&nbsp;
              {data.contract}
            </p>
            {/* The job position title. */}
            <h1 className="hero-title">{data.position}</h1>
            {/* The location of the job position. */}
            <h5 className="hero-location">{data.location}</h5>
          </div>
          {/* An anchor tag that links to the application page. */}
          <a href={data.apply} className="btn btn-primary btn-modal">
            Apply Now
          </a>
        </div>
        {/* A paragraph for the job description. */}
        <p className="description">{data.description}</p>
      </section>
      {/* A 'section' for the job requirements. */}
      <section className="section-info">
        {/* The title for the requirements section. */}
        <h2 className="section-title">Requirements</h2>
        {/* The content describing the requirements. */}
        <p>{data.requirements.content}</p>
        {/* An unordered list generated from the requirements items. */}
        <ul>{generateListItems(data.requirements.items)}</ul>
      </section>
      {/* A 'section' for the description of the job role. */}
      <section className="section-info">
        {/* The title for the 'What You Will Do' section. */}
        <h2 className="section-title">What You Will Do</h2>
        {/* The content describing the job role. */}
        <p>{data.role.content}</p>
        {/* An ordered list generated from the role items. */}
        <ol>{generateListItems(data.role.items)}</ol>
      </section>
    </div>
  );
}
