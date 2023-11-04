import React, { useMemo } from "react";
import Card from "./Card";

export default function SearchGrid({ data, params, switchViewMode }) {
  // useMemo to memoize the filtered data to avoid unnecessary recalculations.
  const filteredData = useMemo(() => {
    // If no params are provided, return the full dataset.
    if (!params) return data;

    // Destructuring for clarity and to avoid repetitive access.
    const { fullTimeOnly, job, location } = params;

    // Filter the data based on the provided params.
    return data.filter(entry => {
      // Check for full-time only positions if specified.
      if (fullTimeOnly && entry.contract !== "Full Time") return false;

      // Check if the location matches if specified.
      if (location && !entry.location.toLowerCase().includes(location.toLowerCase())) return false;

      // Check if the job query is included in various fields if specified.
      if (job) {
        const jobLower = job.toLowerCase();
        return (
          entry.company.toLowerCase().includes(jobLower) ||
          entry.position.toLowerCase().includes(jobLower) ||
          entry.requirements.content.toLowerCase().includes(jobLower) ||
          entry.requirements.items.some(item => item.toLowerCase().includes(jobLower)) ||
          entry.role.content.toLowerCase().includes(jobLower) ||
          entry.role.items.some(item => item.toLowerCase().includes(jobLower))
        );
      }

      // If none of the above conditions match, include the entry.
      return true;
    });
  }, [data, params]);

  // Function to generate Card components from the filtered data.
  const generateCards = () => {
    return filteredData.map(entry => (
      <Card
        key={entry.id}
        data={entry}
        switchViewMode={switchViewMode}
      />
    ));
  };

  // Render the grid of cards.
  return <div className="search-grid width-default">{generateCards()}</div>;
}
