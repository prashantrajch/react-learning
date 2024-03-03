import { useState } from "react";
import MenuList from "./Menu-List";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItems({ items }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState([]);
  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }
  return (
    <li className="menu-item">
      <div style={{ display: "flex", gap: "20px" }}>
        <p>{items.label}</p>
        {items && items.children && items.children.length > 0 ? (
          <span onClick={() => handleToggleChildren(items.label)}>
            {displayCurrentChildren[items.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </div>
      {items &&
      items.children &&
      items.children.length > 0 &&
      displayCurrentChildren[items.label] ? (
        <MenuList list={items.children} />
      ) : null}
    </li>
  );
}
