import React from "react";
import "./NavLayout.css"; 

const NavLayout = ({ children }) => {
  return (
    <div className="nav-layout">
      {children}
    </div>
  );
};

export default NavLayout;
