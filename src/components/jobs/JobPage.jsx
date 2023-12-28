import React from "react";
import Back from "../common/back/Back";
import JobCard from "./JobCard";
import "./jobc.css";
// import "./jobc.css";
import Faq from "./Faq";

const JobPage = () => {
  return (
    <>
      <Back title="Find Your Job" />
      <section className="price padding">
        <div className="container grid">
          <JobCard />
        </div>
      </section>
      <Faq />
    </>
  );
};

export default JobPage;
