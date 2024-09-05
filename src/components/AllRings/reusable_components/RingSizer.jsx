import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../App";

const RingSizer = () => {
  const { imgAssetsUrl } = useContext(UserContext);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/shell.js";
    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "45427602",
          formId: "7a5a4450-ae5b-494d-904a-6c9c111d96e5",
          target: "#ring-sizer",
        });
      }
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="customization-form">
          <img
            src={`${imgAssetsUrl}/public/Animated-Loader.svg`}
            alt="logo"
            width="auto"
            height="auto"
          />
          <h1 className="center">Request Ring Sizer</h1>
          <div id="ring-sizer"></div>
        </div>
      </div>
    </>
  );
};

export default RingSizer;
