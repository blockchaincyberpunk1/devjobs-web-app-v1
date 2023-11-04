import React from "react"; // Importing React from the 'react' package.

// Defining a functional component named 'DetailBanner' that takes 'props' as an argument.
export default function DetailBanner({ data }) { // Destructuring 'data' from 'props' for direct access.
  // The component returns JSX to render the UI for the detail banner.
  return (
    // A 'section' element with two classes to define the banner's main container.
    <section className="detail-banner width-small">
      {/* A 'div' that serves as a container for the company logo with a dynamic background color. */}
      <div
        className="banner-logo"
        style={{ backgroundColor: data.logoBackground }} // Inline style to set the background color using the 'data' prop.
      >
        {/* An 'img' element for the company logo with dynamic 'src' and 'alt' attributes. */}
        <img
          className="banner-logo-img"
          src={`/${data.logo}`} // The 'src' is a path to the logo image, which is a property of 'data'.
          alt={`${data.company} company logo`} // 'alt' attribute for accessibility, describing the image.
        />
      </div>
      {/* A 'div' that serves as a container for the company details and the link to the company site. */}
      <div className="banner-items-container">
        {/* A 'div' for the text content of the banner. */}
        <div className="banner-text-container">
          {/* An 'h2' element displaying the company name. */}
          <h2 className="banner-title">{data.company}</h2>
          {/* A paragraph that displays a simplified company website URL. */}
          <p>{`${data.company.replace(" ", "").toLowerCase()}.com`}</p>
        </div>
        {/* An anchor tag that links to the company's website. */}
        <a
          href={data.website} // The 'href' attribute is dynamically set to the company's website URL.
          target="_blank" // Opens the link in a new tab or window.
          rel="noopener noreferrer" // Security measure for opening links with 'target="_blank"'.
          className="btn btn-secondary" // Classes for styling the link as a button.
        >
          Company Site
        </a>
      </div>
    </section>
  );
}
