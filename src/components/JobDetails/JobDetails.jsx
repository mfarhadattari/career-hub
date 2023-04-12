import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faDollar,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const JobDetails = () => {
  const [jobDetails, setJobDetails] = useState({});
  const { jobId } = useParams();
  const data = useLoaderData();
  useEffect(() => {
    if (data) {
      const matchedJob = data.find((job) => job.jobId == jobId);
      setJobDetails(matchedJob);
    }
   
  }, [data]);
  return (
    <div className="container mx-auto mt-10 p-10">
      <div className="grid grid-cols-3 gap-5">
        {/* job description section */}
        <div className="font-semibold text-lg col-span-2">
          <p>
            <span>Job Description: </span>
            <span className="text-gray-700">{jobDetails.jobDescription}</span>
          </p>
          <p className="mt-6">
            <span>Job Responsibility: </span>
            <span className="text-gray-700">
              {jobDetails.jobResponsibility}
            </span>
          </p>
          <div className="mt-6">
            <h4>Educational Requirements: </h4>
            <p className="text-gray-700">{jobDetails.education}</p>
          </div>
          <div className="mt-6">
            <h4>Experiences: </h4>
            <p className="text-gray-700">{jobDetails.experience}</p>
          </div>
        </div>

        {/* job details section */}
        <div className="col-span-1">
          <div className="p-10 bg-slate-200 rounded-lg">
            <div>
              <h1 className="text-black text-xl font-bold border-b border-slate-300 pb-5">
                Job Details
              </h1>
              <p className="text-gray-700 font-semibold mt-6">
                <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon>{" "}
                <span className="text-black">Salary:</span> {jobDetails.salary}{" "}
                (Per Month){" "}
              </p>
              <p className="text-gray-700 font-semibold mt-3">
                <FontAwesomeIcon icon={faCalendarCheck}></FontAwesomeIcon>{" "}
                <span className="text-black">Job Title:</span>{" "}
                {jobDetails.title}{" "}
              </p>
            </div>
            <div className="mt-10">
              <h1 className="text-black text-xl font-bold border-b border-slate-300 pb-5">
                Job Details
              </h1>
              <div className="text-gray-700 font-semibold mt-6 flex gap-3">
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{" "}
                <p>
                  <span className="text-black">Phone:</span>{" "}
                  {jobDetails?.contact?.phone}
                </p>
              </div>
              <div className="text-gray-700 font-semibold mt-3 flex gap-3">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{" "}
                <p>
                  <span className="text-black">Email:</span>{" "}
                  {jobDetails?.contact?.email}
                </p>
              </div>
              <div className="text-gray-700 font-semibold mt-3 flex gap-3">
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                <p>
                  <span className="text-black">Address:</span>{" "}
                  {jobDetails?.contact?.address}
                </p>
              </div>
            </div>
          </div>
          <button className="bg-purple-500 text-white px-7 py-4 text-xl font-medium rounded-lg mt-8 w-full ">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
