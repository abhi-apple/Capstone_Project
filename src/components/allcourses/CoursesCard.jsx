import React, { useState } from "react";
import "./courses.css";
import { coursesCard } from "../../dummydata";
import Heading from "../common/heading/Heading";

const CoursesCard = () => {
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

  return (
    <>
      <section className="coursesCard">
        <Heading title="Some of our trending Courses" />
        <div className="container grid2">
          {coursesCard.map((val) => (
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
                          <img src={details.dcover} alt="" />
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
                <h3> {val.priceAll}</h3>
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
    </>
  );
};

export default CoursesCard;
