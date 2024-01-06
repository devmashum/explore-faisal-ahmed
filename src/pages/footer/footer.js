import React from "react";

const Footer = () => {
  return (
    <div className=" bg-slate-100 p-10  text center mt-10 ">
      <h2 className="text-center text-2xl">Kontakt</h2>
      <h2 className="text-center">
        {" "}
        <a href="mailto:dev.mashum@gmail.com">E-mail: dev.mashum@gmail.com</a>
      </h2>

      <h2 className="text-center">Phone: +49 176 21995420</h2>
      <h2 className="text-center">
        <a
          className="text-center"
          href="https://www.linkedin.com/in/faisal-ahmed-mashum/"
        >
          LinkedIn: /faisal-ahmed-mashum
        </a>
      </h2>
    </div>
  );
};

export default Footer;
