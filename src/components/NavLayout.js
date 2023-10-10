import React from "react";
import "./NavLayout.css"; // Import a custom CSS file for styling

const NavLayout = ({ children }) => {
  return (
    <div className="nav-layout">
      {children}
    </div>
  );
};

export default NavLayout;
