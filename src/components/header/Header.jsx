import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <h6 className="head1">Hello I'm </h6>
        <h5 className="username">Suneel Kumar Vulavala</h5>
        <h6 className="text__light">Fullstack Developer</h6>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src="https://th.bing.com/th/id/OIP.V1ofvoCBOwgYFy3-MkufxgHaIZ?w=1080&h=1225&rs=1&pid=ImgDetMain" alt="myimage" className="mephoto" />
        </div>

       
      </div>
    </header>
  );
};

export default Header;
