import React, { useEffect, useState } from "react";
import "./discover.scss";
import FilterNavbar from "./components/filter/FilterNavbar";
import Card from "./components/cards/Card";
import useDiscover from "./hook/useDiscover";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/ui/Loading.jsx";

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
        {trend
         ? (
          trend.map((item, index) => <Card key={index} item={item} />)
        ) : (
          <div className="loading">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default Discover;
