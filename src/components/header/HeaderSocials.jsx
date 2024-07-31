import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/suneel-kumar-vulavala-1b8a382a8/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Suneel823" target="_blank">
        <FaGithub />
      </a>
      <a href="mailto:vulavalasuneelkumar823@gmail.com" target="_blank">
        <IoIosMail />
      </a>
    </div>
  );
};

export default HeaderSocials;
