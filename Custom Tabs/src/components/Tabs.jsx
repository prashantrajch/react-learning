import { useState } from "react";

export default function Tabs({ tabContent }) {
  const [currentTab, setCurrentTab] = useState(0);

  function handleClick(curId) {
    setCurrentTab(curId);
  }

  return (
    <div className="container">
      <div className="tab-heading">
        {tabContent.map((tabItem, ind) => (
          <div
            className={`item ${currentTab == ind ? "active" : ""}`}
            key={tabItem.label}
            onClick={() => handleClick(ind)}
          >
            <span>{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="tab-content">{tabContent[currentTab].content}</div>
    </div>
  );
}
