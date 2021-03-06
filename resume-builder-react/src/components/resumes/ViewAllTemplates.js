import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";

export default function ViewAllTemplates() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../lottie/choose.json"),
    });
  }, []);

  return (
    <>
      <div className="container text-center">
        <h1 className="mt-3">Select Template</h1>
        <div className="row mb-5 mt-5">
          <div className="col-md-4 mx-auto my-5">
            <div ref={container}></div>
          </div>
          <div className="col-md-4 mx-auto my-5">
            <Link to="/template-one">
              <img
                className="template"
                src={"/images/resume-templates/template.png"}
                alt="template-one"
              />
            </Link>
          </div>
          <div className="col-md-4 mx-auto my-5">
            <Link to="/template-two">
              <img
                className="template"
                src={"/images/resume-templates/template1.png"}
                alt="template-two"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
