import React from "react";

function Team() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "70vh" }}>
      <div className="row w-100 p-3 mt-5 border-top">
        <h1 className="text-center w-100">Created By</h1>
      </div>
      <div className="row w-100 p-3 d-flex justify-content-center">
        <div className="col-10 col-md-8 col-lg-6 p-4 text-center text-muted" style={{ lineHeight: "1.8", fontSize: "1.2em", background: "#f8fafc", borderRadius: "16px", boxShadow: "0 2px 16px rgba(60,72,88,0.08)" }}>
          {/* Image removed as requested */}
          <h4 className="mt-3">Jagruti Pawar</h4>
          <h6>Software Developer</h6>
          <p>
            
          </p>
          <p>
            Full-stack web developer with a passion for creating intuitive user experiences. Skilled in MERN stack development and always eager to learn new technologies.
          </p>
          <p>
            Connect on <a href="https://www.linkedin.com/in/jagruti-pawar-/">Linkedin</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
