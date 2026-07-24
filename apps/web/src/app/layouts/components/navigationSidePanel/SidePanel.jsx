import React from "react";
import "./sidepanel.scss";
import { Link } from "react-router-dom";
const SidePanel = () => {
  return (
    <aside className="sidePanel">
      <nav>
        <ol>
          <li>
            <Link to="discover">Discover</Link>
          </li>
          <li>
            <Link to="post-editor">Create</Link>
          </li>
          <li>Schedule</li>
        </ol>
      </nav>
      <div className="setting">
        <span>settings</span>
      </div>
    </aside>
  );
};

export default SidePanel;
