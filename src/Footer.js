import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div className="row HumidityWind ">
      <div className="col-lg-8 offset-lg-2 text-center p-0">
        <hr />
        <p className="opacity-75">
          <a href="https://github.com/FSJPG/react_weather">Open-source</a>{" "}
          code by Forough
        </p>
      </div>
    </div>
  );
}

export default Footer;
