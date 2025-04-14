import React, { useEffect, useState } from "react";
import axios from "axios";
import ChartSection from "./components/ChartSection";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("./airnb.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []); 

  if (!data) {
    return <div>Loading...</div>;
  }

  // Process data to extract insights
  const insights = processData(data);

  return (
    <div className="App" style={{margin:"10px"}}>
      <Header />
      <ChartSection insights={insights} />
    </div>
  );
}
function processData(data) {
  const topLocations = data
    .map((item) => item.Title)
    .reduce((acc, title) => {
      acc[title] = (acc[title] || 0) + 1;
      return acc;
    }, {});

  const priceDistribution = data
    .map((item) => parseFloat(item["Price(in dollar)"]))
    .reduce((acc, price) => {
      const range = Math.floor(price / 100) * 100;
      acc[range] = (acc[range] || 0) + 1;
      return acc;
    }, {});

  const ratingDistribution = data
    .map((item) => {
      if (item["Review and rating"]) {
        return parseFloat(item["Review and rating"].split(" ")[0]);
      }
      return null; // or handle default value if necessary
    })
    .reduce((acc, rating) => {
      if (rating !== null) {
        acc[rating] = (acc[rating] || 0) + 1;
      }
      return acc;
    }, {});

  const numberOfBedsDistribution = data
    .map((item) => {
      if (item["Number of bed"]) {
        return parseInt(item["Number of bed"].split(" ")[0]);
      }
      return null; // or handle default value if necessary
    })
    .reduce((acc, beds) => {
      if (beds !== null) {
        acc[beds] = (acc[beds] || 0) + 1;
      }
      return acc;
    }, {});

  return {
    topLocations: Object.keys(topLocations).map((key) => ({
      location: key,
      count: topLocations[key],
    })),
    priceDistribution: Object.keys(priceDistribution).map((key) => ({
      priceRange: key,
      count: priceDistribution[key],
    })),
    ratingDistribution: Object.keys(ratingDistribution).map((key) => ({
      rating: key,
      count: ratingDistribution[key],
    })),
    numberOfBedsDistribution: Object.keys(numberOfBedsDistribution).map(
      (key) => ({ numberOfBeds: key, count: numberOfBedsDistribution[key] })
    ),
  };
}
export default App;
