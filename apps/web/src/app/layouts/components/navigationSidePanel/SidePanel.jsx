import React from "react";
import "./sidepanel.scss";
const SidePanel = () => {
  return (
    <aside className="sidePanel">
      <nav>
        <ol>
          <li>Discover</li>
          <li>Create</li>
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
