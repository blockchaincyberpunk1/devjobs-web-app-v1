import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchPage from "./components/SearchPage";
import DetailPage from "./components/DetailPage";

function App() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(12);
  const [displayGrid, setDisplayGrid] = useState(true); // Corrected naming convention
  const [detail, setDetail] = useState({});

  // Fetch data on component mount and when limit changes
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data.json"); // Removed no-cors mode for simplicity
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonArray = await response.json();
        const filteredArray = jsonArray.slice(0, limit);
        setData(filteredArray);
      } catch (error) {
        console.error("Fetching data failed", error);
      }
    }

    fetchData();
  }, [limit]);

  // Function to request more data (pagination)
  function requestMoreData() {
    setLimit((prevLimit) => prevLimit + 6);
  }

  // Function to switch between the grid view and detail view
  function switchViewMode(id) {
    if (id) {
      const selectedDetail = data.find((entry) => entry.id === id) || {};
      setDisplayGrid(false);
      setDetail(selectedDetail);
    } else {
      setDisplayGrid(true);
    }
  }

  return (
    <>
      <Header switchViewMode={switchViewMode} />
      {displayGrid ? (
        <SearchPage
          data={data}
          requestMoreData={requestMoreData}
          switchViewMode={switchViewMode}
        />
      ) : (
        <DetailPage data={detail} />
      )}
    </>
  );
}

export default App;
