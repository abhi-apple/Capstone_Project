import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Back from "../common/back/Back";
import { coursesCard2 } from "../../dummydata";
import "./courses.css";

const CourseTagsPage = () => {
  const [confirmPopupVisible, setConfirmPopupVisible] = useState(false);
  const [successPopupVisible, setSuccessPopupVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [enrolledCourse, setEnrolledCourse] = useState(null);

  const handleEnrollClick = (course) => {
    setEnrolledCourse(course);
    setConfirmPopupVisible(true);
  };

  const handleConfirmEnroll = () => {
    setIsLoading(true);
    // Simulate API call or any other asynchronous task
    setTimeout(() => {
      setIsLoading(false);
      setConfirmPopupVisible(false);
      setSuccessPopupVisible(true);
    }, 2000); // 2 seconds delay
  };

  const { domain } = useParams();

  return (
    <>
      <Back title="Explore Courses" />
      <div>
        <h1>Courses for {domain}:</h1>
        <section className="coursesCard">
          <div className="container grid2">
            {coursesCard2.slice(0, 6).map((val) => (
              <div className="items" key={val.id}>
                <div className="content flex">
                  <div className="left">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <h1>{val.coursesName}</h1>
                    <div className="rate">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <label htmlFor="">(5.0)</label>
                    </div>
                    <div className="details">
                      {val.courTeacher.map((details, index) => (
                        <div className="box" key={index}>
                          <div className="dimg">
                            {/* <img src={details.dcover} alt="" /> */}
                          </div>
                          <div className="para">
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="price">
                  <h3> {val.priceAll}  </h3>
                </div>
                <button className="outline-btn" onClick={() => handleEnrollClick(val)}>
                  ENROLL NOW !
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Confirmation Popup */}
        {confirmPopupVisible && (
          <div className="popup">
            <div className="popup-content">
              <p>Confirm enrollment in {enrolledCourse?.coursesName}?</p>
              {isLoading ? (
                <div className="loader"></div>
              ) : (
                <>
                  <button onClick={handleConfirmEnroll}>Confirm</button>
                  <button onClick={() => setConfirmPopupVisible(false)}>Cancel</button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Success Popup */}
        {successPopupVisible && (
          <div className="popup">
            <div className="popup-content">
              <p>You have been successfully enrolled in {enrolledCourse?.coursesName}.</p>
              <button onClick={() => setSuccessPopupVisible(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CourseTagsPage;
