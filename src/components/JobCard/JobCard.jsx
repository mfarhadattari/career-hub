import {
  faDollar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const JobCard = ({ job }) => {
  const { jobId, title, company, location, salary, jobType, remote, logo } =
    job;
  return (
    <div className="border rounded-lg p-10">
      <img src={logo} alt="" className="w-40 h-20" />
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
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> {location}
          </p>
          <p>
            <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon> {salary}
          </p>
        </div>
        <button className="bg-purple-500 text-white px-7 py-4 text-xl font-medium rounded-lg mt-5 ">
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
