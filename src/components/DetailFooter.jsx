import React from "react"; // Importing React from the 'react' package.

// Defining a functional component named 'DetailFooter' that takes 'props' as an argument.
export default function DetailFooter({ data }) { // Destructuring 'data' from 'props' for direct access.
  // The component returns JSX to render the UI for the footer content.
  return (
    // A 'footer' element which semantically indicates the footer section of the document or section.
    <footer className="detail-footer">
      {/* A 'div' that serves as a container for the footer content with a specific width. */}
      <div className="footer-content-container width-small">
        {/* A 'div' that serves as a container for the text content of the footer. */}
        <div className="footer-text-container">
          {/* An 'h3' element displaying the job position, which is important for the document. */}
          <h3 className="footer-title">{data.position}</h3>
          {/* A paragraph displaying the company name. */}
          <p>{data.company}</p>
        </div>
        {/* An anchor tag that links to the application page, styled as a button. */}
        <a
          href={data.apply} // The 'href' attribute is dynamically set to the application URL.
          target="_blank" // Opens the link in a new tab or window.
          rel="noopener noreferrer" // Security measure for opening links with 'target="_blank"'.
          className="btn btn-primary btn-footer" // Classes for styling the link as a button.
        >
          Apply Now
        </a>
      </div>
    </footer>
  );
}
