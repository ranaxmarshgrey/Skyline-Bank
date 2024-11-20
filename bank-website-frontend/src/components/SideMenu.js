// src/components/SideMenu.js
import React from "react";
import "../styles/SideMenu.css";

const SideMenu = ({ activeMenu, setActiveMenu }) => {
  const menuItems = ["Overview", "Account", "Bill Payment", "Settings", "Profile"];

  return (
    <div className="side-menu">
      <h2 className="menu-title">Menu</h2>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li
            key={item}
            className={`menu-item ${activeMenu === item ? "active" : ""}`}
            onClick={() => setActiveMenu(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
