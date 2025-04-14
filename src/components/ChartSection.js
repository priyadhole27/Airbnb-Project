import React from "react";
import TopLocations from "./TopLocations";
import PriceDistribution from "./PriceDistribution";
import BedsDistribution from "./BedsDistribution";
import RatingDistribution from "./RatingDistribution";
// Import other components as needed

const ChartSection = ({ insights }) => (
  <>
    <div style={{ display: "flex", flexDirection: "row" }}>
      <TopLocations data={insights.topLocations} />
      <PriceDistribution data={insights.priceDistribution} />
    </div>
    <div style={{ display: "flex", flexDirection: "row" }}>
      <BedsDistribution data={insights.numberOfBedsDistribution} />
      <RatingDistribution data={insights.ratingDistribution} />
    </div>
  </>
);

export default ChartSection;
