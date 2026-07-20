import React, { useEffect, useState } from "react";
import "./discover.scss";
import FilterNavbar from "./components/filter/FilterNavbar";
import Card from "./components/cards/Card";
import useDiscover from "./hook/useDiscover";
import { useDispatch, useSelector } from "react-redux";

const Discover = () => {
  const { fetchDiscover } = useDiscover();
  const trend = useSelector((state) => state.discover.trend);

  useEffect(() => {
    fetchDiscover();
  }, []);
  return (
    <div className="discover">
      <div className="heading">
        <h1>Good evening, Alice</h1>
        <p>Find inspiration for your next post.</p>
      </div>
      <div className="filterSection">
        <FilterNavbar />
      </div>
      <div className="cardsSection">
        {trend?.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
