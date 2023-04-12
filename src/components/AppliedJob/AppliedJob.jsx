import { faDollar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const AppliedJob = ({ appliedJob }) => {
  const { jobId, title, company, location, salary, jobType, remote, logo } =
    appliedJob;
  const navigate = useNavigate();
  return (
    <div className="border p-10 mt-10 rounded-lg md:flex items-center justify-between">
      <div className="md:flex gap-10 items-center">
        <div className="px-10 py-14 bg-gray-100 rounded-lg w-fit h-fit">
          <img src={logo} alt="" className="h-10 w-28" />
        </div>
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <h3 className="text-xl font-semibold text-gray-500 mt-2 mb-4">
            {company}
          </h3>
          <div className="flex gap-5">
            <p className="w-fit border border-purple-500 text-purple-500 px-5 py-2 font-semibold rounded-md">
              {remote ? "Remote" : "Onsite"}
            </p>
            <p className="w-fit border border-purple-500 text-purple-500 px-5 py-2 font-semibold rounded-md">
              {jobType}
            </p>
          </div>
          <div className="md:flex gap-5 my-4 text-lg font-medium text-gray-600">
            <p>
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>{" "}
              {location}
            </p>
            <p>
              <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon> {salary}
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate(`/details-job/${jobId}`)}
        className="bg-purple-500 text-white px-7 py-4 text-xl font-medium rounded-lg mt-5 "
      >
        View Details
      </button>
    </div>
  );
};

export default AppliedJob;
