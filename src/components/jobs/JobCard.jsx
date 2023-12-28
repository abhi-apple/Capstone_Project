// import React from "react";
// import { job } from "../../dummydata";

// const JobCard = () => {
//   return (
//     <>
//       {job.map((val) => (
//         <div className="items shadow">
//           <h4>{val.name}</h4>
//           <h1>
//             <span>Rs</span>
//             {val.job}
//           </h1>
//           <p>{val.desc}</p>
//           <button className="outline-btn">GET STARTED</button>
//         </div>
//       ))}
//     </>
//   );
// };

// export default JobCard;

import React from "react";
import { job } from "../../dummydata";
// import "./jobcard.css";

const JobCard = () => {
  return (
    <>
      {job.map((val, index) => (
        <div className="custom-card" key={index}>
          <div className="custom-header">
            <span className="custom-icon">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </span>
            <p className="custom-alert">New message!</p>
          </div>

          <p className="custom-message">{val.desc}</p>

          <div className="custom-actions">
            <a className="custom-read" href="">
              Take a Look
            </a>

            <a className="custom-mark-as-read" href="">
              Mark as Read
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobCard;
