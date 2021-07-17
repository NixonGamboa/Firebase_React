import React, { useContext, useEffect } from "react";
import Logo from "../utils/img/sofkau-logo-horizontal.png";

const Layout = (props) => {
  return (
    <div className="container ">
      <div>
        <img src={Logo} alt="User Avatar" className="img-size-200" />
      </div>
      {props.children}
    </div>
  );
};
export default Layout;
