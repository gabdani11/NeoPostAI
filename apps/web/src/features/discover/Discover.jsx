import React from "react";
import "./discover.scss";
import FilterNavbar from "./components/filter/FilterNavbar";
import Card from "./components/cards/Card";

const Discover = () => {
  return (
    <div className="discover">
      <div className="heading">
        <h1>Good evening, Alice</h1>
        <p>Find inspiration for your next post.</p>
      </div>
      <div className="filterSection">
        <div className="socialMedia">
          <div className="instagram socialMediaBox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              ></path>
            </svg>
            <span>Instagram</span>
          </div>
          <div className="youtube socialMediaBox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
              >
                <path d="M2 12c0-3.3 0-4.95 1.464-5.975C4.93 5 7.286 5 12 5s7.071 0 8.535 1.025S22 8.7 22 12s0 4.95-1.465 5.975C19.072 19 16.714 19 12 19s-7.071 0-8.536-1.025S2 15.3 2 12"></path>
                <path d="M10.5 9.908v4.184a.41.41 0 0 0 .412.408a.4.4 0 0 0 .228-.068l3.175-2.074a.405.405 0 0 0 .003-.678l-3.175-2.11a.415.415 0 0 0-.573.11a.4.4 0 0 0-.07.228"></path>
              </g>
            </svg>
            <span>YouTube</span>
          </div>
          <div className="twitter socialMediaBox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
              ></path>
            </svg>
            <span>Twitter</span>
          </div>
          <div className="reddit socialMediaBox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
              >
                <path d="M15 17a5 5 0 0 1-6 0m9.5-12.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-3 0C14.333 4.667 12 5.8 12 9"></path>
                <path d="M12 21c4.418 0 8-2.686 8-6c0-.352-.043-.696-.12-1.031a2.498 2.498 0 1 0-2.652-3.508C15.824 9.55 13.997 9 12 9c-2 0-3.826.552-5.229 1.46A2.498 2.498 0 0 0 2 11.5a2.5 2.5 0 0 0 2.12 2.469Q4 14.472 4 15c0 3.314 3.582 6 8 6"></path>
                <path d="M15.25 13H15m.5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-5.75 0H9.5m.5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></path>
              </g>
            </svg>
            <span>Reddit</span>
          </div>
        </div>
        <FilterNavbar />
      </div>
      <div className="cardsSection">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Discover;
