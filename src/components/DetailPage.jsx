import React, { useEffect } from "react"; // Importing React and the useEffect hook.
import DetailBanner from "./DetailBanner"; // Importing the DetailBanner component.
import DetailContent from "./DetailContent"; // Importing the DetailContent component.
import DetailFooter from "./DetailFooter"; // Importing the DetailFooter component.

// Defining a functional component named 'DetailPage' that takes 'props' as an argument.
export default function DetailPage({ data }) { // Destructuring 'data' from 'props' for direct access.
  // Using the useEffect hook to scroll to the top of the page on component mount.
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top-left corner of the document.
  }, []); // An empty dependency array means this effect will only run once after the initial render.

  // The component returns JSX to render the UI for the detail page.
  return (
    // React Fragment to group the list of children without adding extra nodes to the DOM.
    <>
      {/* 'main' element to semantically indicate the main content of the document. */}
      <main id="main" className="detail-page">
        {/* Rendering the DetailBanner component with the passed 'data' prop. */}
        <DetailBanner data={data} />
        {/* Rendering the DetailContent component with the passed 'data' prop. */}
        <DetailContent data={data} />
      </main>
      {/* Rendering the DetailFooter component with the passed 'data' prop. */}
      <DetailFooter data={data} />
    </>
  );
}
