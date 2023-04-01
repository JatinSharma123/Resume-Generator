import React from "react";

import resumeSvg from "./resume.svg";

import "./Header.css";

function Header() {
  return (
    <div className={"header"}>
      <div className={"left"}>
        <p className={"heading"}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={"heading"}>
          Make your own resume. <span>It's free</span>
        </p>
      </div>
      <div className={"right"}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
