import React from "react";
import { useParams } from "react-router-dom";
import Back from "../common/back/Back"
import { courses } from "../../dummydata";

const CourseTagsPage = () => {
  const { domain } = useParams();

  // Get courses for the selected domain
  const domainCourses = courses[domain];

  return (
    <>
    <Back title='Explore Courses' />
    <div>
      <h1>Courses for {domain}:</h1>
      
    </div>
    </>
  );
};

export default CourseTagsPage;
